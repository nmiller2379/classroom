const { expect } = require("chai");
const lastWordLength = require("../script");

describe("lastWordLength", () => {
  it("should return the length of the last word in a string", () => {
    expect(lastWordLength("Hello World")).to.equal(5);
    expect(lastWordLength("Hello World ")).to.equal(5);
    expect(lastWordLength("Hello World  ")).to.equal(5);
    expect(lastWordLength("Hello World 123")).to.equal(3);
    expect(lastWordLength("Hello World 123 ")).to.equal(3);
    expect(lastWordLength("Hello World 123  ")).to.equal(3);
  });
  it("should return 0 if the string is empty", () => {
    expect(lastWordLength("")).to.equal(0);
  });
  it("should return 0 if the string contains only spaces", () => {
    expect(lastWordLength(" ")).to.equal(0);
    expect(lastWordLength("  ")).to.equal(0);
  });
  it("should return the length of the last word if the string contains only one word", () => {
    expect(lastWordLength("Hello")).to.equal(5);
    expect(lastWordLength("Hello ")).to.equal(5);
    expect(lastWordLength("Hello  ")).to.equal(5);
  });
  it("should return the length of the last word if the string contains words separated by multiple spaces", () => {
    expect(lastWordLength("Hello  World")).to.equal(5);
    expect(lastWordLength("Hello  World ")).to.equal(5);
    expect(lastWordLength("Hello  World  ")).to.equal(5);
  });
});
