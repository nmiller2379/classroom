const { expect } = require("chai");
const getRow = require("../script");

describe("getRow", () => {
    it("returns the 0th row of Pascal's Triangle", () => {
        expect(getRow(0)).to.deep.equal([1]);
    });

    it("returns the 1st row of Pascal's Triangle", () => {
        expect(getRow(1)).to.deep.equal([1, 1]);
    });

    it("returns the 3rd row of Pascal's Triangle", () => {
        expect(getRow(3)).to.deep.equal([1, 3, 3, 1]);
    });

    it("returns the 5th row of Pascal's Triangle", () => {
        expect(getRow(5)).to.deep.equal([1, 5, 10, 10, 5, 1]);
    });

    it("handles larger inputs up to the 33rd row", () => {
        const result = getRow(33);
        expect(result[0]).to.equal(1); // first element is 1
        expect(result[result.length - 1]).to.equal(1); // last element is 1
        expect(result.length).to.equal(34); // should have 34 elements
    });

    it("verifies symmetry in the rows", () => {
        const row = getRow(20);
        for (let i = 0; i < row.length / 2; i++) {
            expect(row[i]).to.equal(row[row.length - 1 - i]);
        }
    });
})