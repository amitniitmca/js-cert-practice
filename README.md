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
    - Undefined & Null
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
    - instanceof operator return true or false, specifying a value is an instance of an object or not
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
		(f) Type of Breakpoint
			(i) Line-of-code - It allows pausing code execution before a specific line of code. It can also be conditional.
			(ii) DOM change - It pauses code execution on the code that changes a DOM node or its children.
			(iii) XHR/Fetch - It pauses code execution when the request URL of an XHR contains a certain string.
			(iv) Event Listener - It pauses on the event listener that runs after a specific event is executed.
			(v) Exception - It pauses on the line of code that throws a caught or uncaught exception.
			(vi) Function - It pause code execution when a specific function is called.
		(g) Network Panel
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
				=> Hard Reload - forces the browser to download all resources requested in the current page
				=> Empty Cache and Hard Reload - clears cached before performing a Hard Reload
	- Browser APIs
		(a) Built-in constructs in web browsers that allow JavaScript developers to extend the functionality of web pages.	
		(b) DOM API - Allows to manipulate the structure, style, or content of a web page.
		(c) Fetch API - Allows making requests to a server, such as to get or create data.
			(i) It fetches resources asynchronously across the network.
			(ii) The fetch method takes one required parameter, which is the path to the resource that needs to be fetched.
			(iii) An optional init parameter can be specified.
			(iv) init is an object containing any custom settings that need to be applied to the request.
			(v) The init object can contain options such as method, headers, body, mode, credentials, etc.
			(vi) The fetch method returns a promise which is fulfilled when a response is available.
			(vii) The async and await keywords can be used to invoke the fetch method.
		(d) Geolocation API - Allows getting location information from the user’s device.
			(i) It can be used to display customized information or plot their location on a map.
			(ii) The API can be accessed through a call to navigator.geolocation. 
			(iii) It causes the browser to ask the user for permission to access their data.
			(iv) Location information can be accessed using getCurrentPosition() and watchPosition().
			(v) Each method accepts up to three parameters: 
				=> a mandatory success callback, 
				=> an optional error callback, 
				=> an optional PositionOptionsobject
			(vi) The getCurrentPosition() method retrieves the current location of the device. 
			(vii) The watchPosition() method allows executing a function when the position changes.
		(e) History API - Allows navigating and manipulating the browser history.
			(i) Its methods and properties allow navigation and manipulation of history.
			(ii) The back, forward and go methods can be used to move backward and forward through the user’s history.
			(iii) The pushState() method pushes the given data into the session history data. 
			(iv) The replaceState() method modifies the current history entry.
			(v) When the active history entry changes, the popstate event is dispatched to the window. 
			(vi) A listener can be assigned to it.
			(vii) The popstate event is triggered when a browser action is performed, such as clicking the back button. 
			(viii) A listener can be assigned to the window.onpopstate property.
		(f) Canvas API - Allows to draw 2D graphics on a web page programmatically.
			(i) The Canvas API can be used to draw 2D graphics using the <canvas> element in HTML and JavaScript code.
			(ii) The getContext() method interface can be used to get the drawing context of a <canvas> element.
			(iii) The methods and properties of the CanvasRenderingContext2D interface can be used for the drawing of shapes, text, images, and other objects.
				=> strokeRect() to paint a rectangle
				=> lineWidth to set the width of lines
			(iv) The WebGL API also uses the <canvas> element, but it is capable of drawing hardware-accelerated 2D and 3D graphics.
		(g) URL API - Allows to access and modify the properties of a URL.
			(i) used to access the components of a given URL
			(ii) used to modify the properties of the URL
			(iii) used to get the parameters of the URL.
			(iv) A URL object can be created for a given URL to parse the URL and get access to its components
			(v) The parameters of a URL can be obtained by using the search property. 
			(vi) Individual parameters can be obtained by using the get() method of URLSearchParams.
			(vii) The URL API provides two interfaces called URL and URLSearchParams
		(h) Web Storage API - Allows storing data items in session storage and local storage.
			(i) The Window.sessionStorageproperty can be used store data for the duration of the page session.
			(ii) The data is stored until the browser or tab is closed. However, the storage limit is 5 MB.
			(iii) The Window.localStorage property can be used to store data in the local storage with no expiration. 
			(iv) The data persists even when the browser is closed or reopened. 
			(v) The storage limit is the maximum.
			(vi) Invoking either sessionStorage or localStorage creates an instance of the Storage object
			(vii) The Storage.getItem, Storage.setItem and Storage.removeItem methods can be used to retrieve, get and remove data items.(viii) Storage.clear() can be used to remove all keys from storage.
		(i) Cookies
			(i) Cookies are name-value pairs of data stored locally in the user’s device and have lowsize limits. 
			(ii) When a browser requests a web page, cookies that belong to the page are also sent along the request to the web server.
			(iii) document.cookie can be used to return all cookies in a format similar to a string
			(iv) setting the expiration to a date in the past deletes a specified cookie
		(j) Application Panel - Data persisted between requests such as local storage, session storage, and cookie data can be viewed in the Storage section of the Application panel in DevTools.
## Server Side JavaScript
	- Node.js
		(a) Node.js is a back-end JavaScript runtime environment.
		(b) It allows executing JavaScript code outside a web browser.
		(c) It can be used to write server-side code.
		(d) It uses event-driven architecture that allows asynchronous I/O.
		(e) Main Features
			(i) V8 Engine - Use to run node.js apps
			(ii) Non-Blocking - A single non-blocking process is utilized to run a Node.js app. [Not multi-threaded]
			(iii) ECMAScript - Supports the new ECMAScript standards.
			(iv) NPM - The npm registry hosts open-source packages.
			(v) Dynamic Content - Used to produce dynamic web page content by running server-side scripts.
			(vi) Real Time Apps - Real-time web applications, such as chat apps, can be built. {can handle multiple I/O requests concurrently}
			(vii) Single Page Apps - Can be used for complex, SPAs that require asynchronous calls and heavy I/O operations.
			(viii) API - Used for developing RESTful APIsand independent microservices.
	- HTTP Module
		(a) Routing can be defined in a Node.js web server to handle incoming HTTP(S) requests, such as GET, POST, PATCH, etc. 
		(b) It can be implemented using a framework or without it.
		(c) Node.js can also be used to perform outbound HTTP requests. 
		(d) For example, a GET requestcan be perform to retrieve data from an external web server. 
	- FS Module
		(a) It allows accessing and interacting with the file system on the computer.
		(b) one can read, copy and write to files.
		(c) Such operations can be performed synchronously or asynchronously.
	- Events Module
		(a) It can be used to work with events in Node.js. 
		(b) An EventEmitter object can be created to emit events, add an event listener, remove an event listener, etc.
	- Global Object & Variables
		(a) Node.js has the global object instead of the window object.
		(b) It has many useful methods and properties which can be utilized without using require().
		(c) A global variable can be set implicitly and also explicitly using 'global'.
		(d) When the var, let or const keyword is used, the variable is scoped to the module.
		(e) Trying to access a non-global variable using 'global' returns undefined.
		(f) A global variable can be accessed without using 'global'.
		(g) The console object provides methods such as console.log() which can be used to write to standard output of any Node.js stream.
		(h) The process object allows getting information about and controlling the current Node.js process. 
			=> For example, process.env can be used to access environment variables.
		(i) Methods such as setImmediate(), setInterval() and setTimeout() can be used to call a function at a specific time.
		(j) The WebAssembly object provides WebAssembly related functionality to work with low-level code.
			=> It is used to run code written in multiple languages on the web.
	- Node Package Manager
		(a) It is the package manager for Node.js. 
		(b) It consists of an online registry of open-source packages and a command line client (also called npm).
		(c) The command line client can be used to install an npm package that is available in the registry. 
		(d) The package dependencies of a project are listed in the package.json file.
		(e) The npm install <package-name> command can be used to install aspecific package.
		(f) The npm install command can be used to install all the dependencies in package.json.
		(g) The command line client can be used to run tasks by using the npm run <task-name> command. 
		(h) These are specified as “scripts” in the package.json file.
		(i) An npm package can be installed as a local install or a global install.
		(j) To use it in the code, it needs to be imported using require.
	- Node CLI Commands
		(a) Node.js offers various command-line options, which include 
			=> helpful runtime options
			=> debugging commands
			=> multiple ways of executing scripts
		(b) The node <JS_FILE_NAME> command can be used to run an application.
			=> Command-line parameters can be added. 
			=> The node command can be used to enter REPL mode.
			=> REPL stands for Read Evaluate Print Loop.
			=> It allows executing JavaScript code via the command-line interface. 
			=> It supports some special commands like .break and .clear. 
		(c) Commands like node inspect <JS_FILE> can be used for debugging JavaScript code in a Node.js application. 
			=> It launches the debugger.
		(d) The REPL mode in Node.js supports some special commands, all of which start with a dot.
			=> .break - Aborts further input or processing of an expression. It is the same as using Ctrl + C.
			=> .clear - Resets the REPL context to an empty object and clears any multi-line expression being input.
			=> .exit - Closes the I/O stream, which causes the REPL to exit.
			=> .help - Shows a list of REPL commands.
			=> .save - Saves the current REPL session to the specified file.
			=> .load - Loads the specified file into the current REPL session.
			=> .editor - Used to enter the editor mode. Ctrl + D is used to finish, and Ctrl + C is used to cancel.
		(e) When executing a Node.js application, arguments can be provided. 
			=> An argument can be standalone or have a key and a value. 
			=> The ‘argv’ property of the ‘process’ object can be accessed to obtain all the command line arguments.
		(f) Environment variables allow a Node.js app to behave differently based on the environment. 
			=> The ‘env’ property of the ‘process’ object is used to access them.
			=> The environment variable named NODE_ENV is typically used to set the environment, such as production or development. 
			=> It can be used to enable or disable features like caching.
			=> The PORT variable is used to specify the port on which the server should listen for incoming requests.
			=> The NODE_DEBUG variable is used to list the internal modules that the application developerwould like to debug.
			=> The DEBUG variable is used to list the public modules, such as npm modules, that need to be debugged. 
			=> It can be set to * to specify all public modules.
			=> Environment variables can be set using the command line and used in code by accessing process.env
		(g) NPM Commands
			=> npm init - This command can be used to create a package.json file in the current project directory
			=> npm install - This command can be used to install the specified package or all dependencies in package.json
			=> npm update - This command can be used to update the specified package or all dependencies in package.json
			=> npm run - This command can be used to run a command from the ‘scripts’ object of the package
			=> npm start - This command can be used to run a command specified in the ‘start’ property of the package’s ‘scripts’ object
		(h) Debugging Commands
			=> Command-line options are available for debugging Node.js code. 
			=> The node inspect command can be used to launch the debugger. 
			=> Commands can be executed to set breakpoints, step through code, watch expressions, etc.
			=> Commands are available to set and clear breakpoints. 
			=> It is also possible to use a command to watch expression and variable values while debugging.
			=> The setBreakpoint() or sb() command can be used to set a breakpoint on the 
				* current line
				* a specific line
				* the first line
				* the first statement of a function’s body.
			=> A conditional breakpoint can also be set.
			=> The clearBreakpoint() or cb()command is used to clear a breakpoint.
			=> The watch(‘expression’)command can be used to watch an expression. 
			=> The watcherscommand can be used to print the active watchers. 
			=> The unwatch(‘expression’)command is used to remove an active watcher.
			=> Stepping Commands
				* cont (c) 
				* next (n)
				* step (s)
				* out (o)
				* pause
		(i) Node Inspector and Dev Tools
			=> For debugging and profiling, Chrome DevTools can be attached to a Node.js instance. 
			=> The V8 Inspector can be enabled by using the --inspect flag when starting an app. 
			=> The --inspect-brk flag can be used instead to break on the first line of application code.
		(j) Additional Node.js CLI commands
			=> node --version - used to get the version of Node.js
			=> node --eval - used to evaluate the specified JavaScript code
			=> node --check - used to check the syntax of the code without execution
			=> node --help - used to print the Node command-line options
	- Node.js Modules
		(a) When creating a Node.js application or web server, a developer can make use of three types of modules. 
			=> Core modules - Build-in and defined in Node.js source
			=> Local modules - Locally by the developer in the application (helper.js)
			=> Third-party modules - Found on npm website and can be installed using npm install <package> command
		(b) Common JS Module System
			=> Node.js apps use CommonJS for module management.
			=> It is a specification that defines the behavior of the exports variable and the require function.
			=> Named Exports
				* To use a named export, an additional property can be specified on the exports object for the function or object.
				* For example, exports.user = user;
			=> Default Exports
				* To use a default export, the module.exports property can be assigned to a new value.
				* For example, module.exports = User; (where User is a class)
			=> Using Exports
				* The require() function can be added in the main file to use an exported feature.
				* For example const User = require(‘./helper.js’);
		(c) Code Modules
			=> HTTP/HTTPS - Provide classes, methods, and properties for 
				* creating a web server
				* handling incoming requests
				* performing outbound requests
			=> FS - Provide classes and methods for 
				* Accessing and interacting with the file system 
				* For instance, it can be used to read and edit files in the application directory.
			=> PATH - Provides various methods and properties for 
				* working with file and directory paths. 
				* For instance, it can be used to get the last portion of a file path.
			=> URL - Provides classes, methods, and properties that can be used for 
				* URL resolution and parsing. 
				* For instance, it can be used to get the host name portion of a URL
			=> EVENTS - Provides classes, methods, and properties which allow working with 
				* events in Node.js. 
				* For instance, it can be used to emit and handle events.
			=> UTIL - Provides various utilities that are used for 
				* supporting the Node.js internal APIs. 
				* For instance, it can be used to check if a value is a Boolean object.
			=> QUERYSTRING - Provides access to utilities for 
				* parsing and formatting URL query strings.
				* For instance, the querystring.parse() method parses the provided URL query string into key-value pairs
			=> ASSERT - Provides access to functions that can be used for assertion testing. 
				* For instance, assert.strictEqual() tests strict equality between the provided actual and expected parameters
			=> PROCESS - can be used to get 
				* information about and control the current Node.js process. 
				* For instance, process.exit() can be used to exit the current process.
			=> CONSOLE  
				* enables a simple debugging console similar to the JavaScript console functionality provided by web browsers 
			=> STREAM - provides an API for 
				* implementing the stream interface. 
				* A stream instance, for example, is a request to an HTTP server or the process.stdout property
			=> OS - provides operating system-related utility methods and properties
				* such as getting the host name, home directory of the current user, name of the operating system, etc.
		(d) Local Modules
			=> A developer can create a local module in a Node.js application for a particular set of functionalities. 
			=> For example, a helper module can be created, exported and included in the main application file
		(e) Third Party Modules
			=> Third-party modules can be downloaded and installed via npm
			=> The npm website (npmjs.com) can be used to search for third-party modules and access their documentation. 
			=> Third-party module can be installed for the purpose of development only or running the application.
			=> Once a third-party module has been installed, it must be loaded using the require()function.
		(f) Popular 3rd Party Modules
			=> LODASH - makes it easier to work with objects, arrays, numbers, strings, etc.
			=> REACT - used for building user interfaces by defining components.
			=> EXPRESS - web framework that allows building a web server and handling incoming HTTP requests via routes.
			=> AXIOS - HTTP client that allows making XMLHttpRequests from the browser and http requests from Node.js
			=> WEBPACK - used to bundle JavaScript modules for usage in the browser and also transform, bundle or package other resources
			=> CHALK - used for styling the messages logged in the terminal. 
			=> MOMENT - can be installed to parse, validate, manipulate, and display dates for various use cases
			=> JEST - testing framework that can be used for creating unit tests for testing JavaScript code
	- NPM Revisited
		(a) NPM is the package manager for Node.js. 
		(b) It has three different components, namely, 
			=> website
			=> CLI
			=> registry
		(c) npm install <package-name> command allows installing a specific package. 
			=> It can be installed as a development dependency using the --save-dev flag. 
			=> The -g flag can be added to install it as a global package.
		(d) The npm update <package-name> command allows updating the specified package. 
		(e) The npm outdated command can be used to check if any installed packages are outdated. 
		(f) The npm uninstall <package-name> command can be used to uninstall the specified package.
		(g) The package.json file lists the dependencies and devDependencies of the package. 
		(h) The name and version fields are required in the file. 
		(i) When publishing a new package, the version number should be updated in the file based on the semantic versioning spec.
		(j) Finding Packages
			=> The search bar of the npm website (npmjs.com) can be used to search for packages. 
			=> Each package is ranked according to four criteria, namely, popularity, quality, maintenance, and optimal.
		(k) Installing Packages
			=> Once a suitable package is found, it can be installed either locally or globally.
			=> The npm install <package-name> command can be used in the terminal to install a package locally. 
			=> The command must be entered in the root of the project directory.
			=> The npm install -g <package-name> command can be used in the terminal to install a package globally.
		(l) Using Packages
			=> Once a package has been installed, it can be used in the code by passing an argument to the require() function.
		(m) Update Packages
			=> Local and global packages that have been downloaded from the npm registry can be updated.
			=> The npm update <package-name> command can be used in the root directory of the project to update the specified package. 
			=> The -g flag can be used to update a global package.
			=> The npm outdated command can be used to check the npm registry to determine if any installed packages are outdated. 
			=> A specific package can also be used to check if that package is outdated.
		(n) Uninstalling Packages
			=> The npm uninstall <package-name> command can be used in the terminal to uninstall a package. 
			=> The -g flag can be used to uninstall a global package.
		(o) Package.json
			=> The package.json file contains information about the package. 
			=> A package must contain a package.json file if it needs to be published to the npm registry.
			=> The package.json file contains information such as name, description, version, etc. 
			=> It also lists the package dependencies, including the development dependencies.
			=> The package.json file makes it easierfor others to manage and install the package. 
			=> The npm install commandallows installing all the dependencies.
			=> The npm init -y command can be used in the root of the project directory to create a default package.json file.
		(p) Dependencies
			=> To save a package under dependencies, the npm install <package-name> or npm install <package-name> --save-prod  
			=> To save it under devDependencies, the --save-dev flag should be used instead.
		(q) Semantic Versioning
			=> New Product - 1.0.0
			=> Patch Release - 1.0.1
			=> Minor Release - 1.1.0
			=> Major Release - 2.0.0
		(r) Versioning Operators
			=> PRIMITIVE - Particular Range
			=> TILDE - Same Minor Range
			=> CARAT - Same Major Range
			=> X-RANGES - Major, Minor or Patch

