const { expect } = require("chai");
const calculateNumber = require("./1-calcul.js");

describe("calculateNumber()", function() {

    it(`should add two rounded positive integers`, function() {
      const res = calculateNumber("SUM", 1, 2);
      expect(res).to.equal(3);
    });

    it(`should subtract two rounded positive floats`, function() {
      const res = calculateNumber("SUBTRACT", 1.4, 2.2);
      expect(res).to.equal(-1);
    });

    it(`should subtract two rounded positive floats`, function() {
      const res = calculateNumber("SUBTRACT", 4.9, 2.7);
      expect(res).to.equal(2);
    });

    it(`should divide two rounded positive integers`, function() {
      const res = calculateNumber("DIVIDE", 4, 2);
      expect(res).to.equal(2);
    });

    it(`should return 'Error' when dividing by 0`, function() {
      const res = calculateNumber("DIVIDE", 1.7, 0);
      expect(res).to.equal("Error");
    });

    it(`should divide two rounded positive floats`, function() {
      const res = calculateNumber("DIVIDE", 1.4, 4.6);
      expect(res).to.equal(0.2);
    });
});
