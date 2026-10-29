import { defineConfig } from 'astro/config';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Notes left in Markdown as <!-- comments --> are for the author only: drop them from the published HTML
function remarkStripComments() {
  const strip = (node) => {
    if (!node.children) return;
    node.children = node.children.filter((child) =>
      !(child.type === 'html' && /^\s*<!--[\s\S]*-->\s*$/.test(child.value)));
    node.children.forEach(strip);
  };
  return strip;
}

// Wrap each h2 and the content after it in <section class="prose-section">, with the content in
// <div class="prose-body">, so wide screens can set headings in a left rail beside their text
function rehypeSections() {
  return (tree) => {
    const sections = [];
    let body = null;
    const open = (heading) => {
      body = { type: 'element', tagName: 'div', properties: { className: ['prose-body'] }, children: [] };
      sections.push({
        type: 'element',
        tagName: 'section',
        properties: { className: ['prose-section'] },
        children: heading ? [heading, body] : [body],
      });
    };
    for (const node of tree.children) {
      if (node.type === 'element' && node.tagName === 'h2') {
        open(node);
        continue;
      }
      if (!body) {
        if (node.type === 'text' && !node.value.trim()) continue;
        open(null);
      }
      body.children.push(node);
    }
    tree.children = sections;
  };
}

// After each build, list any page that still shows "TODO" or "DRAFT" to visitors
// Give each References entry an id from its first word ("ref-ball", "ref-crist"...) so in-text
// citations can link straight to the entry they cite
function rehypeReferenceIds() {
  // visible text only: raw HTML such as <span lang="pt-BR"> is skipped
  const text = (node) => (node.type === 'text' ? node.value : '') + (node.children ?? []).map(text).join('');
  const visit = (node) => {
    if (node.type === 'element' && node.tagName === 'li') {
      const first = text(node).trim().replace(/^the\s+/i, '').match(/[\p{L}\d]+/u)?.[0];
      if (first) node.properties = { ...node.properties, id: `ref-${first.toLowerCase()}` };
    }
    (node.children ?? []).forEach(visit);
  };
  return (tree, file) => {
    if (file.path?.endsWith('references.md')) visit(tree);
  };
}

// After each build, check what visitors can read: a visible "TODO" fails the build so it can
// never be published; a visible "DRAFT" is only reported
function checkPlaceholders() {
  return {
    name: 'check-placeholders',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const pages = (path) => readdirSync(path, { withFileTypes: true }).flatMap((entry) =>
          entry.isDirectory() ? pages(join(path, entry.name)) : entry.name.endsWith('.html') ? [join(path, entry.name)] : []);
        const blocking = [];
        for (const file of pages(root)) {
          const text = readFileSync(file, 'utf8')
            .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>/g, ' ')
            .replace(/\s+/g, ' ');
          const page = file.slice(root.length);
          const quote = (hits) => hits.map((h) => `"…${h.trim()}…"`).join(', ');
          const todos = text.match(/.{0,30}\bTODO\b.{0,30}/g);
          const drafts = text.match(/.{0,30}\bDRAFT\b.{0,30}/g);
          if (todos) blocking.push(`${page}: ${quote(todos)}`);
          if (drafts) logger.warn(`"DRAFT" still visible in ${page}: ${quote(drafts)}`);
        }
        if (blocking.length) {
          throw new Error(`Visible TODO placeholders must be written before publishing:\n${blocking.join('\n')}`);
        }
      },
    },
  };
}

// GitHub Pages: https://vmsfig.github.io/ps120/
export default defineConfig({
  site: 'https://vmsfig.github.io',
  base: '/ps120',
  trailingSlash: 'always',
  // The stylesheet is small: inline it so the first paint does not wait on an extra request
  build: { inlineStylesheets: 'always' },
  markdown: { remarkPlugins: [remarkStripComments], rehypePlugins: [rehypeReferenceIds, rehypeSections] },
  integrations: [checkPlaceholders()],
});
