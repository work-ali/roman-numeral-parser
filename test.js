var assert = require("assert");
var parseRomanNumeral = require("./roman_numeral_parser");
describe("Roman Numeral Parser", function () {
  it("should do simple parsing 1.1", function () {
    assert.equal(1, parseRomanNumeral("I"));
  });
  it("should do simple parsing 1.2", function () {
    assert.equal(246, parseRomanNumeral("CCXLVI"));
  });
  it("should do simple parsing 1.3", function () {
    assert.equal(789, parseRomanNumeral("DCCLXXXIX"));
  });
  it("should do simple parsing 1.4", function () {
    assert.equal(2421, parseRomanNumeral("MMCDXXI"));
  });
  it("should do parsing with zero's present 1.1", function () {
    assert.equal(160, parseRomanNumeral("CLX"));
  });
  it("should do parsing with zero's present 1.2", function () {
    assert.equal(207, parseRomanNumeral("CCVII"));
  });
  it("should do parsing with zero's present 1.3", function () {
    assert.equal(1009, parseRomanNumeral("MIX"));
  });
  it("should do parsing with zero's present 1.4", function () {
    assert.equal(1066, parseRomanNumeral("MLXVI"));
  });
  it("should do old date parsing 1.1", function () {
    assert.equal(1776, parseRomanNumeral("MDCCLXXVI"));
  });
  it("should do old date parsing 1.2", function () {
    assert.equal(1918, parseRomanNumeral("MCMXVIII"));
  });
  it("should do old date parsing 1.3", function () {
    assert.equal(1954, parseRomanNumeral("MCMLIV"));
  });
  it("should do new date parsing 1.4", function () {
    assert.equal(2014, parseRomanNumeral("MMXIV"));
  });
  it("should do new date parsing 1.5", function () {
    assert.equal(1990, parseRomanNumeral("MCMXC"));
  });
  it("should do largest numbers parsing 1.1", function () {
    assert.equal(3999, parseRomanNumeral("MMMCMXCIX"));
  });
});
