// describe("Calculator", function () {

//   module("Calculator", {
//   setup: function() {
//     var calc = new Calculator();
// }});

module("Calculator Testing");

test("should be able to add zero numbers", function() {

    // Arrange
    var calc = new Calculator(),
    addResult = 0;

    // Act
    calc.add();

    // Assert
    ok(addResult == calc.result, "test done");

  }); 

test("should be able to add one number", function() {

    // Arrange
    var calc = new Calculator(),
    n1 = 10,
    addResult = 10;

    // Act
    calc.add(n1);

    // Assert
    ok(addResult == calc.result, "test done");

  }); 


test("should be able to add two numbers", function() {

    // Arrange
    var calc = new Calculator(),
    n1 = 10,
    n2 = 20,
    addResult = 30;

    // Act
    calc.add(n1, n2);

    // Assert
    ok(addResult == calc.result, "test done");

  });  

test("should be able to add three numbers", function() {

    // Arrange
    var calc = new Calculator(),
    n1 = 10,
    n2 = 20,
    n3 = 30,
    addResult = 60;

    // Act
    calc.add(n1, n2, n3);

    // Assert
    ok(addResult == calc.result, "test done");

  });

test("should be able to add multiple numbers", function() {

    // Arrange
    var calc = new Calculator(),
    n1 = 10,
    n2 = 20,
    n3 = 30,
    n4 = 40,
    n5 = 50,
    n6 = 60,
    n7 = 70,
    n8 = 80,
    addResult = 360;

    // Act
    calc.add(n1, n2, n3, n4, n5, n6, n7, n8);

    // Assert
    ok(addResult == calc.result, "test done");

  });

test("should be able to add an array of numbers", function() {

    // Arrange
    var calc = new Calculator(),
    nArr = [10, 20, 30, 40, 50, 60, 70, 80],
    addResult = 360;

    // Act
    calc.add(nArr);

    // Assert
    ok(addResult == calc.result, "test done");

  });

test("should be able to add two functions that return numbers", function() {

    // Arrange
    var calc = new Calculator(),
    nF1 = function(){
      return 10;
    },
    nF2 = function(){
      return 20;
    },
    addResult = 30;

    // Act
    calc.add(nF1, nF2);

    // Assert
    ok(addResult == calc.result, "test done");

  });

test("should be able to add two functions that return arrays", function() {

    // Arrange
    var calc = new Calculator(),
    nF1 = function(){
      return [10, 20, 30, 40];
    },
    nF2 = function(){
      return [50, 60, 70, 80];
    },
    addResult = 360;

    // Act
    calc.add(nF1, nF2);

    // Assert
    ok(addResult == calc.result, "test done");

  });

test("should be able to add two arrays that return functions that return numbers", function() {

    // Arrange
    var calc = new Calculator(),
    nArr1 = [function(){
      return 10;
    }],
    nArr2 = [function(){
      return 20;
    }],
    addResult = 30;

    // Act
    calc.add(nArr1, nArr2);

    // Assert
    ok(addResult == calc.result, "test done");

  });

test("should be able to add two arrays that return functions that return arrays", function() {

    // Arrange
    var calc = new Calculator(),
    nArr1 = [function(){
      return [10, 40];
    }],
    nArr2 = [function(){
      return [20, 30];
    }],
    addResult = 100;

    // Act
    calc.add(nArr1, nArr2);

    // Assert
    ok(addResult == calc.result, "test done");

  });

test("should be able to add two string numbers", function() {

    // Arrange
    var calc = new Calculator(),
    nS1 = "10",
    nS2 = "20"
    addResult = 30;

    // Act
    calc.add(nS1, nS2);

    // Assert
    ok(addResult == calc.result, "test done");

  });

test("should be able to add two string arrays", function() {

    // Arrange
    var calc = new Calculator(),
    nS1 = "[10, 20]",
    nS2 = "[30, 40]"
    addResult = 100;

    // Act
    calc.add(nS1, nS2);

    // Assert
    ok(addResult == calc.result, "test done");

  });

  // test("should be able to add two string functions", function() {

  //   // Arrange
  //   var calc = new Calculator(),
  //   nS1 = "(function(){
  //     return 10;
  //   })()",
  //   nS2 = "(function(){
  //     return 20;
  //   })()",
  //   addResult = 30;

  //   // Act
  //   calc.add(nS1, nS2);

  //   // Assert
  //   ok(addResult == calc.result, "test done");

  // });
// });