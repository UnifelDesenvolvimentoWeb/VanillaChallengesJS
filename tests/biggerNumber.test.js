const { biggerNumber } = require('../src/desafio1ao6');

describe('2 - biggerNumber', () => {
    // Returns the biggest number in an array of positive integers
    it('should return the biggest number in an array of positive integers', () => {
        const array = [1, 2, 3, 4, 5];
        const result = biggerNumber(array);
        expect(result).toBe(5);
    });
    // Returns the biggest number in an array of negative integers
    it('should return the biggest number in an array of negative integers', () => {
        const array = [-1, -2, -3, -4, -5];
        const result = biggerNumber(array);
        expect(result).toBe(-1);
    });
    // Returns the biggest number in an array of mixed positive and negative integers
    it('should return the biggest number in an array of mixed positive and negative integers', () => {
        const array = [-1, 2, -3, 4, -5];
        const result = biggerNumber(array);
        expect(result).toBe(4);
    });
    // Returns undefined when called with an empty array
    it('should return undefined when called with an empty array', () => {
        const array = [];
        const result = biggerNumber(array);
        expect(result).toBeUndefined();
    });
});
