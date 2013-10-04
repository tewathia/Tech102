var window = window, describe = describe, it = it, expect = expect, Calculator = Calculator;
describe("Calculator", function () {

  var calcObj;
  beforeEach(function() {
    calcObj = {
      calculate: function(){}
    };
    spyOn(calcObj, 'calculate');

  // cal.setBar(123);
  // cal.setBar(456, 'another param');
});



  it("should trigger when basic is changed", function () {

    // Arrange
    var calc = Calculator,
    newBasic = 1111;

    // Act
    calc.basic(newBasic);

    // Assert
    expect(newBasic).toEqual(calc.basic());

  });

  it("should trigger when calculated (without spies)", function () {

    // Arrange
    var calc = Calculator,
    valTestVar = 1000;

    //Substitute a test double for "Salary Changed" subscriber
    function testFn() {
      window.testVar = 1000;
    }

    // Act
    calc.subscribeSalaryChange(testFn);
    calc.calculate();
    // Assert
    expect(valTestVar).toEqual(window.testVar);

  });

  it("should trigger when calculated (still without spies)", function () {

    // Arrange
    var calc = Calculator,
    valTestVar = 1000;

    //Substitute a test double for "Salary Changed" subscriber
    var isSubCall = false;
    function testFn() {
      isSubCall = true;
    }

    // Act
    calc.subscribeSalaryChange(testFn);
    calc.calculate();
    // Assert
    expect(isSubCall).toEqual(true);

  });


  it("should trigger when calculated (with spies)", function() {

        // Arrange
        var calc = Calculator;

        // Act 
        calc.subscribeSalaryChange(calcObj.calculate);
        calc.basic(100000);

        // Assert
        expect(calcObj.calculate).toHaveBeenCalled();

      });

  it("should trigger when calculated with salary as argument (with spies)", function() {

        // Arrange
    var calc = Calculator
      , newBasic = 31999;

        // Act 
    calc.subscribeSalaryChange(calcObj.calculate);
    calc.basic(newBasic);

        // Assert
      expect(calcObj.calculate).toHaveBeenCalledWith(calc.salary());

  });
});