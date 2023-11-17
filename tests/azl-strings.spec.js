const { expect } = require('chai');
const Azureleaf = require('../src/azl-strings'); 

describe('Azureleaf', () => {
    describe('capitalizeFirst', () => {
      it('should capitalize the first letter of a word', () => {
        const azureleaf = new Azureleaf();
        const capitalized = azureleaf.capitalizeFirst('hello world');
        expect(capitalized).to.equal('Hello world');
      });
    })

    describe('camelCase', () => {
      it('should manipulate a string into camel case, while removing non alphabetical chars', () => {
        const azureleaf = new Azureleaf();
        const camelCaseTestStr1 = azureleaf.camelCase('hello i am zak');
        expect(camelCaseTestStr1).to.equal('helloIAmZak');

        const camelCaseTestStr2 = azureleaf.camelCase('hello, my name is zak!  ');
        expect(camelCaseTestStr2).to.equal('helloMyNameIsZak');
      });
    })

    describe('pascalCase', () => {
      it('should manipulate a string into pascal case, while removing non alphabetical chars', () => {
        const azureleaf = new Azureleaf();
        const pascalCaseTestStr1 = azureleaf.pascalCase('hello i am zak');
        expect(pascalCaseTestStr1).to.equal('HelloIAmZak');

        const pascalCaseTestStr2 = azureleaf.pascalCase('hello, my name is zak!  ');
        expect(pascalCaseTestStr2).to.equal('HelloMyNameIsZak');
      });
    })
    
    describe('snakeCase', () => {
      it('should manipulate a string into snake case, while removing non alphabetical chars', () => {
        const azureleaf = new Azureleaf();
        const snakeCaseTestStr1 = azureleaf.snakeCase('hello i am zak');
        expect(snakeCaseTestStr1).to.equal('hello_i_am_zak');

        const snakeCaseTestStr2 = azureleaf.snakeCase('hello, my name is zak!  ');
        expect(snakeCaseTestStr2).to.equal('hello_my_name_is_zak');
      });
    })

    describe('truncate', () => {
      it('should truncate a string and add ... after a certain amount of chars', () => {
        const azureleaf = new Azureleaf();
        const truncateTestStr = azureleaf.truncate('hello i am zak', 5);
        expect(truncateTestStr).to.equal('hello...');
      });
    })

    describe('countOccurrences', () => {
      it('should count how many times a substring appears in a string', () => {
        const azureleaf = new Azureleaf();
        const countOccurrencesTestStr = azureleaf.countOccurrences('hello i am zak', 'hello');
        expect(countOccurrencesTestStr).to.equal(1);
        const countOccurrencesTestStr2 = azureleaf.countOccurrences('hello ihell hello am zak', 'hell');
        expect(countOccurrencesTestStr2).to.equal(3);
      });
    })

    describe('stringReverse', () => {
      it('should reverse a string', () => {
        const azureleaf = new Azureleaf();
        const stringReverseTestStr = azureleaf.stringReverse('hello i am zak');
        expect(stringReverseTestStr).to.equal('kaz ma i olleh');
      });
    })

})