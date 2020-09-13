describe('Comparadores comunes', () => {
  const user = {
    name: 'Miguelangel',
    lastName: 'Palma',
  };

  const user2 = {
    name: 'Miguelangel2',
    lastName: 'Palma2',
  };

  test('igualdad de elementos', () => {
    expect(user).toEqual(user2);
  });
  test('no son exactamente iguales', () => {
    expect(user).not.toEqual(user2);
  });
});
