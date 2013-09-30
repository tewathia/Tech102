	define(['calculator'], function(calculator){

	return (function(calc){
			var calculator = calc
				,txtBasic
				,txtHra
				,txtDa
				,txtTax
				,btnCalculate
				,divResult
				,divCalculator
				,divCalculateCount
				,calculateCount = 0;
			calculator.salChangeSubscriber(function (sal) {
				document.getElementById("divResult").innerHTML = sal;
			});	
			function onCalculate(){
				calculateCount++;
     			divCalculateCount.innerHTML = calculateCount;
			}

			function onTxtBasicChange(){
				calculator.basic(parseInt(txtBasic.value,10));
				calculator.calculate();
				onCalculate();
			}
			function onTxtHraChange(){
				calculator.hra(parseInt(txtHra.value,10));
				calculator.calculate();
				onCalculate();
			}
			function onTxtDaChange(){
				calculator.da(parseInt(txtDa.value,10));
				calculator.calculate();
				onCalculate();
			}
			function onTxtTaxChange(){
				calculator.tax(parseInt(txtTax.value,10));
				calculator.calculate();
				onCalculate();
			}

			function initialize(){
				divCalculateCount = document.getElementById("divCalculateCount");
				divCalculator = document.getElementById("divCalculator");
				btnCalculate = document.getElementById("btnCalculate");
				txtBasic = document.getElementById("txtBasic");
				txtHra = document.getElementById("txtHra");
				txtDa = document.getElementById("txtDa");
				txtTax = document.getElementById("txtTax");
				divResult = document.getElementById("divResult");

				txtBasic.onchange = onTxtBasicChange;
				txtHra.onchange = onTxtHraChange;
				txtDa.onchange = onTxtDaChange;
				txtTax.onchange = onTxtTaxChange;
			}
			function hide(){
				divCalculator.style.display = "none";
			}

			return {
				init: initialize,
				hide : hide
			};
		}(calculator));
	});