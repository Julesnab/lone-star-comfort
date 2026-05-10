import '@testing-library/jest-dom';

// jsdom defaults to 1024px but the old Vitest jsdom used 0; lock to 0 so the
// Hero desktop card (width >= 900) doesn't render, keeping phone-link tests
// from finding duplicate elements.
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
