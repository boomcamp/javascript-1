# Project Summary
---

In this project, we'll provide practice JavaScript problems to help you better understand the fundamentals.

## Project Setup
---

* `Fork` this repository.
* `Clone` your fork onto your local machine.
* Create a new `git` branch named `submission`.
* Open `./user.json` and fill in your details.
* Open `./practice.js` with your code editor.
* Open `./index.html` with your browser.

## Directions

Complete all the activities inside of `./practice.js` to make the spec runner pass it's tests.
In order to check the progress of the spec runner, open `./SpecRunner.html` with your browser.
Remember to commit and push your code often. Good luck!

## Finished

Open a pull request from your `submission` branch back to the `master` branch of this repository.

## Tips and Tricks

One of the biggest tools at the developer's disposal is the browser's built-in debugger.
To use it, open `./index.html` with your browser and open the browser developer tools.

## Resources

 - [Variables](https://scotch.io/courses/10-need-to-know-javascript-concepts/declaring-javascript-variables-var-let-and-const)

 - [Data Types](https://codeburst.io/javascript-data-types-explained-347555cd2d4d)

 - [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
    ```javascript
    // declare an empty Array
    let stuff = [];

    // declare an Array with items
    let things = ['Name', 8, { firstName: 'Aodhan', ['Hello'] }]
    ```

 - [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
      ```javascript
      // declare an empty object
      let car = {}

      // declare an object with properties
      let car = {
        make: 'Ford',
        model: 'GT',
        year: 2019
      }

      // adding or updating properties with dot notation
      car.miles = 100;

      // adding or updating properties with bracket notation
      // if miles already exists on the object, this would change it's value
      // if it doesn't this will set it as a key with a value of 150
      car['miles'] = 150

      // if a property doesn't exist on an object, it's considered undefined

      car.owner === undefined // true
      ```

  - [Control Flow / Conditionals](https://developer.mozilla.org/en-US/docs/Glossary/Control_flow)
    - [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
    - [Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

  - [Functions]()

    ```javascript
    // Function Declaration

    function doTheThing() {
      return 'Did the thing';
    }

    // Function Expression

    let doTheThing = function() {
      return 'Did the thing';
    }

    // Function Parameters, Arguments and Invoking (calling) a Function
    // name is a function parameter
    // a variable we'll use in our function body

    function sayMyName(name) {

    // the string 'Your name is Jeff' will be output
    // from this function because of the return keyword

      return 'Your name is ' + name;
    }

    // function invocation
    // parentheses after the function tell the function to run
    // The string Jeff is called an argument (a value passed to a function and received as a parameter)
    sayMyName('Jeff');

    // Here we're passing more arguments than there are parameters
    // Only Jeff will be received as "name" in the parameter list
    sayMyName('Jeff', 'Karen')
    ```

 - [Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
