import attackSelection from '../app';
import hero from '../base';

describe('attackSelection should', () => {
  test('return attacks for hero', () => {
    const result = attackSelection(hero);
    expect(result).toEqual([
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
    ]);
  });
  test('return error if hero is not defined', () => {
    expect(() => {
      attackSelection();
    }).toThrow();
  });
});
