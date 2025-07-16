const { expect } = require("chai");
const twoSum = require("../script");

describe("twoSum", () => {
    it("should return indices of two numbers that add up to the target", () => {
        expect(twoSum([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
        expect(twoSum([3, 2, 4], 6)).to.deep.equal([1, 2]);
        expect(twoSum([3, 3], 6)).to.deep.equal([0, 1]);
    });

    it("should handle cases with zero", () => {
        expect(twoSum([0, 4, 3, 0], 0)).to.deep.equal([0, 3]);
        expect(twoSum([-1, 1, 0], 0)).to.deep.equal([0, 1]);
    });

    it("should return correct indices when numbers are in descending order", () => {
        expect(twoSum([15, 11, 7, 2], 9)).to.deep.equal([2, 3]);
    });

    it("should return correct indices when numbers are in ascending order", () => {
        expect(twoSum([1, 5, 6, 9], 10)).to.deep.equal([0, 3]);
    });

    it("should handle large arrays efficiently", () => {
        const largeArray = Array(10000).fill(1);
        largeArray[9998] = 3;
        largeArray[9999] = 7;
        expect(twoSum(largeArray, 10)).to.deep.equal([9998, 9999]);
    });

})