describe('Comparadores comunes', () => {
  const user = {
    name: 'Miguelangel',
    lastname: 'Palma',
  };

  const user2 = {
    name: 'Miguelangel',
    lastname: 'Palma',
  };

  const user3 = {
    name: 'Maria',
    lastname: 'Jaramillo',
  };

  test('igualdad de elementos', () => {
    expect(user).toEqual(user2);
  });

  test('no son exactamente iguales', () => {
    expect(user).not.toEqual(user3);
  });
});
