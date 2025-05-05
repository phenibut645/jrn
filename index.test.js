const { movie } = require('./index');

test('movie function should return the favorite movie!', () => {
expect(movie()).toBe('Мой любимый фильм 8 миля');
});
