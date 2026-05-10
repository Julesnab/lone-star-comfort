import '@testing-library/jest-dom';

// 800px: wide enough for desktop nav (≥700) but not Hero's desktop card (≥900),
// so nav buttons render and there's only one phone link in the DOM.
Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 800 });

// jsdom stubs for browser APIs used by HeroParticles
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

HTMLCanvasElement.prototype.getContext = () => ({
  clearRect: () => {},
  beginPath: () => {},
  arc: () => {},
  fill: () => {},
});
