# ES6: DOM API, Events Objects, Classes

## Topics covered:

### 1) DOM API 

[document / the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- The Document Object Model (DOM) connects web pages to scripts or programming languages. Usually that means JavaScript, although modelling HTML, SVG, or XML documents as objects is not part of the JavaScript language, as such.
- The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree; with them you can change the document's structure, style, or content. Nodes can also have event handlers attached to them; once an event is triggered, the event handlers get executed.

[Querying the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- There are multiple ways to query the DOM to get one or a list of elements you're looking for
 * [getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
 * [getElementsByTagName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName)
 * [getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)


[document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors.
- In the example below, in this example, the first element in the document with the class "myclass" is returned
```javascript
const el = document.querySelector(".myclass");
```

[document.querySelectAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) returns the list of elements that match the selector

- You use these methods to look up the elements in the DOM that you're interested in and them modify them the way you like 


[innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- The Element property innerHTML gets or sets the HTML or XML markup contained within the element.
```javascript
const content = element.innerHTML;
element.innerHTML = htmlString;
```

[appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- The Node.appendChild() method adds a node to the end of the list of children of a specified parent node
- If the given child is a reference to an existing node in the document, appendChild() moves it from its current position to the new position
```javascript
// Create a new paragraph element, and append it to the end of the document body
let p = document.createElement("p");
document.body.appendChild(p);
```

[this.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) 
- Using classList is a convenient alternative to accessing an element's list of classes as a space-delimited string via element.className.
```javascript
const div = document.createElement('div');
div.className = 'foo';

// our starting state: <div class="foo"></div>
console.log(div.outerHTML);

// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);
```

### 2) Events and Event Listeners 

We've looked at the display side of the Web with HTML and CSS. We've also had an introduction to the procedural or algorithmic side with Javascript. But what is it that joins the two sides together ? **Events**

Events form the `bridge` between the Visual (View) and the Procedural (Controller)

[Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
 - Events are a powerful mechanism of firing code in response to asynchronous `occurances` that might occur on a webpage. These occurances could be a user clicking a button, a browser window being resized, a page reloaded, a form submitted etc.


[addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) 
- The EventTarget method addEventListener() sets up a function that will be called whenever the specified event is delivered to the target.
- addEventListener() works by adding a function or an object that implements EventListener to the list of event listeners for the specified event type on the EventTarget on which it's called.
- The example below demonstrates how to use addEventListener() to watch for mouse clicks on an element

```HTML
<table id="outside">
  <tr><td id="t1">one</td></tr>
  <tr><td id="t2">two</td></tr>
</table>
```
```javascript
// Function to change the content of t2
function modifyText() {
  const t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}

// Add event listener to table
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
```

['this' as a DOM event handler](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#As_a_DOM_event_handler)
- In most cases, the value of this is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called
- When a function is used as an event handler, its `this` is set to the element the event fired from 
```javascript
// When called as a listener, turns the related element blue
function bluify(e) {
  // Always true
  console.log(this === e.currentTarget); 
  // true when currentTarget and target are the same object
  console.log(this === e.target);
  this.style.backgroundColor = '#A5D9F3';
}

// Get a list of every element in the document
const elements = document.getElementsByTagName('*');

// Add bluify as a click listener so when the
// element is clicked on, it turns blue
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', bluify, false);
}
```

[SetTimeOut](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
- The setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
- The following example sets up two simple buttons in a web page and hooks them to the setTimeout() and clearTimeout() routines. Pressing the first button will set a timeout which calls an alert dialog after two seconds and stores the timeout id for use by clearTimeout(). You may optionally cancel this timeout by pressing on the second button.
```HTML
<p>Live Example</p>
<button onclick="delayedAlert();">Show an alert box after two seconds</button>
<p></p>
<button onclick="clearAlert();">Cancel alert before it happens</button>
```
```javascript
let timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(window.alert, 2000, 'That was really slow!');
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}
```



### 3) Objects

[Javascript Object Model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)
 - A prototype-based language, such as JavaScript, does not make any distinction between classes and objects: it simply has objects. A prototype-based language has the notion of a prototypical object, an object used as a template from which to get the initial properties for a new object. Any object can specify its own additional properties, either when you create it or at run time. In addition, any object can be associated as the prototype for another object, allowing the second object to share the first object's properties.

#### Prototype model
  - JS prototypical instance
    - Every object has an internal property called `__proto__`. 
        -The value of this property is an object which is the next level up in the prototype chain 
    - Every function has a property called prototype. 
        - The value of this property is an object that is the function’s prototype.
        - This object is what is “bequeathed” to any objects created out of this function when called as a constructor with the new operator. 
        - The created object has the value of its `__proto__` property set to the constructor function’s prototype 
        - This object by default has two properties 
            - a constructor key which points to the constructor function definition as it’s value
            - `__proto__` the value of this property by default is the Object.prototype object
    - Any properties added to the constructor function prototype is received by all of instances created from the constructor. Any properties added to the new instance are it’s local properties local to each instance
    - Inheritance is brought about using the prototype chain which is accessed using the `__proto__` property. You get to the objects prototype using the objects `__proto__` property. And then to that objects prototype using that objects `__proto__` property and so on up the chain. The only object that doesn’t have a `__proto__` property is the Object.prototype object
    - To setup inheritance you need to link the prototype objects of the sub-object and the base object as a prototype chain so that the sub objects prototype has its `__proto__` property pointing to the base function’s prototype. This is brought about in the following steps
        - Create an object out the base objects constructor function’s prototype object using Object.create(). This newly created object will have its `__proto__` field set to the base class function’s prototype 
        - Set the constructor property of the newly created object to the sub object constructor function
        - Set the subclass function’s prototype field to this newly created object
        - In the sub object call the base constructor as `baseFunction.call(this)`.
        - Now any new object created from the subclass constructor function will have its prototype chain setup to go to the subclass function.prototype and then to the base class’ prototype 

        ```
        function Employee() {
            this.name = '';
            this.dept = 'general';
        }

        function Manager() {
            Employee.call(this);
            this.reports = [];
        }
        Manager.prototype = Object.create(Employee.prototype);
        Manager.prototype.constructor = Manager;
        ```


### 4) Classes

[Class Basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

`JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.`

- Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.
- One way to define a class is using a class declaration. To declare a class, you use the `class` keyword with the name of the class ("Rectangle" here).
```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```
- A class expression is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body.(it can be retrieved through the class's (not an instance's) name property, though).
```javascript
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle"

// named
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle2"
```

[constructors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Constructor)
- The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class. A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.

[class methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Prototype_methods)
- In this example, the calcArea is a class method for the class Rectangle 
```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
```

[static methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Static_methods)
- The static keyword defines a static method for a class. Static methods are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application.
```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

[getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
-The get syntax binds an object property to a function that will be called when that property is looked up.
```javascript
let obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    if (this.log.length == 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  }
}

console.log(obj.latest);
// expected output: "c"
```

[setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)
- The set syntax binds an object property to a function to be called when there is an attempt to set that property.
```javascript
let language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
}

language.current = 'EN';
language.current = 'FA';

console.log(language.log);
// expected output: Array ["EN", "FA"]
```

[extending classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
[inheritance](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)
- The extends keyword is used in class declarations or class expressions to create a class which is a child of another class.
- The child class will inherit the properties and methods of a parent class 
```javascript
class ChildClass extends ParentClass { ... }
```

[prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- JavaScript is often described as a prototype-based language — to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from.
- An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. 







### Exercises
 1. Array Cardio 2 - additional JS Methods
 1. API Exercise - create you own lookup ticker function for the JS version of terminal trader

#### Native Javascript exercises
[JS30in30](https://javascript30.com/)

Very good resource here for practicing core javascript.
