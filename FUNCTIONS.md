# JS Functions

## String Functions
    - toLowerCase & toUpperCase
    - concat
    - includes
    - indexOf
        (a) indexOf(text)
        (b) indexOf(text, fromIndex)
    - replace
    - substring
        (a) substring(startIndex)
        (b) substring(startIndex, endIndex)
    - search: returns index of text to search
    - padStart & padEnd
        (a) padStart(length) or padEnd(length)
        (b) padStart(length, text) or padEnd(length, text)
    - trim

## Number Functions
    - isNaN (static)
    - isInteger (static)
    - parseFloat & parseInt (static)
    - toFxed (instance) - performs the rounding as well for >=5
    - toString (instance)
        (a) toString()
        (b) toString(radix)
    - valueOf (instance)

## Date Functions
    - now (static)
    - parse (static)
    - UTC (static)
    - getDay, getMonth, getFullYear, getHours, getMinutes, getSeconds, getMilliSeconds
    - setMonth, setFullYear, setHours, setMinutes, setSeconds, setMilliSeconds

## Array Functions
    - forEach (instance)
        (a) forEach(item => {})
        (b) forEach((item, index) => {})
    - push (instance): Add element at the end
    - unshift (instance): Add element at the beginning 
    - pop (instance): Remove element from the end
    - shift (instance): Remove element from the beginning
    - splice (instance): Add or Remove elements within the Array
    - slice (instance): Makes a copy from an array
    - includes (instance): True or False for the presence of a value
    - indexOf (instance): index position of first occurence from beginning (-1 if not found)
        (a) indexOf(element)
        (b) indexOf(element, fromIndex) [not including fromIndex]
    - lastIndexOf (instance): index position of first occurence from end (-1 if not found)
    - findIndex (instance): finds the index of a value (-1 if not found)
        (a) findIndex( item => {})
        (b) findIndex((item, index) => {})
        (c) findIndex((item, index, array) => {})
    - find (instance): returns the value to find in the array (undefined if not found)
        (a) find( item => {})
        (b) find((item, index) => {})
        (c) find((item, index, array) => {}) 
    - join (instance): returns string after joining array elements
    - concat (instance): concatenates multiple arrays and return
    - toString (instance): returns String representation of the array
    - sort (instance): sorts the element of the array in ascending order
        (a) sort: in increasing order
        (b) sort(a, b): a-b for increasing and b-a for decreasing
    - reverse (instance): reverse the order of elements of an array
    - map (instance): return a new Array from the given array {(item, index, array)}
    - filter (instance): returns a new filtered array from the given array {(item, index, array)}
    - reduce (instance): reduces the values of the array to a single value {(acc, item), initialValue}
    - flat (instance): flattens multi-demensional array upto the depth specified {array, depth}
    - every (instance): checks whether all the elements are matching a criteria {(item, index, array)}
    - some (instance): checks whether any of the elements are matching a criteria {(item, index, array)}
