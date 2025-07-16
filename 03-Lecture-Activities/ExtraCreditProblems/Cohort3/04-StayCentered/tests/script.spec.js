const { expect } = require("chai");
const stayCentered = require("../script");

describe("stayCentered", () => {
  it("should return a string of a length equal to the width argument", () => {
    expect(stayCentered("hello", 10)).to.have.lengthOf(10);
  });
  it("should return a string that is centered", () => {
    expect(stayCentered("hello", 11)).to.equal("   hello   ");
  });
  it("should return a string that is centered", () => {
    expect(stayCentered("hello", 12)).to.equal("    hello   ");
  });
  it("should, if necessary return a string that has a fill character one character greater to the left than to the right", () => {
    expect(stayCentered("ab", 5, " ")).to.equal("  ab ");
  });
  it("should, if necessary return a string that has a fill character one character greater to the left than to the right", () => {
    expect(stayCentered("hello", 10, " ")).to.equal("   hello  ");
  });
  it("should fill with the correct character", () => {
    expect(stayCentered("hello", 10, "*")).to.equal("***hello**");
  });
});
