const { assert } = require("chai");
const chai = require("chai");
const expect = chai.expect;
const { isFive, isOdd, myRange, fizzBuzz } = require("../problems/phase-1");
describe("isFive(num)", () => {
  it("should return true if the num is 5 otherwise false", () => {
    //Arrange
    //Act
    //Assert
    //expect.fail('Remove this expect.fail and replace it with your test');
    let input = 5;
    let res = isFive(input);
    let expected = true;

    expect(res).to.deep.equal(expected);
    //expect(res).to.eql(expected);
    //Arrange

    //Act

    //Assert
    //expect.fail("Remove this expect.fail and replace it with your test");
  });
});
describe("isOdd(number)", () => {
  it("should return true if number is odd", () => {
    //Arrange
    let input = 5;
    let res = isOdd(input);
    let expected = true;
    //Act
    expect(res).to.deep.equal(expected);

    //Assert
    //expect.fail("Remove this expect.fail and replace it with your test");
  });
  it("should return false if the num is even", () => {
    let input = 4;
    let res = isOdd(input);
    let expected = false;
    //Arrange

    //Act

    //Assert
    expect(res).to.deep.equal(expected);
    // expect.fail("Remove this expect.fail and replace it with your test");
  });
  it("should throw an error if num is not type of Number", () => {
    //Arrange
    let input = "string";
    let res = () => isOdd(input);
    //let expected = "some error";
    expect(res).to.throw(Error);
    //Act

    //Assert
    //expect.fail("Remove this expect.fail and replace it with your test");
  });
});
describe("myRange(min, max, step)", () => {
  context("if step is not provided", () => {
    it("should return the correct array with default value step=1", () => {
      //Arrange
      let input1 = 1;
      let input2 = 4;

      let range = myRange(input1, input2);
      expect(range).to.deep.equal([1, 2, 3, 4]);
      //Act

      // Assert
      //expect.fail("Remove this expect.fail and replace it with your test");
    });
  });
  context("if step is provided", () => {
    it("should return the correct array", () => {
      //Arrange
      let input1 = 1;
      let input2 = 4;
      let step = 2;
      let range = myRange(input1, input2, step);
      expect(range).to.deep.equal([1, 3]);
      //Act

      // Assert
      //expect.fail("Remove this expect.fail and replace it with your test");
    });
  });
  it("should throw an error if num is not type of Number", () => {
    //Arrange
    let input1 = "str";
    let input2 = 4;
    let range = () => myRange(input1, input2);
    expect(range).to.throw(Error);
    //Act
    //Assert
    //expect.fail("Remove this expect.fail and replace it with your test");
  });
});
describe("fizzBuzz(max)", () => {
  it("should throw a RangeError if max < 0", () => {
    //Arrange

    //Act

    //Assert
    expect.fail("Remove this expect.fail and replace it with your test");
  });
  it("should throw a TypeError if max is not a number", () => {
    //Arrange

    //Act

    //Assert
    expect.fail("Remove this expect.fail and replace it with your test");
  });
  it("should return an array from 0 to max (not inclusive) of numbers that are divisible by either 3 or 5 but not both", () => {
    //Arrange

    //Act

    //Assert
    expect.fail("Remove this expect.fail and replace it with your test");
  });
});
