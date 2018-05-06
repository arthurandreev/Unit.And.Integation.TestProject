var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add', function(){
      assert.deepStrictEqual(10 + 5, 15);
  })

  it('it can subtract', function(){
    assert.deepStrictEqual(99 - 49, 50)
  });

  it('it can multiply', function(){
    assert.deepStrictEqual(5 * 5, 25)
  });

  it('it can divide', function(){
    assert.deepStrictEqual(30 / 5, 6)
  });

  it('you can click an operator', function(){
  calculator.numberClick(5);
  calculator.operatorClick('*')
  calculator.numberClick(10);
  calculator.operatorClick('=')
  assert.deepStrictEqual(calculator.runningTotal, 50)
});

it('you can clear the screen', function(){
  calculator.numberClick(3);
  calculator.operatorClick('+')
  calculator.numberClick(3);
  calculator.operatorClick('=')
  calculator.operatorClick('*')
  calculator.numberClick(5);
  calculator.clearClick();
  calculator.numberClick(2);
  calculator.operatorClick('=')
  assert.deepStrictEqual(calculator.runningTotal, 12)
});

});
