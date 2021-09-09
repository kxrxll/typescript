import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('movie can be created', () => {
  const movie = new Movie(1, 'Nemo', 500, 'Never give up', ['Comedy', 'Family'], 2005, 120);
  expect(movie).toEqual({
    id: 1,
    name: 'Nemo',
    price: 500,
    tagline: 'Never give up',
    genre: ['Comedy', 'Family'],
    year: 2005,
    length: 120,
  });
});

test('checking cart add and remove', () => {
  const movie = new Movie(1, 'Nemo', 500, 'Never give up', ['Comedy', 'Family'], 2005, 120);
  const cart = new Cart();
  cart.add(movie);
  cart.removeItem(1);
  expect(cart.items.length).toBe(0);
});

test('checking sum', () => {
  const movie = new Movie(1, 'Nemo', 500, 'Never give up', ['Comedy', 'Family'], 2005, 120);
  const cart = new Cart();
  cart.add(movie);
  cart.add(movie);
  cart.add(movie);
  expect(cart.calculateSumWithoutDiscount()).toBe(1500);
});

test('checking sum with discount', () => {
  const movie = new Movie(1, 'Nemo', 500, 'Never give up', ['Comedy', 'Family'], 2005, 120);
  const cart = new Cart();
  cart.add(movie);
  cart.add(movie);
  cart.add(movie);
  expect(cart.calculateSumWithDiscount(10)).toBe(1350);
});