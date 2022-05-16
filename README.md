# JD1 Certification Notes

## Variables Types & Collections

    - Boolean, Number, String, BigInt, Symbol, Object, Null and Undefined
    - let, var and const
    - let and const are block scoped
    - const must be initialized with declaration
    - typeof operators returns a String, telling what type the datatype is
    - 'typeof' and ("== null" or "== 'undefined'") can be used to check whether variables assigned or not
    - variable declared with var can be hoisted
    	(a) Only declaration can be considered
    	(b) Value assignment doesn't works with hoisting
    - Number, Boolean and String have Wrapper Object
    	(a) If used as method primitive value is returned (typeof returns primitive)
    	(b) If used with new keyword object is created (typeof returns object)
    - Undefined & Null{
    	(a) undefined is assigned by the system
    	(b) user have to assign null, system can't do that
    	(c) typeof a variable assigned undefined is undefined
    	(d) typeof a variable assigned null is object
    - Object & Array
    	(a) Array is collection of different data types
    	(b) Object & Array declared with const can be reassigned
    	(c) They can be created with a constructor or literal syntax
    	(d) An array with a single comma or two commas create an array with empty elements (elements are undefined)
    	(e) An array with blank square brackets create an empty array
    - instanceof operator return true or false, speifying a value is an instance of an object or not
    - BigInt can be created with a constructor or appending n to an Integer
    - throw keyword is used to throw exception with a message.
    - Strings
    	(a) It can be created with constructor or string literal.
    	(b) Creating string with constructor will make a String object with collection of characters.
    	(c) Strings provides several methods for accessing and manipulating strings.
    	(d) Backtslash '\' can be used to in case of large string to move the remaining to next line.
    	(e) String templates can be used to pass variables inside string using Backtick (`) and (${}).
    	(f) Length is a property and not function of string.
    - Numbers
    	(a) It can be created with constructor or number literal.
    	(b) Numbers also provides several methods for accessing and manipulating numbers.
    	(c) There are two ISNAN() function one for Number and one for Global
    		(i) Global IsNAN typecasts the value first before checking the value
    		(ii) Number's IsNAN checks the value before typecasts
    - Date
    	(a) It can be created using the Date Constructor or using now or parse method
    - Coercion
    	(a) Coercion with operators
    		(i) Loose Equality Operators: Primitives to Numbers (null to undefined)
    		(ii) Comparison Operators: Primitives to Numbers
    		(iii) Logical Operators: Primitives to Boolean (Between two numbers, then bigger number)
    		(iv) Arithmetic Operators: Primitives to Numbers (except + with string)
    		(v) Unary Operators: Primitives to Numbers
    		(vi) Bitwise Operators: Primitives to Numbers
    	(b) Coercion with Special Primitives
    		(i) Symbol			[Boolean: true, Sting: x, Number: x]
    		(ii) Null			[Boolean: false, Sting: "null", Number: 0]
    		(iii) Undefined		[Boolean: false, Sting: "undefined", Number: NaN]
    		(iv) NaN			[Boolean: false, Sting: "NaN", Number: NaN]
    	(c) Coercion with Objects
    		(i) Boolean: Always considered True
    		(ii) Number: Depends on valueOf and toString
    		(iii) String: Depends on valueOf and toString
    		(iv) If both toString and valueOf are present then valueOf will be considered.
    	(d) Explicit Type Coercion
    		(i) To String: object converts to [object, Object] rest all converts fine
    		(ii) To Number: Symbol gives error, null & blank array as 0, object & undefined as NaN
    		(iii) To Boolean : null, undefined and 0 (+,-) are false rest all are true
    - Truthy or Falsy
    	(a) Truthy Values
    		(i) true
    		(ii) Array & Objects (Even Blank)
    		(iii) Any String (even '0')
    		(iv) Any Number (except 0 - +ve or -ve)
    		(v) +Infinty or -Infinity
    	(b) Falsy Values
    		(i) false
    		(ii) 0 (+ve, -ve or 0n)
    		(iii) empty string
    		(iv) null or undefined
    		(v) NaN
    	(c) Boolean Constructor
    	(d) Double Bang
    	(e) Ternary Operator
    	(f) Equality & Inequality
    	(g) Logical Operators For Assignments
			(i) Number && Number - Larger Number
			(ii) Integer && Float - Integer
			(iii) Integer && BigN - Integer
			(iv) Number && String - String
			(iv) String && String - Longer String
			(v) Number || Number - Smaller Number
			(vi) Integer || Float - Integer
			(vii) Integer || BigN - Integer
			(viii) Number || String - Number
			(viii) String || String - Smaller String
			(ix) Boolean && Type - Boolean
			(x) Boolean || Type - Type
	- JavaScript Object Notation (JSON)
		(a) Text based data format - used to store and transmit data
		(b) JSON format supports - string, number, object, array, boolean and null
		(c) Before sending Data to Server - Serialized (JSON String) - stringify
		(d) After receiving Data from Server - Deserialized (JSON Object) - parse
		(e) JSON consists of only properties and no methods
		(f) Double quotes around property names is mandatory

## Objects, Functions and Classes

	- Functions - Block of code, declared once and executed many times
		(a) Functions can be created with a function declaration and function expressions
			(i) Function Declaration can be hoisted
			(ii) Function Expressions cannot be hoisted
		(b) Functions are First Class because they are treated as values, because they can be
			(i) assigned to a variable
			(ii) stored in an array
			(iii) passed to another function
			(iv) returned from a function
			(v) defined as property of an object
		(c) Named Function - Standard Function with a name
		(d) Anonymous Function - Functions wihout name and part of an expression
		(e) Recursive Function - Functions calls itself in its definition
		(f) Outer Function - Function that encloses other function in Nested Functions
		(g) Inner Function - Function being part of other function in Nested Functions
		(h) Immediately Invoked Function Expression (IIFE) - Functions that are invoked at the time of definition (iffy)
		(i) Arrow Function Expression - It is a compact alternative to a traditional function expression, but can't be used in all situations.
			(i) They don't have their own bindings like this, super etc.
			(ii) They should not be used as methods
			(iii) Not suitable for call, apply and bind
			(iv) Cannot be used as Constructors
			(v) Cannot use yield withing its body
			(vi) With single parameter, parenthesis are optional
			(vii) With single statement, braces are optional
			(viii) When the braces are removed, return statement should be removed
		(j) Closures - let us associate data with a function that operates on that data.
		(k) Function Invoking - Default value of this can be changed
			(i) Apply - arguments are passed as array
			(ii) Call - arguments are passed as comma separated values
			(iii) Bind - arguments are passed as csv and it returns a new function and hence need to be called
		(l) Generators
			(i) A generator function, which is defined with an asterisk (*) 
			(ii) returns a generator that can be used with the next() method to iterate over values. 
			(iii) It uses the yield keyword internally to pause the function and return the value in the current iteration.
		(m) Iterators - An iterator is a special object that implements a one-at-a-time sequence for a collection of items.
	- Objects
		(a) It is a data type with properties.
		(b) It can be created using Object constructor, Object Initializer or Object.Create() method.
		(c) It's properties can be traversed using for...in loop, Object.keys(obj) or Object.getOwnPropertyNames(obj).
		(d) Function defined as property is called method.
		(e) Getters and Setters can also be defined. (parenthesis are not used to invoke them)
		(f) Both Dot and Bracket notation can be used to access Object Properties
		(g) Object properties can be deleted using the delete keyword
		(h) Objects are passed as reference to other variables
	- Classes
		(a) Class is used to create objects of same kind.
		(b) Properties and Methods can be created in class.
		(c) It can be created using class declaration and class expression.
		(d) Classes are executed in Strict Mode.
		(e) Extends keyword is used to inherit a class.
	- Modules
		(a) File containing code with its own top-level scope.
		(b) Allows code to be structured and organized into separate files for modular code development.
		(c) To access features in a module, they must be explicitly exported.
		(d) Imported features from a module are read only.
		(e) Export keyword is used to export a module.
			(i) we can export a function by placing export in front of it.
			(ii) we can export more than one functions by keeping all functions in braces with export keyword.
			(iii) we can use export default to export a function or class. (Only 1 default export per module)
			(iv) while exporting as keyword can be used to rename features.
			(v) export from can be used in an aggregating module to export many modules from one module
		(f) Import keyword is used to import a module. [Module can be imported inside another module]
			(i) we can import individual feature of a module.
			(ii) we can import all features of a module using braces and specifying individual name.
			(iii) we can import all featues using * as <NAME> also.
			(iv) while importing as keyword can be used to rename features. [exported name should be same for renaming]
			(v) Dynamic import can also be done with import("...path").then((module)=>) or await import("...path") which will import when this code executes
		(g) Features of a module are imported as live bindings.
		(h) In path (.) means current directory, (..) means parent directory
		(i) Module imports are hoisted, i.e. modules can be imported anywhere in the file

