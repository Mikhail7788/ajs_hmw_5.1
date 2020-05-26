import orderByProps from '../app';

test('sort', () => {
  const obj = {
    name: 'лучник', health: 25, level: 13, attack: 50, defence: 20,
  };
  const result = orderByProps(obj, ['level', 'name']);

  expect(result).toEqual([
    { key: 'level', value: 13 },
    { key: 'name', value: 'лучник' },  
    { key: 'attack', value: 50 },
    { key: 'defence', value: 20 },
    { key: 'health', value: 25 },
  ]);
});

test('not a found', () => {
  const obj = {
    name: 'лучник', health: 5, level: 3, attack: 50, defence: 20,
  };

  const result = orderByProps(obj, ['Киркоров', 'attack']);

  expect(result.message).toBe('Такого значения не существует!');
});