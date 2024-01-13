const { ignoreFirstAndLastElement } = require('../src/desafio1ao6')

describe('3 - ignoreFirstAndLastElement', () => {

    // Function receives an array with length >= 3, and logs all elements except the first and last ones
    it('should log all elements except the first and last ones when array length is greater than or equal to 3', () => {
      const array = [1, 2, 3, 4, 5];
      const consoleSpy = jest.spyOn(console, 'log');
  
      ignoreFirstAndLastElement(array);
  
      expect(consoleSpy).toHaveBeenCalledTimes(3);
      expect(consoleSpy).toHaveBeenCalledWith(2);
      expect(consoleSpy).toHaveBeenCalledWith(3);
      expect(consoleSpy).toHaveBeenCalledWith(4);
  
      consoleSpy.mockRestore();
    });

    // Function receives an array with length == 3, and logs the only element in the middle
    it('should log the only element in the middle when array length is equal to 3', () => {
      const array = [1, 2, 3];
      const consoleSpy = jest.spyOn(console, 'log');
  
      ignoreFirstAndLastElement(array);
  
      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy).toHaveBeenCalledWith(2);
  
      consoleSpy.mockRestore();
    });

    // Function receives an array with length > 3, and logs all elements except the first and last ones
    it('should log all elements except the first and last ones when array length is greater than 3', () => {
      const array = [1, 2, 3, 4, 5, 6];
      const consoleSpy = jest.spyOn(console, 'log');
  
      ignoreFirstAndLastElement(array);
  
      expect(consoleSpy).toHaveBeenCalledTimes(4);
      expect(consoleSpy).toHaveBeenCalledWith(2);
      expect(consoleSpy).toHaveBeenCalledWith(3);
      expect(consoleSpy).toHaveBeenCalledWith(4);
      expect(consoleSpy).toHaveBeenCalledWith(5);
  
      consoleSpy.mockRestore();
    });

    // Function receives an empty array, and logs 'Tamanho do array inválido'
    it(`should log 'Tamanho do array inválido' when array is empty`, () => {
      const array = [];
      const consoleSpy = jest.spyOn(console, 'log');
  
      ignoreFirstAndLastElement(array);
  
      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy).toHaveBeenCalledWith('Tamanho do array inválido');
  
      consoleSpy.mockRestore();
    });

    // Function receives an array with length == 1, and logs 'Tamanho do array inválido'
    it(`should log 'Tamanho do array inválido' when array length is equal to 1`, () => {
      const array = [1];
      const consoleSpy = jest.spyOn(console, 'log');
  
      ignoreFirstAndLastElement(array);
  
      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy).toHaveBeenCalledWith('Tamanho do array inválido');
  
      consoleSpy.mockRestore();
    });

    // Function receives an array with length == 2, and logs 'Tamanho do array inválido'
    it(`should log 'Tamanho do array inválido' when array length is equal to 2`, () => {
      const array = [1, 2];
      const consoleSpy = jest.spyOn(console, 'log');
  
      ignoreFirstAndLastElement(array);
  
      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy).toHaveBeenCalledWith('Tamanho do array inválido');
  
      consoleSpy.mockRestore();
    });
});
