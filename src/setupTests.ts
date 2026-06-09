import "@testing-library/jest-dom/vitest";

class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin = "";
  readonly thresholds: ReadonlyArray<number> = [];

  disconnect() {
    return undefined;
  }

  observe() {
    return undefined;
  }

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  unobserve() {
    return undefined;
  }
}

globalThis.IntersectionObserver = MockIntersectionObserver;
