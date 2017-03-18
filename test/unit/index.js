const expect = require('expect.js');
const calculator = require('../../src');

describe('Caculator', function () {
    describe('Sum', function () {
        it('should sum 1 + 1 to be equal 2', function () {
            expect(calculator.sum(1, 1)).to.be.eql(2);
        });

        it('should sum 5 + 3 to be equal 8', function () {
            expect(calculator.sum(5, 3)).to.be.eql(8);
        });

        it('should sum 0 + (-3) to be equal -3', function () {
            expect(calculator.sum(0, -3)).to.be.eql(-3);
        });
    });

    describe('Subtraction', function () {
        it('should subtract 1 - 1 to be equal 0', function () {
            expect(calculator.subtract(1, 1)).to.be.eql(0);
        });

        it('should subtract 1 - 5 to be equal -4', function () {
            expect(calculator.subtract(1, 5)).to.be.eql(-4);
        });

        it('should subtract -1 - 1 to be equal -2', function () {
            expect(calculator.subtract(-1, 1)).to.be.eql(-2);
        });

         it('should subtract -1 - (-1) to be equal 0', function () {
            expect(calculator.subtract(-1, -1)).to.be.eql(0);
        });
    });

    describe ('Multiplication', function(){
        it('should multiply 8 * 24 to be equal 192', function(){
            expect(calculator.multiply(8, 24)).to.be.eql(192);
        });

        it('should multiply 2 * 10 to be equal 20', function(){
            expect(calculator.multiply(2, 10)).to.be.eql(20);
        });

        it('should multiply 1 * 0 to be equal 0', function(){
            expect(calculator.multiply(1, 0)).to.be.eql(0);
        });
    });


    describe ('Division', function(){
        it('should division 4 / 2 to be equal 2', function(){
            expect(calculator.division(4, 2)).to.be.eql(2);
        });

        it('should division 10 / 2 to be equal 5', function(){
            expect(calculator.division(10, 2)).to.be.eql(5);
        });

        it('should division 10 / 0 to be equal ', function(){
            expect(calculator.division).withArgs(10,0).to.throwException(/[dD]ivision 0/);
        });
    });

});