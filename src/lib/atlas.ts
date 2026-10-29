// public/images/brazil-atlas.svg is an equirectangular map whose edges sit at these coordinates
// (from Wikipedia's Module:Location map/data/Brazil), so a lat/lon becomes a % position on it.
const mapBounds = { top: 6, bottom: -34, left: -74.5, right: -32 };

export const atlasImage = 'images/brazil-atlas.svg';
export const atlasSize = { width: 2008, height: 1984 };
export const atlasCredit =
  'Map adapted from "Brazil location map" by NordNordWest (2009), Wikimedia Commons, CC BY-SA 3.0.';

export function pinPosition(lat: number, lon: number) {
  return {
    x: ((lon - mapBounds.left) / (mapBounds.right - mapBounds.left)) * 100,
    y: ((mapBounds.top - lat) / (mapBounds.top - mapBounds.bottom)) * 100,
  };
}

// Markers past the middle of the map label to their left, so long names stay on the map,
// unless the place sets labelSide itself
export const labelsLeft = (place: { lon: number; labelSide?: 'left' | 'right' }) =>
  place.labelSide ? place.labelSide === 'left' : pinPosition(0, place.lon).x > 55;

export const pinStyle = (lat: number, lon: number) => {
  const { x, y } = pinPosition(lat, lon);
  return `--x: ${x.toFixed(2)}%; --y: ${y.toFixed(2)}%`;
};
