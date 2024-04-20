// Type Annotations 

// TypeScript Type Annotations allow developers to specify the types of variables, function parameters, return types, and object properties.

let awesomeName: string = 'shakeAndBake';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
// awesomeName = 20;

console.log(awesomeName);

let amount: number = 12;
amount = 12 - 1;
console.log(amount);

// amount = 'pants';

let isAwesome: boolean = true;
isAwesome = false;
console.log(isAwesome);

// isAwesome = 'shakeAndBake';


// Union Type 
// In TypeScript, a Union Type allows a variable to hold a value of multiple, distinct types, specified using the | operator. It can also be used to specify that a variable can hold one of several specific values. More examples are coming up.

let tax: number | string = 10;
tax = 100;
tax = '$10';

// fancy name - literal value type
let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';
// requestStatus = 'random';