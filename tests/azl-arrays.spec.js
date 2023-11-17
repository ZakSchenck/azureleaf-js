const { expect } = require('chai');
const Azureleaf = require('../src/azl-arrays'); 

describe('Azureleaf', () => {
    describe('flatten', () => {
      it('should flatten all nested arrays', () => {
        const azureleaf = new Azureleaf();
        const flattenedVar1 = azureleaf.flatten([[1, 2, 3], [4, 5, 6]]);
        expect(flattenedVar1).to.deep.equal([1, 2, 3, 4, 5, 6]);
        const flattenedVar2 = azureleaf.flatten([[1, 2, 3, [4, 5, 9]], [4, 5, 6]]);
        expect(flattenedVar2).to.deep.equal([1, 2, 3, 4, 5, 9, 4, 5, 6]);
      });
    })

})