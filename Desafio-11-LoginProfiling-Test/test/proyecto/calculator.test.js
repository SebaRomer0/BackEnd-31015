const calculadora = require("./calculadora");
const chai = require("chai");
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;

describe("Probando la funcion de Asercion", function () {
  describe("Chequear funcion addTest", function () {
    it("Verificar el valor usando : assert.equal(value,value): ", function () {
      result = calculadora.addTest(1, 1);
      assert.equal(result, 2);
    });
  });
});

describe("Testing should function: ", function () {
  describe("Check addTest Function", function () {
    it("Check the returned value using : result.should.be.equal(value): ", function () {
      result = calculator.addTest(1, 1);
      result.should.be.equal(2);
    });
  });
});

describe("Testing expect function: ", function () {
  describe("Check addTest Function", function () {
    it("Check the returned value using : expect(result).to.be.a(value);: ", function () {
      result = calculator.addTest(1, 1);
      expect(result).to.equal(3);
    });
  });
});
