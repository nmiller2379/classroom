const { expect } = require("chai");
const majorityElement = require("../script");

describe("majorityElement", () => {
  it("should return 3", () => {
    expect(majorityElement([3, 2, 3])).to.equal(3);
  });
  it("should return 2", () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).to.equal(2);
  });
  it("should return 3", () => {
    expect(majorityElement([3, 3, 4])).to.equal(3);
  });
  it("should return 4", () => {
    expect(majorityElement([3, 3, 4, 4, 4])).to.equal(4);
  });
});
