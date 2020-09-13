import { sumar, multiplicar, restar, dividir } from '../maths';

describe('calculos matematicos', () => {
  test('prueba de sumas', () => {
    expect(sumar(1, 1)).toBe(2);
  });

  test('prueba de multiplicar', () => {
    expect(multiplicar(2, 2)).toBe(4);
  });

  test('prueba de dividir', () => {
    expect(dividir(2, 2)).toBe(1);
  });

  test('prueba de restar', () => {
    expect(restar(2, 2)).toBe(0);
  });
});
