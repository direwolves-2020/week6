# ES6: Variables, Functions, Rest and Spread operators, Iterables and Loops, Arrays, Template Strings

## Topics covered: 
### 1) Variables

[`let` vs. `const` - mutable vs. immutable variables](https://wesbos.com/let-vs-const/)

[mutability of objects saved as `const` variables](https://jack.ofspades.com/es6-const-not-immutable/index.html)

[Object.freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
- The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed.

[Temporal Dead Zone](https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone)
- Always make sure to declare your variables before using them, otherwise, you will run into an error and hit the temporal dead zone. 

[console.log()](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)
- There are many uses of console. The most common is `console.log()`, however, other common uses include `console.table()` and `console.alert()`

### 2) Functions

[Logical operators && and ||](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
- `&&` is the logical operator for 'or' while `||` is the logical operator for 'and' 

[Ternary Operators for shortened if/else statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- The ternary operator is the shortcut for creating if statements
- In this example, `isMember` is the variable we are checking, the statement after the `?` is the return value of the condition if true, while the statement after `:` is the return value of the condition if false 
```javascript
function getFee(isMember) {
  return (isMember ? "$2.00" : "$10.00");
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(1));
// expected output: "$2.00"
```

[Template Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- Below is an example of how to create template strings 
```javascript
const name = 'Snickers';
const age = 2;
const sentence = `My dog ${name} is ${age * 7} years old.'`;
console.log(sentence);
// The expected output would be 'My dog Snickers is 14 years old.'
```

[switch statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.
```javascript
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}
```


[JS functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- Here is the default way of creating a function 
```javascript
function multiply(x, y) {
   return x * y;
} 
```
- An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, or new.target keywords.
- Arrow function expressions are ill suited as methods, and they cannot be used as constructors.
```javascript
    // Now lets look at arrow functions with some built-in JS methods 
    const ages = [23,62,45,234,2,62,234,62,34];

    // Now console.log the ages which are greater than 60 - we will use the method 
    //.filter() which creates a new array from an existing one 
    // this basically means that if age is greater than 60, then add it to the old array 
    const old = ages.filter(age => age > 60);
    console.log('The ages above 60 are: ',old);
```
- Arrow function can either have a 'concise' body or the the usual block body. In a concise body, only an expression is specified, which becomes the implicit return value. You don't need to use a return statement 
```javascript
let func = x => x * x;                  
// concise body syntax, implied "return"

let func = (x, y) => { return x + y; }; 
// with block body, explicit "return" needed
```


### 3) Rest and Spread Operators

[spread operatior](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
```javascript
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6
```

[rest operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
```javascript
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10
```


### 4) Iterables and Loops

[Control flow](https://developer.mozilla.org/en-US/docs/Glossary/Control_flow)

[Loops and iterations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

[if, else if, else conditional statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- Below are the common structures for creating conditional statements
```javascript
function testNum(a) {
  if (a > 0) {
    return "positive";
  } else {
    return "NOT positive";
  }
}

console.log(testNum(-5));
// expected output: "NOT positive"
```

[for-of-loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
-The `for...of` statement creates a loop iterating over iterable objects, including: built-in String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables
```javascript
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}

// Output:
// 11
// 21
// 31
```

[for-in-loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

```javascript
const obj = {a: 1, b: 2, c: 3};
    
for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

### 5) Arrays

[.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
``` javascript
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12
```

[.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- findIndex() is similar to find() except that the index of the searched value is returned instead of the actual value 

[.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
```javascript
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

[.of()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of)
- The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
```javascript
Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]
```

[slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
```
[array methods .map() and .filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- There are numerous built-in JS methods, two of the most frequently used ones are .map() and .filter()
- .map() allows the user to create a new array with the results of calling a provided function on every element in the calling array
```javascript
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```
- While filter() creates a new array with all elements that pass the test implemented by the provided function
```javascript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

### 6) Template Strings

[functions within template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- A more advanced form of template literals are tagged templates. Tags allow you to parse template literals with a function.
- The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions.
- In the end, your function can return your manipulated string (or it can return something completely different as described in the next example).

More serious manipulations of template strings are illustrated here

[template strings with HTML](https://wesbos.com/template-strings-html/)


## Exercises
1) Rock - Paper - Scissors -> here you will create a basic game using the console
2) Basic calculator -> Be able to create a basic calculator which allows you to input 2 numbers and either multiply or divide them
3) Array Cardio - additional JS methods 

## Resources

[Introduction to Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)


