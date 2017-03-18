# Properties mapper Node.js package
JSON Objects convertation utility

## Summary
_Version_: 0.1.1

_Usage_: anywhere you need to rename your objects' properties

## Description
The utility allows you to rename properties of JSON objects in one line of code. The source object is immutable and new one (with properties you need) is created.


## How to use
1. To install the package, type `npm install properties-mapper` in prompt.
2. Use `require('properties-mapper')` to import the functionality.
3. The package contains the only function `map` that takes 4 arguments as an input:
  * `Object` which you want to convert
  * `source` is either a comma-separated string or array that contains properties' names that should be renamed
  * `target` is either a comma-separated string or array too that contains appropriate properties' names for result object
  * `isRecursive` flag (optional, `true` is default) which is set if the function should be called recursively for each nested object
4. The function returns new object with renamed properties and stored appropriate values.


## Example
```
// Import 
var map = require('properties-mapper');

// Create test object and convertion options
let book = {
	Title: "Stories",
	Description: "The book contains well-known stories of Lev Tolstoy",
	Author: {
		FirstName: "Lev",
		LastName: "Tolstoy"
	},
	Pages: 57,
	Year: 1998
};
let source = "Title, Description, Author, FirstName, LastName, Pages, Year";
let target = "title, description, author, firstName, lastName, pages, year";

// Convert it
let preparedBook = map.map(book, source, target);

```
Result is:
```
{ 
  title: 'Stories',
  description: 'The book contains well-known stories of Lev Tolstoy',
  author: { 
    firstName: 'Lev', 
    lastName: 'Tolstoy' 
  },
  pages: 57,
  year: 1998 
}
```
