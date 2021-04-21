// Write your tests here!
const { caesar }= require("../src/caesar");
const { expect } = require("chai");

describe("caesar()", () => {
  let input = "Mina the student";
  let shift = 5;

  it("is a function", () => {
    expect(caesar).to.be.a("function");
  });

  it("returns false for all invalid shift values", () => {
    const shiftValues = [0, -26, 26, null, undefined];
    const actual = shiftValues.every((shift) => {
      return !caesar(input, shift);
    });
    expect(actual).to.be.true;
  });

  it("returns a result for all valid shift numbers", () => {
    const shiftValues = [-25, -1, 1, 25];
    const actual = shiftValues.every((shift) => {
      return caesar(input, shift);
    });
    expect(actual).to.be.true;
  });

  describe("encoding a message", () => {
    it("returns a string", () => {
      const expected = "string";
      const actual = typeof caesar(input, shift);
      expect(actual).to.equal(expected);
    });

    it("returns correct length", () => {
      const expected = input.length;
      const actual = caesar(input, shift).length;
      expect(actual).to.equal(expected);
    });

    it("encodes '*Mina at Thinkful!' shift+1 correctly", () => {
      input = "*Mina at Thinkful!";
      shift = 1;
      const expected = "*njob bu uijolgvm!";
      const actual = caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });

    it("encodes '*Mina Student' shift-1 correctly", () => {
      input = "*Mina Student";
      shift = -1;
      const expected = "*lhmz rstcdms";
      const actual = caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("decodes '*lhmz rstcdms' shift-1 correctly", () => {
      input = "*Mina Student";
      shift = -1;
      const expected = "*lhmz rstcdms";
      const actual = caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });

    it("decodes '*njob bu uijolgvm!' shift+1 correctly", () => {
      input = "*Mina at Thinkful!";
      shift = 1;
      const expected = "*njob bu uijolgvm!";
      const actual = caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });
  });
});