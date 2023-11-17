const Azureleaf = require("./azl-strings.js");

class Arrayzureleaf extends Azureleaf {
  /**
   * Randomly shuffles all elements in array
   * @param {Array} arr
   * @returns {Array}
   */
  shuffle = (arr) => {
    if (!Array.isArray(arr)) return arr;

    for (let i = arr.length - 1; i > 0; i--) {
      // Gets random index from array
      const j = Math.floor(Math.random() * (i + 1));
      // Shuffles elements
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  /**
   * Flattens nested array into a single array
   * @param {Array} arr
   * @returns {Array}
   */
  flatten = (arr) => {
    if (!Array.isArray(arr)) return arr;
    const flattenedArr = [];

    arr.forEach((element) => {
      if (Array.isArray(element)) {
        // Using recursion to flatten any size of nested array
        flattenedArr.push(...this.flatten(element));
      } else {
        flattenedArr.push(element);
      }
    });

    return flattenedArr;
  };

  /**
   * Gets every time an element occurs in an array
   * @param {Array} arr
   * @returns {Object}
   */
  allOccurrences = (arr) => {
    if (!Array.isArray(arr)) return arr;
    const occurenceObj = {};

    // Sets each value in the object to how many occurrences the array has for each element
    for (let val of arr) {
      occurenceObj[val] ? (occurenceObj[val] += 1) : (occurenceObj[val] = 1);
    }

    return occurenceObj;
  };

  /**
   * Returns an array with each unique occurence in a previous array
   * @param {Array} arr 
   * @returns {Array} 
   */
  unique = (arr) => {
    if (!Array.isArray(arr)) return arr;
    const occurenceObj = {};
    const newArr = [];

    // Creates occurence obj
    for (let val of arr) {
      occurenceObj[val] ? (occurenceObj[val] += 1) : (occurenceObj[val] = 1);
    }

    // If the occurence is 1, and a number, push as an integer. Else, push as a string
    for (let key in occurenceObj) {
      if (occurenceObj[key] === 1) {
        !isNaN(parseInt(key) ? newArr.push(parseInt(key)) : newArr.push(key));
      }
    }

    return newArr;
  };

  /**
   * Splits array into a 2D array based on a chunk size
   * @param {Array} arr 
   * @param {Number} size 
   * @returns {Array}
   */
  chunk = (arr, size) => {
    if (!Array.isArray(arr)) return arr;
    const newArr = [];
    let sizeCounter = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (sizeCounter === 0) {
        newArr.push([]);
      }
      newArr[newArr.length - 1].push(arr[i]);
  
      sizeCounter++;
      if (sizeCounter === size) {
        sizeCounter = 0;
      }
    }
  
    return newArr;
  }

  /**
   * Rotates an array forwards based on desired user's positions
   * @param {Array} arr 
   * @param {Number} positions 
   * @returns {Array}
   */
  rotate = (arr, positions) => {
    if (!Array.isArray(arr)) return arr;
    const length = arr.length;

    for (let i = 0; i < positions; i++) {
      const temp = arr[length - 1]
      for (let j = length - 1; j > 0; j--) {
        arr[j] = arr[j - 1]
      }
      arr[0] = temp
    }

    return arr;
  }
  /**
   * Rotates an array backwards based on desired user's positions
   * @param {Array} arr 
   * @param {Number} positions 
   * @returns {Array}
   */
  rotateBack = (arr, positions) => {
    if (!Array.isArray(arr)) return arr;
    const length = arr.length;

    for (let i = 0; i < positions; i++) {
      const temp = arr[0];
      for (let j = 0; j < length - 1; j++) {
        arr[j] = arr[j + 1];
      }
      arr[length - 1] = temp;
    }
  
    return arr;
  }
}

module.exports = Arrayzureleaf;
const $azl = new Arrayzureleaf();

const x = $azl.rotateBack(["heel", "heel", "goat", "yup", "hey"], 1);
console.log(x);
