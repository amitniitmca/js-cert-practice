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
	- Decorator Functions
		(a) A decorator is a wrapper function that can be used to extend the behavior of another function. 
		(b) It receives the original function as a parameter and returns a new function with the extended behavior.
		(c) A decorator is useful for adding features to an existing function without increasing its complexity.
		(d) In order to extend a class method, the object of the class can be passed as a parameter to the wrapper function and call() method can be used in the function to invoke the class method with the object as the parameter.
		(e) To decorate a class method, 
			(i) the method is prefixed with @nameOfDecorator. 
			(ii) The decorator receives three parameters, target, name, and descriptor.
		(f) To decorate a class, 
			(i) the class is prefixed with @nameOfDecorator. 
			(ii) The decorator receives only the target parameter which refers to the object passed to the decorator.
		(g) Each object property has a property descriptor -
			(i) Value - value of the property
			(ii) Writable - true if the value of the property may be changed
			(iii) Configurable - true if the property descriptors of the property can be changed.
			(iv) Enumerable - true if the property appears during the enumeration of the object’s properties.
	- Variable Scope
		(a) scope defines which variables can be accessed. 
		(b) There are three types of scope, namely, global scope, function scope and block scope.
		(c) Child scope can access variables from parent scope.
		(d) Global scope accessible everywhere
		(e) Function scope - variables declared in function, they are accessible to inner functions
			(i) Let, Var and Const all have function scope
		(f) Block scope - variable declated in any block, they are accessible to inner blocks
			(i) only let and const can be block scoped
			(ii) var variables are not block scoped they can be accessed outside block
	- Hoisting
		(a) It moves functions and variables to the top of their scope before code execution.
		(b) It only moves the declaration statements to the top of the scope and not the initialization.
		(c) It is applicable to variables declared with var and function declaration and not other variables and function expression.
	- Closure		
		(a) It enables access to an outer function’s scope from within an inner function. 
		(b They are generated in JavaScript every time a function is created.
	- Execution Flow
		(a) refers to the order of execution of synchronous and asynchronous code
		(b) It is accomplished with call stack, message queue and event loop
		(c) Callstack: It is a mechanism that keeps track of the function being called and run.
		(d) Message Queue: It is a list of messages that needs to be processed. Each message has an associated function that gets called.
		(e) Event Loop: It monitors the call stack and message queue. when call stack is empty it takes first message from message queue and pushes it to stack.
		(f) Synchronous tasks is met, and added to call stack and event loop executes it by turn
		(g) Asynchronous Task
			(i) As turn came to call stack , callback added to web api with await time
			(ii) Web api send callback to message queue after waiting time
			(iii) It will wait in message queue till call stack is empty and then push the callback to call stack
			(iv) Event loop then executes the callback
	- Execution Context: It is an environment in which the code is evaluated and executed. 
		(a) Global Execution Context
			(i) Global object is created
			(ii) "this" object is created
			(iii) Memory space for variables and functions is created
			(iv) Variables are assigned "undefined", and function declarations are placed in memory
		(b) Function Execution Context
			(i) "arguments" object is created
			(ii) "this" object is created
			(iii) Memory space for variables and functions is created
			(iv) Variables are assigned "undefined", and function declarations are placed in memory
			(v) Argument variables are created and assigned with values
		(c) Control flow statements allow changing the flow of code execution. 
		(d) Statements such as if-else, switch, break and continue may change flow execution based on the requirement.

## Browser and Events
	- An event is a specific action or occurrence on a web page that is sent to notify code.
	- Event handlers are functions that are used to handle events.
	- Events
		(a) It may represent a user interaction 
		(b) An automated notification about something happening in the rendering model
		(c) It can also be triggered programmatically.
		(d) Each event that occurs in the DOM  is represented by an object based on the Event interface.
		(e) Event Object provides many useful properties and methods.
		(f) There are various events that are common across browsers. These are called standard events.
		(g) A custom event can be created using the CustomEvent() constructor and dispatched using the dispatchEvent() method.
		(h) The eventDetails parameter also supports the following optional standard properties (all default to false):
			(i) bubbles - indicates whether the event bubbles.
			(ii) cancelable - indicates whether the event can be cancelled.
			(iii) composed - indicates whether the event will trigger listeners outside of a shadow root
	- Event Handlers
		(a) There are two approaches for handling events
			(i) addEventListener
			(ii) onEvent Handler
		(b) Consideration with addEventListener()
			(i) Target - Any object that supports event (which is firing event)
			(ii) Parameters - Method can accept "optionsObject" (characteristics of event listener) and "useCapture" parameters
			(iii) Benefits - Allows adding more than 1 events and controlling phase (bubbling or capturing)
			(iv) Event listener method can be named or anonymous
			(v) Named Event Listener methods can be removed with removeEventListener
			(vi) When the handler is invoked, the this keyword is set to the DOM element on which the handler is registered. 
		(c) Consideration with onEvent() Handlers
			(i) An event handler can be called programmatically. example button.onclick()
			(ii) Non-Element objects also support this. example document, window
			(iii) When the handler is invoked, the this keyword is set to the DOM element on which the handler is registered. 
	- DOM Event Properties
		(a) target - Element that triggered the event
		(b) currentTarget - Element where the event listener is attached
		(c) clientX - x coordinate of the mouse click
		(d) clientY - y coordinate of the mouse click
	- Event Propogation in modern browsers consists of two phases
		(a) Bubbling - From the target to Outermost element
		(b) Capturing - From Outermost element to target
		(c) Default propogation is bubbling
		(d) Type of propogation can be selecting by third parameter to addEventListener
		(e) Third parameter is useCapture which is by default false
		(f) propagation of an event listener can also be specified by passing an “options” object
			(i) options = {capture: true, once: true}
			(ii) capture represents useCapture
			(iii) once = true removes event listener after the first call
		(g) stopPropogation
			(i) The stopPropagation() method prevents further propagation of the current event in the capturing and bubbling phases.
			(ii) It does not prevent the occurrence of default behaviors associated with the event.
	- preventDefault: The preventDefault() method can be used to prevent the occurrence of the default action associated with an event.
	- Document Object Model (DOM)
		(a) Represents the structure and content of an HTML document as objects and nodes.
		(b) DOM API allows accessing and manipulating the structure, style, and content of the web page.
		(c) Six fundamentals DOM data types
			(i) Document - Root Document Object of the page
			(ii) Node - Each object in an HTML document
			(iii) Element - An element
			(iv) NodeList - An array of elements
			(v) Attribute - Standard or Non-Standard property defined on Element
			(vi) NamedNodeMap - An array of elements whose items can be accessed by name or index.
		(d) DOM elements can be accessed by using getElementById(), querySelector(), and querySelectorAll().
		(e) Methods as appendChild() and setAttribute() and properties as innerHTML and style can be used to manipulate the DOM.
		(f) Window
			(i) It represents the browser window containing a DOM document.
			(ii) location - location.href returns or sets the URL of the current window. 
			(iii) history - contains methods for moving forward or backward or manipulating the browser session history.
			(iv) open() - used to open a link in current or new window/tab. window size, position, scrollbar visibility, etc. can be set.
			(v) scrollTo() - used to programmatically scrollto a specific location in the document. 
		(g) CSS Selectors
			(i) Tag - "tagname"
			(ii) id - "#id"
			(iii) class - ".class"
			(iv) Tag + Attr + Val - "tagname[attr=val]"
			(v) 4th element in a group - "tagname:nth-child(4)"
		(h) Retrieving DOM
			(i) querySelector
				=> It is available for retrieving the first matching Element node within the node’s subtree. 
				=> It returns null if no match is found.
			(ii) querySelectorAll
				=> It is used to retrieve a NodeList containing all the matching Element nodes within the node’s subtree. 
				=> It returns an empty NodeList if no match is found.
			(iii) getElementsByClassName
				=> It is used to return an array-like object of all child elements that match the specified class name.
			(iv) getElementsByTagName
				=> It is used to return an array-like object of all child elements that match a specified tag name.
	- Chrome Dev Tools
		(a) A set of developer tools in the Chrome web browser that can be used to investigate code behavior and debug JavaScript code. (b) It has various panels that can be utilized for debugging. 
		(c) Elements Panel
			(i) It is used to inspect and modify DOM and CSS. 
			(ii) The changes are not saved automatically.
			(iii) The Styles tab can be used to inspect and edit the styles and classes applied to the selected HTML element.
		(d) Console Panel - It allows running JavaScript code and viewing logged messages.
		(e) Sources Panel - It consists of tools that can be used for debugging. It has three parts
			(i) File Navigator - Shows every file that the page requests.
			(ii) Code Editor 
				=> Shows the contents of the file that is selected in the File Navigator pane.
				=> Clicking on the Format button converts the minified code into its pretty-print version.
				=> Breakpoints are supported in the pretty-print version of a minified JavaScript file.
				=> All the values can be examined at that moment in time. 
			(iii) JavaScript Debugging - It contains various tools for inspecting JavaScript code.
				=> Various types of breakpoints are available.
				=> One can step through code to walkthrough code execution, one line at a time.
				=> Scope Pane is used to check the values of variables.
				=> We can change value of any variable as well in the scope pane.
				=> The Scope pane allows viewing the local, global and closure variables that are currently defined.
				=> Watch Pane can be used to monitor the values over time.
				=> Any valid JavaScript expression can be added for monitoring.
		(f) Network Panel
			(i) It can be used to check the network activity of a page.
			(ii) It an be used to check whether resources are actually being downloaded or uploaded.
			(iii) The properties of an individualresource, such as HTTP headers,content, and size, can be inspected.
			(iv) All the network activity is logged in the Network Log.
			(v) When using Network panel we can disable cache.
			(vi) Each row in the log represents a resource.
			(vii) The network panel allows bandwidth throttling to simulate network bandwidth congestion.
			(viii) It helps to determine how an application behaves in the different network states.
			(ix) The browser cache can be disabled from the Network panel to prevent caching.
			(x) when the DevTool is open, different options are available for reloading a page. [Press and hold the Reload Button]
				=> Normal Reload - the default mode
				=> Hard Reload - orces the browser to download all resources requested in the current page
				=> Empty Cache and Hard Reload - clears cached before performing a Hard Reload

		