class Azureleaf {
  /**
   * Capitalizes first letter of word
   * @param {String} string
   * @returns {String}
   */
  capitalizeFirst = (string) => {
    // Error handling checks if valid string
    if (typeof string !== "string" || string.length === 0) return string;

    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  /**
   * Sets a string to camel case and removes non alphabetical characters
   * @param {String} string
   * @returns {String}
   */
  camelCase = (string) => {
    // Gets rid of non alphabetical characters and separates each word
    const words = string.split(/[^A-Za-z]+/);

    const camelCaseString = words
      .map((word, index) => {
        if (index === 0) {
          // Lowercase the first word
          return word.toLowerCase();
        }
        // Setting the first letter of each word to uppercase, then joining the rest of the word
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");

    return camelCaseString;
  };

  /**
   * Sets a string to pascal case and removes non alphabetical characters
   * @param {String} string
   * @returns {String}
   */
  pascalCase = (string) => {
    const words = string.split(/[^A-Za-z]+/);

    const pascalCaseString = words
      .map((word, index) => {
        // Handles the first word in the array and capitalizes first character
        if (index === 0) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
        // Setting the first letter of each word to uppercase, then joining the rest of the word
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");

    return pascalCaseString;
  };
  /**
   * @param {String} string
   * @returns {String}
   */
  snakeCase = (string) => {
    const words = string
      .split(/[^A-Za-z]+/)
      .filter((word) => word.trim() !== "");

    const snakeCaseString = words
      .map((word) => {
        return word.toLowerCase();
      })
      .join("_"); // Joins each word with an underscore between them

    return snakeCaseString;
  };

  /**
   * Returns the desired length of the string, while adding the '...' to the end of it
   * @param {String} string
   * @param {Number} maxLength
   * @returns {String}
   */
  truncate = (string, maxLength) => {
    // Error handling checks if valid string and valid number
    if (
      typeof string !== "string" ||
      string.length === 0 ||
      typeof maxLength !== "number" ||
      maxLength <= 0
    )
      return string;

    return string.slice(0, maxLength) + "...";
  };

  /**
   * Counts how many times the substring occurs in the main string
   * @param {String} string
   * @param {String} substring
   * @returns {Number}
   */
  countOccurrences = (string, substring) => {
    if (typeof string !== "string" || string.length === 0) return string;
    else if (typeof substring !== "string" || string.length === 0)
      return substring;

    let count = 0;
    let position = string.indexOf(substring);

    while (position !== -1) {
      count++;
      position = string.indexOf(substring, position + 1);
    }

    return count;
  };

  /**
   * Reverses string and returns the reversed string
   * @param {String} string
   * @returns {String}
   */
  stringReverse = (string) => string.split("").reverse().join("");
}

$azl = new Azureleaf();
module.exports = Azureleaf;