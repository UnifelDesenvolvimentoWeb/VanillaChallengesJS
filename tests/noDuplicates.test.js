const { noDuplicates } = require('../src/desafio1ao6')

describe('6 - noDuplicates', () => {

    // Returns an empty array when the input array is empty.
    it('should return an empty array when the input array is empty', () => {
      const input = [];
      const expected = [];
      const result = noDuplicates(input);
      expect(result).toEqual(expected);
    });

    // Returns an array with the same elements when there are no duplicates in the input array.
    it('should return the same array when there are no duplicates in the input array', () => {
      const input = [1, 2, 3, 4, 5];
      const expected = [1, 2, 3, 4, 5];
      const result = noDuplicates(input);
      expect(result).toEqual(expected);
    });

    // Returns an array with only the unique elements of the input array, preserving their order.
    it('should return an array with only the unique elements of the input array, preserving their order', () => {
      const input = [1, 2, 3, 2, 4, 5, 1];
      const expected = [1, 2, 3, 4, 5];
      const result = noDuplicates(input);
      expect(result).toEqual(expected);
    });

    // Returns an array with only one element when the input array has only one element.
    it('should return an array with only one element when the input array has only one element', () => {
      const input = [1];
      const expected = [1];
      const result = noDuplicates(input);
      expect(result).toEqual(expected);
    });

    // Returns an array with only one element when the input array has only duplicate elements.
    it('should return an array with only one element when the input array has only duplicate elements', () => {
      const input = [1, 1, 1, 1];
      const expected = [1];
      const result = noDuplicates(input);
      expect(result).toEqual(expected);
    });

    // Returns an array with only one element when the input array has all elements equal.
    it('should return an array with only one element when the input array has all elements equal', () => {
      const input = [2, 2, 2, 2, 2];
      const expected = [2];
      const result = noDuplicates(input);
      expect(result).toEqual(expected);
    });
});
