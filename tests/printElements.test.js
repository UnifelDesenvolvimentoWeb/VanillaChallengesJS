const { printElements } = require('../src/desafio1ao6');

describe('1 - printElements', () => {
    // prints all elements of the array
    it('should print all elements of the array when called with a valid array', () => {
        const array = [1, 2, 3];
        const consoleSpy = jest.spyOn(console, 'log');

        printElements(array);

        expect(consoleSpy).toHaveBeenCalledTimes(3);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, 1);
        expect(consoleSpy).toHaveBeenNthCalledWith(2, 2);
        expect(consoleSpy).toHaveBeenNthCalledWith(3, 3);

        consoleSpy.mockRestore();
    });

    // works with arrays of any length
    it('should work with arrays of any length when called with a valid array', () => {
        const array = [10, 5, 9, 26, 8];
        const consoleSpy = jest.spyOn(console, 'log');
    
        printElements(array);
    
        expect(consoleSpy).toHaveBeenCalledTimes(5);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, 10);
        expect(consoleSpy).toHaveBeenNthCalledWith(2, 5);
        expect(consoleSpy).toHaveBeenNthCalledWith(3, 9);
        expect(consoleSpy).toHaveBeenNthCalledWith(4, 26);
        expect(consoleSpy).toHaveBeenNthCalledWith(5, 8);
    
        consoleSpy.mockRestore();
    });

    // handles arrays with one element
    it('should handle arrays with one element when called with a valid array', () => {
        const array = [1];
        const consoleSpy = jest.spyOn(console, 'log');
    
        printElements(array);
    
        expect(consoleSpy).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, 1);
    
        consoleSpy.mockRestore();
    });
    // handles arrays with null or undefined values
    it('should handle arrays with null or undefined values when called with an array containing null and undefined values', () => {
        const array = [null, undefined];
        const consoleSpy = jest.spyOn(console, 'log');
    
        printElements(array);
    
        expect(consoleSpy).toHaveBeenCalledTimes(2);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, null);
        expect(consoleSpy).toHaveBeenNthCalledWith(2, undefined);
    
        consoleSpy.mockRestore();
    });
});
