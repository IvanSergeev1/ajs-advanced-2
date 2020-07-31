export default function attackSelection(hero) {
  if (!hero) {
    throw Error('Персонаж не задан');
  }
  const { special } = hero;
  const attacks = [];
  special.forEach((el) => {
    const { description = 'Описание недоступно' } = el;
    if (!el.description) {
      // eslint-disable-next-line no-param-reassign
      el.description = description;
    }
    attacks.push(el);
  });
  return attacks;
}
