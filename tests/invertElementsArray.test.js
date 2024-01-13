const { invertElementsArray } = require('../src/desafio1ao6')

describe('4 - invertElementsArray', () => {

    // The function should correctly invert an array of any length.
    it('should correctly invert an array of any length', () => {
      const input = [1, 2, 3, 4, 5];
      const expected = [5, 4, 3, 2, 1];
      const result = invertElementsArray(input);
      expect(result).toEqual(expected);
    });

    // The function should return an empty array when given an empty array.
    it('should return an empty array when given an empty array', () => {
      const input = [];
      const expected = [];
      const result = invertElementsArray(input);
      expect(result).toEqual(expected);
    });

    // The function should return a new array and not modify the original array.
    it('should return a new array and not modify the original array', () => {
      const input = [1, 2, 3];
      const result = invertElementsArray(input);
      expect(result).not.toBe(input);
    });

    // The function should correctly invert an array containing only one element.
    it('should correctly invert an array containing only one element', () => {
      const input = [1];
      const expected = [1];
      const result = invertElementsArray(input);
      expect(result).toEqual(expected);
    });

    // The function should correctly invert an array containing only two elements.
    it('should correctly invert an array containing only two elements', () => {
      const input = [1, 2];
      const expected = [2, 1];
      const result = invertElementsArray(input);
      expect(result).toEqual(expected);
    });
});
