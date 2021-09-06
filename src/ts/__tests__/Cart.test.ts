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
