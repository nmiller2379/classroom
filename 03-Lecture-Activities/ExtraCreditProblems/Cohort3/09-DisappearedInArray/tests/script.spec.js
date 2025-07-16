const { expect } = require("chai");
const findDisappearedNumbers = require("../script");

describe("findDisappearedNumbers", () => {
  it("should return [5, 6] for [4, 3, 2, 7, 8, 2, 3, 1]", () => {
    const result = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
    expect(result).to.deep.equal([5, 6]);
  });

  it("should return [2] for [1, 1]", () => {
    const result = findDisappearedNumbers([1, 1]);
    expect(result).to.deep.equal([2]);
  });

  it("should return [] for [1, 2, 3]", () => {
    const result = findDisappearedNumbers([1, 2, 3]);
    expect(result).to.deep.equal([]);
  });
  it("should return [2, 3] for [1, 4, 1, 4, 5]", () => {
    const result = findDisappearedNumbers([1, 4, 1, 4, 5]);
    expect(result).to.deep.equal([2, 3]);
  });
});
