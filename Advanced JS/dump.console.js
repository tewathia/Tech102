Advanced JS

var product = {id:100, name:'Pen', cost:1000};
undefined
product["cost"] = 210;
210
product["Cost"] = 210;
210
product
Object {id: 100, name: "Pen", cost: 210, Cost: 210}
product["Cost"]
210
for (var i in product){console.log(product[i];}
SyntaxError: Unexpected token ;
for (var i in product){console.log(product[i]}
SyntaxError: Unexpected token }
for (var i in product){console.log(product[i];)}
SyntaxError: Unexpected token ;
for (var i in product){console.log(product[i]);}
100
Pen
2
210
undefined
for (var i in product){console.log(typeof(i), product[i]);}
string 100
string Pen
2
string 210
undefined
for (var i in product){console.log(typeof(i), product[i], product.i);}
string 100 undefined
string Pen undefined
2
string 210 undefined
undefined
a = "id"
"id"
parse(a)
ReferenceError: parse is not defined
product[
SyntaxError: Unexpected token }
product["printName"] = new Function(title){console.log(title+product.name);}
SyntaxError: Unexpected token {
product["printName"] = new Function(title){
console.log(title+product.name);
};
SyntaxError: Unexpected token {
product["printName"] = function(title){
console.log(title+product.name);
};
function (title){
console.log(title+product.name);
}
product.printName('Mr.')
Mr.Pen
undefined
function costIDTemplate(){
console.log(this.cost + this.id);}
undefined
var newProd={id:2, cost:111, costIDfn:costIDTemplate}
undefined
newProd.costIDfn
function costIDTemplate(){
console.log(this.cost + this.id);}
newProd.costIDfn()
113
undefined
function costIDTemplate(){
console.log(this.cost + '' + this.id);}
undefined
var newProd={id:2, cost:111, costIDfn:costIDTemplate}
undefined
newProd.costIDfn()
1112
undefined
function costIDTemplate(){
console.log(this.cost + ':' + this.id);}
undefined
var newProd={id:2, cost:111, costIDfn:costIDTemplate}
undefined
newProd.costIDfn()
111:2
undefined
product["IDcostfn"] = costIDTemplate;
function costIDTemplate(){
console.log(this.cost + ':' + this.id);}
product.IDcostfn()
210:100
undefined

var obj = {}
undefined
obj
Object {}
typeof Object
"function"
typeof obj
"object"
obj.constructor
function Object() { [native code] }


Constructor Function

function productTemplate(ID, NAME, COST){
this.id = ID;
this.name = NAME;
this.cost = COST;
this.costIDfn = costIDTemplate;
return this;

}




Factory Function
function create(ID, NAME, COST){
return {id:ID, name:NAME, cost:COST, costIDfn:costIDTemplate};

}

constructedProduct
constructProduct {id: 2, name: "tablet", cost: 44990, costIDfn: function}
factoryFunctionCreatedProduct
Object {id: 1, name: "phone", cost: 29990, costIDfn: function}
constructedProduct.constructor
function constructProduct(ID, NAME, COST){
this.id = ID;
this.name = NAME;
this.cost = COST;
this.costIDfn = costIDTemplate;
return this;

}
factoryFunctionCreatedProduct.constructor
function Object() { [native code] }



