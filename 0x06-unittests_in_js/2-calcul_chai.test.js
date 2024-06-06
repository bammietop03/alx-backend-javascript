// 1-calcul.test.js
const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');
const expect = chai.expect;

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    
    it('should return 5 when inputs are 1.2 and 3.7', function() {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when divided by 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return "Error" when inputs are 1.4 and 0.2', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
    });
  });

  // Additional edge cases
  describe('Invalid Operation', function() {
    it('should throw an error when type is invalid', function() {
      expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw(Error, 'Invalid operation type');
    
    });
  });
});
