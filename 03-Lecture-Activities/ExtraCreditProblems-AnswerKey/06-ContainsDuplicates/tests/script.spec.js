const { expect } = require("chai");
const containsDuplicate = require("../script");

describe("containsDuplicate", () => {
  it("should return true if the array contains duplicates within k indices", () => {
    const nums = [1, 2, 3, 1];
    const k = 3;
    const result = containsDuplicate(nums, k);
    expect(result).to.be.true;
  });
  it("should return false if the array does not contain duplicates within k indices", () => {
    const nums = [1, 2, 3, 1, 2, 3];
    const k = 2;
    const result = containsDuplicate(nums, k);
    expect(result).to.be.false;
  });
  it("should return false if the array does not contain duplicates", () => {
    const nums = [1, 2, 3, 4];
    const k = 3;
    const result = containsDuplicate(nums, k);
    expect(result).to.be.false;
  });
  it("should return true if the array contains duplicates within k indices", () => {
    const nums = [1, 0, 1, 1];
    const k = 1;
    const result = containsDuplicate(nums, k);
    expect(result).to.be.true;
  });
});
