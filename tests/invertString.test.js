const { invertString } = require('../src/desafio1ao6')

describe('5 - invertString', () => {

    // Returns the inverted version of a string with no special characters or spaces.
    it('should return the inverted version of a string with no special characters or spaces', () => {
      const result = invertString("hello");
      expect(result).toEqual("olleh");
    });

    // Returns the inverted version of a string with special characters and spaces.
    it('should return the inverted version of a string with special characters and spaces', () => {
      const result = invertString("hello world!");
      expect(result).toEqual("!dlrow olleh");
    });

    // Returns an empty string when given an empty string.
    it('should return an empty string when given an empty string', () => {
      const result = invertString("");
      expect(result).toEqual("");
    });

    // Returns the inverted version of a string with only one character.
    it('should return the inverted version of a string with only one character', () => {
      const result = invertString("a");
      expect(result).toEqual("a");
    });

    // Returns the same string when given a palindrome.
    it('should return the same string when given a palindrome', () => {
      const result = invertString("racecar");
      expect(result).toEqual("racecar");
    });
});
