//// [scopeClassDeclarations.ts]
declare const condition: boolean;

if (condition)
    class C {} // runtime error if transpiled to ES2015 or above: Unexpected token class.

new C(); // runtime error if transpiled to ES5, because 'C' is undefined.

if (condition) 
    console.log(); 
else
    class X {}

function foo() {
	return class X {}; // Not an error.
}

while (class C {}) {  // Not an error.
    break;
}

switch (condition) {
    case true:
        class C {} // Not an error.
        break;
    case false: {
        class C {} // Not an error.
        break;
    }
    default:
        class X {} // Not an error.
        break;
}


//// [scopeClassDeclarations.js]
if (condition) {
    var C = /** @class */ (function () {
        function C() {
        }
        return C;
    }());
} // runtime error if transpiled to ES2015 or above: Unexpected token class.
new C(); // runtime error if transpiled to ES5, because 'C' is undefined.
if (condition)
    console.log();
else {
    var X = /** @class */ (function () {
        function X() {
        }
        return X;
    }());
}
function foo() {
    return /** @class */ (function () {
        function X() {
        }
        return X;
    }()); // Not an error.
}
while (/** @class */ (function () {
    function C() {
    }
    return C;
}())) { // Not an error.
    break;
}
switch (condition) {
    case true:
        var C_1 = /** @class */ (function () {
            function C() {
            }
            return C;
        }()); // Not an error.
        break;
    case false: {
        var C_2 = /** @class */ (function () {
            function C() {
            }
            return C;
        }()); // Not an error.
        break;
    }
    default:
        var X_1 = /** @class */ (function () {
            function X() {
            }
            return X;
        }()); // Not an error.
        break;
}
