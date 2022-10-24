"use strict";
// # 1
var getMulResult = function (a, b) {
    return a * b;
};
console.log(getMulResult(10, 3)); // show result 30
console.log(getMulResult("Hello", 3)); // not show error in compiler but, show result "Show result Not a number"
// # 2 || showing with type refreance
var getMulResult2 = function (a, b) {
    return a * b;
};
console.log(getMulResult2(10, 3)); // show result 30
console.log(getMulResult2("Hello", 3)); // throww error in compiler "Argument of type 'string' is not assignable to parameter of type" but, show result is NaN 
// example 3
var Parson = {
    name: 'sayed',
    age: 50
};
Parson.age = 50; // it's allow but
Parson.age = 'Fifty'; // not allow, showing a error "Type 'string' is not assignable to type 'number'.ts(2322)"
//# sourceMappingURL=main.js.map