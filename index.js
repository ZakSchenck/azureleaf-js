const Azureleaf = require('./src/azl-strings');
const Arrayzureleaf = require('./src/azl-arrays');
const Objectureleaf = require('./src/azl-objects');

class CombinedAzureleaf extends Azureleaf {
  constructor() {
    super();
    this._mergePrototypes(Arrayzureleaf.prototype);
    this._mergePrototypes(Objectureleaf.prototype);
  }

  _mergePrototypes(sourcePrototype) {
    const targetPrototype = CombinedAzureleaf.prototype;
    const methodNames = Object.getOwnPropertyNames(sourcePrototype)
      .filter(method => typeof sourcePrototype[method] === 'function');

    methodNames.forEach(methodName => {
      targetPrototype[methodName] = sourcePrototype[methodName].bind(this);
    });
  }

  // Additional methods or modifications can be added here
}

// Create an instance of CombinedAzureleaf
const $azl = new CombinedAzureleaf();

// Use methods from Azureleaf, Arrayzureleaf, and Objectureleaf
const capitalizedString = $azl.capitalizeFirst('hello');
console.log(capitalizedString);

const shuffledArray = $azl.shuffle([1, 2, 3]);
console.log(shuffledArray);