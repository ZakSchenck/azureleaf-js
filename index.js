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

}

const $azl = new CombinedAzureleaf();