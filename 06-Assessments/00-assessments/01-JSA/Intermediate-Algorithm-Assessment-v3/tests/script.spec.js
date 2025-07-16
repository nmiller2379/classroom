const { expect } = require("chai");
const containsDuplicate = require("../script");

describe("containsDuplicate", () => {
  it("should return true when nums array contains any value that appears at least twice.", () => {
    expect(containsDuplicate([1, 2, 3, 1])).to.equal(true);
  });
  it("should return true when nums array is large and contains any value that appears at least twice.", () => {
    const largeArray = Array.from({ length: 999999 }, (_, i) => i);
    largeArray.push(0);
    expect(containsDuplicate([1, 2, 2, 1, 3])).to.equal(true);
  });
  it("should return true when nums array contains any value that appears at least twice.", () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).to.equal(true);
  });
  it("should return false when nums array is large does not contain any value that appears at least twice.", () => {
    const largeArray = Array.from({ length: 1000000 }, (_, i) => i)
    expect(containsDuplicate([1, 2, 3, 4])).to.equal(false);
  });

  it("should return false when nums array does not contain any value that appears at least twice.", () => {
    expect(containsDuplicate([])).to.equal(false);
  });
});
