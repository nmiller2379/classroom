const { expect } = require("chai");
const largestPower = require("../script");

describe("largestPower", () => {
  it("should return 0 when `n` is 2", () => {
    expect(largestPower(2)).to.equal(0);
  });
  it("should return 0 when `n` is 3", () => {
    expect(largestPower(3)).to.equal(0);
  });
  it("should return 1 when `n` is 4", () => {
    expect(largestPower(4)).to.equal(1);
  });
  it("should return 1 when `n` is 5", () => {
    expect(largestPower(5)).to.equal(1);
  });
  it("should return 1 when `n` is 6", () => {
    expect(largestPower(6)).to.equal(1);
  });
  it("should return 1 when `n` is 7", () => {
    expect(largestPower(7)).to.equal(1);
  });
  it("should return 1 when `n` is 8", () => {
    expect(largestPower(8)).to.equal(1);
  });
  it("should return 1 when `n` is 9", () => {
    expect(largestPower(9)).to.equal(1);
  });
  it("should return 2 when `n` is 10", () => {
    expect(largestPower(10)).to.equal(2);
  });
  it("should return 2 when `n` is 11", () => {
    expect(largestPower(11)).to.equal(2);
  });
  it("should return 2 when `n` is 12", () => {
    expect(largestPower(12)).to.equal(2);
  });
  it("should return 2 when `n` is 13", () => {
    expect(largestPower(13)).to.equal(2);
  });
  it("should return 2 when `n` is 14", () => {
    expect(largestPower(14)).to.equal(2);
  });
  it("should return 2 when `n` is 15", () => {
    expect(largestPower(15)).to.equal(2);
  });
  it("should return 2 when `n` is 16", () => {
    expect(largestPower(16)).to.equal(2);
  });
});
