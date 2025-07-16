const { expect } = require("chai");
const strStr = require("../script");

describe("strStr", () => {
  it("should return 0 when haystack = 'sadbutsad' and needle = 'sad'", () => {
    expect(strStr("sadbutsad", "sad")).to.equal(0);
  });

  it("should return -1 when haystack = 'leetcode' and needle = 'leeto'", () => {
    expect(strStr("leetcode", "leeto")).to.equal(-1);
  });

  it("should return 5 when haystack = 'leetcode' and needle = 'ode'", () => {
    expect(strStr("leetcode", "ode")).to.equal(5);
  });

  it("should return 2 when haystack = 'leetcode' and needle = 'etc'", () => {
    expect(strStr("leetcode", "etc")).to.equal(2);
  });

  it("should return -1 when haystack = 'leetcode' and needle = 'sing'", () => {
    expect(strStr("leetcode", "sing")).to.equal(-1);
  });
});
