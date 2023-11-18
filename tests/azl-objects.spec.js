const { expect } = require('chai');
const Azureleaf = require('../src/azl-objects'); 

describe('Azureleaf', () => {
    describe('objCopy', () => {
      it('should deep copy objects', () => {
        const azureleaf = new Azureleaf();
        const objCopyVar1 = azureleaf.objCopy({test: 'test', obj: 'object'});
        expect(objCopyVar1).to.deep.equal({test: 'test', obj: 'object'});
        const objCopyVar2 = azureleaf.objCopy({nested: 'copies', are: 'also', nestedObj: {alot: 'of', fun: ':)'}});
        expect(objCopyVar2).to.deep.equal({nested: 'copies', are: 'also', nestedObj: {alot: 'of', fun: ':)'}});
      });
    })

    describe('changeKeys', () => {
      it('should merge TWO objects', () => {
        const azureleaf = new Azureleaf();
        const changeKeys = azureleaf.changeKeys({test: 'test', obj: 'object'}, {test: 'newKey', obj: 'objHasNewKey'});
        expect(changeKeys).to.deep.equal({newKey: 'test', objHasNewKey: 'object'});
      });
    })

    describe('objEquality', () => {
      it('should merge TWO objects', () => {
        const azureleaf = new Azureleaf();
        const objEqualityVar1 = azureleaf.objEquality({test: 'test', obj: 'object'}, {test: 'newKey', obj: 'objHasNewKey'});
        expect(objEqualityVar1).to.deep.equal(false);
        const objEqualityVar2 = azureleaf.objEquality({test: 'test', obj: 'object'}, {test: 'test', obj: 'object'});
        expect(objEqualityVar2).to.deep.equal(true);
      });
    })
})