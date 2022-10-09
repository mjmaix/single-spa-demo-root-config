import * as isActive from "./activity-functions";

describe("activity functions", () => {
  it("verifies that the nav is always active", () => {
    const location = {
      href: "http://localhost:9000/page1/product1?from=home",
      origin: "http://localhost:9000",
      prefix: "home",
    };
    expect(isActive.nav(location)).toBe(true);
  });

  it("verifies that the page1 is active on page1", () => {
    const location = {
      href: "http://localhost:9000/page1/product1?from=home",
      origin: "http://localhost:9000",
      prefix: "page1",
    };
    expect(isActive.page1(location)).toBe(true);
  });

  it("verifies that the page1 is not active on page2", () => {
    const location = {
      href: "http://localhost:9000/page2/product1?from=home",
      origin: "http://localhost:9000",
      prefix: "page2",
    };
    expect(isActive.page1(location)).toBe(false);
  });

  it("verifies that the page2 is active on page2", () => {
    const location = {
      href: "http://localhost:9000/page2/product1?from=home",
      origin: "http://localhost:9000",
      prefix: "page2",
    };
    expect(isActive.page2(location)).toBe(true);
  });

  it("verifies that the page2 is not active on page1", () => {
    const location = {
      href: "http://localhost:9000/page1/product1?from=home",
      origin: "http://localhost:9000",
      prefix: "page1",
    };
    expect(isActive.page2(location)).toBe(false);
  });
});
