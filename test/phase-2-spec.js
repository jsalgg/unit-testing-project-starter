const { assert } = require("chai");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const {
  mirrorArray,
  hiddenCounter,
  myMap,
  avgValue,
} = require("../problems/phase-2");

//1. mirrorArray
describe("mirrorArray()", function () {
  it("should return a single array where the first half is the orginal array and the second half is a mirror of the first half", function () {
    //Arrange
    let input = [1, 2, 3];
    let res = mirrorArray(input);
    let expected = [1, 2, 3, 3, 2, 1];
    expect(res).to.deep.equal(expected);
    //Act

    //Assert
    //expect.fail('Remove this expect.fail and replace it with your test');
  });
});

//2. hiddenCounter
describe("hiddenCounter()", function () {
  it("should return a function that will increment the counter when invoked", function () {
    //Arrange
    //check if its ionstance of func
    //cb.should.be.instanceOf(Function);
    let cb = hiddenCounter();
    expect(cb).to.be.instanceOf(Function);
    let res1 = cb();
    let res2 = cb();
    //check if res1 = 1 and res2 = 2
    expect(res1).to.deep.equal(1);
    expect(res2).to.deep.equal(2);
    //Act

    //Assert
    //expect.fail('Remove this expect.fail and replace it with your test');
  });
});

//3. myMap
describe("myMap", function () {
  it("should function like the built in Array#map", function () {
    //Arrange
    let input = [1, 2, 3, 4, 5];
    let cb = (number) => {
      //   let arr = [];

      //   number.forEach((el) => arr.push(el * 2));
      //   return arr;
      return number * 2;
    };
    const result = input.map((x) => x * 2);
    let func = myMap(input, cb);
    expect(func).to.deep.equal(result);

    //Act
    //Assert
    //expect.fail('Remove this expect.fail and replace it with your test');
  });

  it("should not call the built in Array#map", function () {
    //Arrange
    let arr = [1, 2, 3];
    let spy = chai.spy.on(arr, "map");
    //Act
    myMap(arr, () => {});
    expect(spy).to.not.have.been.called();
    //Assert
    console.log(arr);
    //expect.fail("Remove this expect.fail and replace it with your test");
  });
});

//4. avgValue
describe("avgValue", function () {
  it("should return the average of an array of numbers", function () {
    //Arrange
    let arr = [1, 2, 3, 4];
    let avg = avgValue(arr);
    const avgFunc = (array) => {
      let sum = 0;
      array.forEach((el) => {
        sum += el;
      });
      return sum / array.length;
    };
    //Act
    expect(avg).to.equal(avgFunc(arr));
    //Assert
    //expect.fail("Remove this expect.fail and replace it with your test");
  });
});
