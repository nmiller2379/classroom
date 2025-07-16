const { expect } = require("chai");
const moveZeroes = require("../script");

describe("moveZeroes", () => {
  it("should move zeroes to the end of the array and modify in-place", () => {
    const array1 = [0, 1, 0, 3, 12];
    moveZeroes(array1);
    expect(array1).to.eql([1, 3, 12, 0, 0]);

    const array2 = [0, 0, 0, 0, 0];
    moveZeroes(array2);
    expect(array2).to.eql([0, 0, 0, 0, 0]);

    const array3 = [1, 2, 3, 4, 5];
    moveZeroes(array3);
    expect(array3).to.eql([1, 2, 3, 4, 5]);

    const array4 = [0, 0, 0, 1, 2, 3];
    moveZeroes(array4);
    expect(array4).to.eql([1, 2, 3, 0, 0, 0]);
  });
});
