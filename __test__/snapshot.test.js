import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('Es hora de las instantaneas', () => {
  test('Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });

  test('Siempre fallara la instantanea', () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      createAt: new Date(),
    };
    expect(user).toMatchSnapshot();
  });

  test('tenemos una excepción dentro del codigo', () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: 'Oscar Barajas',
    };

    expect(user).toMatchSnapshot({
      id: expect.any(Number),
    });
  });
});
