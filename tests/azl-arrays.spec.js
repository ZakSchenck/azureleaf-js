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

    describe('allOccurrences', () => {
      it('returns an object that counts occurrences for each element', () => {
        const azureleaf = new Azureleaf();
        const allOccurrencesVar1 = azureleaf.allOccurrences([1, 4, 3, 4, 5, 6]);
        expect(allOccurrencesVar1).to.deep.equal({'1': 1, '4': 2, '3': 1, '5': 1, '6': 1});
      });
    })
 
    describe('unique', () => {
      it('should make a new array with all unique values in it', () => {
        const azureleaf = new Azureleaf();
        const uniqueVar1 = azureleaf.unique([1, 4, 3, 4, 5, 6]);
        expect(uniqueVar1).to.deep.equal([1, 3, 5, 6]);
        const uniqueVar2 = azureleaf.unique(['hello', 'zak', 'hello', 'what']);
        expect(uniqueVar2).to.deep.equal(['zak', 'what']);
      });
    })

    describe('chunk', () => {
      it('should split an array into a users desired chunks', () => {
        const azureleaf = new Azureleaf();
        const chunkVar1 = azureleaf.chunk([1, 4, 3, 4, 5, 6], 3);
        expect(chunkVar1).to.deep.equal([[1, 4, 3], [4, 5, 6]]);
        const chunkVar2 = azureleaf.chunk(['hello', 'zak', 'hello', 'what', 'string'], 2);
        expect(chunkVar2).to.deep.equal([['hello', 'zak'], ['hello', 'what'], ['string']]);
      });
    })
 
    describe('rotate', () => {
      it('should rotate an array forwards based on the rotation size', () => {
        const azureleaf = new Azureleaf();
        const rotateVar1 = azureleaf.rotate([1, 4, 3, 4, 5, 6], 1);
        expect(rotateVar1).to.deep.equal([6, 1, 4, 3, 4, 5]);
      });
    })
 
    describe('rotateBack', () => {
      it('should rotate an array backwards based on the rotation size', () => {
        const azureleaf = new Azureleaf();
        const rotateBackVar1 = azureleaf.rotateBack([1, 4, 3, 4, 5, 6], 1);
        expect(rotateBackVar1).to.deep.equal([4, 3, 4, 5, 6, 1]);
      });
    })
})