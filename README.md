# js-cert-practice
## Variables Types & Collections
	- Boolean, Number, String, BigInt, Symbol, Object, Null and Undefined 
	- let, var and const	
	- let and const are block scoped
	- const must be initialized with declaration
	- typeof operators returns a String, telling what type the datatype is
	- 'typeof' and ('== null' or '== undefined') can be used to check whether variables assigned or not
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