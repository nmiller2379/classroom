const { expect } = require("chai");
const exesAndOhs = require("../script");

describe("exesAndOhs", () => {
    it("should return true if the string has an equal number of 'x' and 'o'", () => {
        expect(exesAndOhs("xxoo")).to.be.true;
        expect(exesAndOhs("xoxo")).to.be.true;
        expect(exesAndOhs("ooxx")).to.be.true;
    });

    it("should return false if the string has an unequal number of 'x' and 'o'", () => {
        expect(exesAndOhs("xoo")).to.be.false;
        expect(exesAndOhs("oxoo")).to.be.false;
        expect(exesAndOhs("xxxoo")).to.be.false;
    });

    it("should return true for an empty string", () => {
        expect(exesAndOhs("")).to.be.true;
    });

    it("should return true if there are no 'x' and 'o' in the string", () => {
        expect(exesAndOhs("abcd")).to.be.true;
    });
})