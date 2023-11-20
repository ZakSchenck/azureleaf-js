# Azureleaf.js
## A modern, lightweight Javascript data manipulation library
### by Zak Schenck

[Github](https://github.com/ZakSchenck/azureleaf-js)

### Installation 

Go to your project's directory and type:
```
npm install azureleaf
```
Import as needed:
```javascript
import $azl from 'azureleaf'
```

### Some Included Features 

- Shuffling an array
```javascript
$azl.shuffle([1, 2, 3]) // Returns a randomized array
```

- Flattening an array of any size
```javascript
$azl.flatten([1, [2, 3], [4, 5, [6, 7]]]) // Returns [1, 2, 3, 4, 5, 6, 7]
```

- Count occurrences in an array. Returning an object.
```javascript
$azl.allOccurrences([1, 1, 3, 3, 5]) // Returns { 1: 2, 3: 2, 5: 1 }
```

- Checking equality between two objects. Returns boolean
```javascript
$azl.objEquality({name: 'Zak', state: 'MA'}, {name: 'Zak', state: 'MA'}) // Returns true
```

- Creating a deep copy of an object
```javascript
$azl.objCopy({name: 'Zak', state: 'MA'}) // Returns a deep copy of {name: 'Zak', state: 'MA'}
```

- You can convert strings into multiple cases such as camel case, pascal case, and snake case.
```javascript
$azl.snakeCase('Hello, world') // Returns 'hello_world'
$azl.camelCase('Hello, world') // Returns 'helloWorld'
$azl.pascalCase('Hello, world') // Returns 'HelloWorld'
```

..And more!
