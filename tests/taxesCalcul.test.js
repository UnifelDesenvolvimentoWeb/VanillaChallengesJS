const { taxesCalcul } = require('../src/desafio7')

describe('7 - taxesCalcul', () => {

    // Should return the correct net salary for a gross salary of 2000
    it('should return the correct net salary for a gross salary of 2000', () => {
      const grossSalary = 2000;
      const expectedNetSalary = "Salário: R$ 1820";

      expect(taxesCalcul(grossSalary)).toBe(expectedNetSalary);
    });

    // Should return the correct net salary for a gross salary of 3000
    it('should return the correct net salary for a gross salary of 3000', () => {
      const grossSalary = 3000;
      const expectedNetSalary = "Salário: R$ 2612.55";

      expect(taxesCalcul(grossSalary)).toBe(expectedNetSalary);
    });

    // Should return the correct net salary for a gross salary of 4000
    it('should return the correct net salary for a gross salary of 4000', () => {
      const grossSalary = 4000;
      const expectedNetSalary = "Salário: R$ 3380.8";

      expect(taxesCalcul(grossSalary)).toBe(expectedNetSalary);
    });

    // Should return 0 for a gross salary of 0
    it('should return 0 for a gross salary of 0', () => {
      const grossSalary = 0;
      const expectedNetSalary = "Salário: R$ 0";

      expect(taxesCalcul(grossSalary)).toBe(expectedNetSalary);
    });

    // Should return the correct net salary for the minimum gross salary (1045)
    it('should return the correct net salary for the minimum gross salary (1045)', () => {
      const grossSalary = 1045;
      const expectedNetSalary = "Salário: R$ 961.4";

      expect(taxesCalcul(grossSalary)).toBe(expectedNetSalary);
    });
});
