const Azureleaf = require("./azl-strings.js");

class Objectureleaf extends Azureleaf {
  /**
   * Creates and returns a new deep copy object
   * @param {Object} obj
   * @returns {Object}
   */
  objCopy = (obj) => {
    // Check if parameter is an object
    if (typeof obj !== "object" || obj === null) return obj;
    const newObj = {};

    for (let key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        // Recursively copy object
        newObj[key] = this.objCopy(obj[key]);
      }
    }

    return newObj;
  };

  /**
   * Changes keys for each object key in a 1D object
   * @param {Object} obj 
   * @param {Object} keys 
   * @returns {Object}
   */
  changeKeys = (obj, keys) => {
    return Object.keys(obj).reduce((acc, key) => {
      // Check if a new key name exists
      const newKey = keys[key] || key;
      // Assign the value of the old key to the new key
      acc[newKey] = obj[key];
      return acc;
    }, {});
  };

  objEquality = (obj1, obj2) => {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    // If values for the same key are different return false
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
  }
}

module.exports = Objectureleaf;
const $azl = new Objectureleaf();
