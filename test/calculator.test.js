const expect = chai.expect;

describe('Calculator', () => {
  describe('#add', () => {
    describe('when passed a string as a number', () => {
      it('should throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.add("1", 2)).to.throw();
        expect(() => calculator.add(1, "2")).to.throw();
      });
    });

    describe('when passed two numbers', () => {
      it('should not throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.add(1, 2)).not.to.throw();
      });

      it('should add the numbers together', () => {
        const calculator = new Calculator();

        const result = calculator.add(1, 2);

        expect(result).to.equal(3);
      });
    });
  });
  
  describe("#subtract", () => {
    describe("when passed a string as a number", () => {
      it("should throw an error", () => {
        const calculator = new Calculator();

        expect(() => calculator.subtract("3", 1)).to.throw();
        expect(() => calculator.subtract(3, "1")).to.throw();
      });
    });

    describe("when passed two numbers", () => {
      it("should not throw an error", () => {
        const calculator = new Calculator();

        expect(() => calculator.subtract(3, 1)).not.to.throw();
      });

      it("should subtract the second number from the first", () => {
        const calculator = new Calculator();

        const result = calculator.subtract(3, 1);

        expect(result).to.equal(2);
      });
    });
  });

  describe("#multiply", () => {
    describe("when passed a string as a number", () => {
      it("should throw an error", () => {
        const calculator = new Calculator();

        expect(() => calculator.multiply("4", 5)).to.throw();
        expect(() => calculator.multiply(4, "5")).to.throw();
      });
    });

    describe("when passed two numbers", () => {
      it("should not throw an error", () => {
        const calculator = new Calculator();

        expect(() => calculator.multiply(4, 5)).not.to.throw();
      });

      it("should multiply the numbers", () => {
        const calculator = new Calculator();

        const result = calculator.multiply(4, 5);

        expect(result).to.equal(20);
      });
    });
  });

  describe("#divide", () => {
    describe("when passed a string as a number", () => {
      it("should throw an error", () => {
        const calculator = new Calculator();

        expect(() => calculator.divide("36", 9)).to.throw();
        expect(() => calculator.divide(36, "9")).to.throw();
      });
    });

    describe("when passed two numbers", () => {
      it("should not throw an error", () => {
        const calculator = new Calculator();

        expect(() => calculator.divide(36, 9)).not.to.throw();
      });

      it("should divide the first number by the second", () => {
        const calculator = new Calculator();

        const result = calculator.divide(36, 9);

        expect(result).to.equal(4);
      });
    });

    describe("when attempting to divide by zero", () => {
      it("should throw an error", () => {
        const calculator = new Calculator();

        expect(() => calculator.divide(36, 0)).to.throw();
      });
    });
  });
  
});