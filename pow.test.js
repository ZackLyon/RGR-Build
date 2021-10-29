const pow = require('./pow.js');

describe('returns the calculated value of a base raised to an exponent', () => {
  it('returns 125 if given a base argument of 5 and an exponent argument of 3', () => {
    const expected = 125;

    const actual = pow(5, 3);

    expect(actual).toEqual(expected);
  });

  it('returns 81 if given a base argument of 3 and an exponent argument of 4', () => {
    const expected = 81;

    const actual = pow(3, 4);

    expect(actual).toEqual(expected);
  });
});
