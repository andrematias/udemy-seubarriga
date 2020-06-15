test('Devo conhecer as principais assertivas do jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
});

test('Devo saber trabalhar com objetos', () => {
  const obj = { name: 'Matias', mail: 'dev.andrematias@gmail.com' };
  expect(obj).toHaveProperty('name');
  expect(obj).toHaveProperty('name', 'Matias');
  expect(obj.name).toBe('Matias');
});
