const { getArrayNoIntervalo } = require('../src/desafio9')

describe('9 - getArrayNoIntervalo', () => {

    // Returns an object with an array and a counter when given an array and two numbers.
    it('should return an object with an array and a counter when given an array and two numbers', () => {
      const array = [1, 2, 3, 4, 5];
      const inicio = 2;
      const fim = 4;

      const result = getArrayNoIntervalo(array, inicio, fim);

      expect(result).toEqual({
        arrayNoIntervalo: [2, 3, 4],
        contador: 3
      });
    });

    // Returns an object with an array and a counter when given an array and two numbers.
    it('should return an object with an array and a counter when given an array and two numbers', () => {
        const array = [4, 6, 80, 100];
        const inicio = 6;
        const fim = 100;
    
        const result = getArrayNoIntervalo(array, inicio, fim);
    
        expect(result).toEqual({
            arrayNoIntervalo: [6, 80, 100],
            contador: 3
        });
    });


    // Returns an object with an array and a counter when given an array and two numbers.
    it('should return an object with an array and a counter when given an array and two numbers', () => {
        const array = [20, 18, 9, 15, 6, 80, 100];
        const inicio = 20;
        const fim = 80;
    
        const result = getArrayNoIntervalo(array, inicio, fim);
    
        expect(result).toEqual({
            arrayNoIntervalo: [20, 80],
            contador: 2
        });
    });

    // Returns an empty array and a counter of 0 when given an empty array and two numbers.
    it('should return an empty array and a counter of 0 when given an empty array and two numbers', () => {
      const array = [];
      const inicio = 2;
      const fim = 4;

      const result = getArrayNoIntervalo(array, inicio, fim);

      expect(result).toEqual({
        arrayNoIntervalo: [],
        contador: 0
      });
    });

    // Returns an empty array and a counter of 0 when given an array and two numbers that do not match any element in the array.
    it('should return an empty array and a counter of 0 when given an array and two numbers that do not match any element in the array', () => {
      const array = [1, 2, 3, 4, 5];
      const inicio = 6;
      const fim = 8;

      const result = getArrayNoIntervalo(array, inicio, fim);

      expect(result).toEqual({
        arrayNoIntervalo: [],
        contador: 0
      });
    });

    // Returns an empty array and a counter of 0 when given an array and two numbers in the wrong order.
    it('should return an empty array and a counter of 0 when given an array and two numbers in the wrong order', () => {
      const array = [1, 2, 3, 4, 5];
      const inicio = 4;
      const fim = 2;

      const result = getArrayNoIntervalo(array, inicio, fim);

      expect(result).toEqual({
        arrayNoIntervalo: [],
        contador: 0
      });
    });

    // Returns an empty array and a counter of 0 when given an array and two NaN values.
    it('should return an empty array and a counter of 0 when given an array and two NaN values', () => {
      const array = [1, 2, 3, 4, 5];
      const inicio = NaN;
      const fim = NaN;

      const result = getArrayNoIntervalo(array, inicio, fim);

      expect(result).toEqual({
        arrayNoIntervalo: [],
        contador: 0
      });
    });
});
