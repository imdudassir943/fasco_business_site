// Fixed: Using type-only import for the side-effect if your environment is strict, 
// though usually a standard import is fine for side-effect libraries.
import "@testing-library/jest-dom";

/**
 * Mocking matchMedia which is not implemented in JSDOM/Vitest by default.
 * We add a proper type for the 'query' parameter to avoid TS7006.
 */
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string): MediaQueryList => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // Deprecated but often needed for older libs
    removeListener: () => {}, // Deprecated but often needed for older libs
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});