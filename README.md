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