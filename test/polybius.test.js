// Write your tests here!
const { polybius } = require("../src/polybius");
const { expect } = require("chai");

describe("polybius()", () => {
  describe("encoding", () => {
    it("should translate the letters 'i' and 'j' to '42'", () => {
      expect(polybius("ij")).to.equal("4242");
    });

    it("should encode 'Mina' to 23423311 ", () => {
      expect(polybius("Mina")).to.equal("23423311");
    });

    it("should maintain spaces", () => {
      expect(polybius("thinkful student")).to.equal(
        "4432423352125413 34445441513344"
      );
    });
    it("should ignore capital letters", () => {
      expect(polybius("ijIJazAZ")).to.equal("4242424211551155");
    });
  });
  describe("decoding", () => {
    it("should decode 23423311 to mina", () => {
      expect(polybius("23423311", false)).to.eql("m(i/j)na");
    });

    it("should translate 42 to (i/j)", () => {
      expect(polybius("42", false)).to.eql("(i/j)");
    });

    it("should ignore capital letters", () => {
      expect(polybius("4242424211551155", false)).to.eql(
        "(i/j)(i/j)(i/j)(i/j)azaz"
      );
    });
    it("should maintain spaces", () => {
      expect(polybius("4432423352125413 34445441513344", false)).to.eql(
        "th(i/j)nkful student"
      );
    });
    it("should return false if the length of all numbers is odd", () => {
      expect(polybius("245", false)).to.be.false;
    });
  });
});
