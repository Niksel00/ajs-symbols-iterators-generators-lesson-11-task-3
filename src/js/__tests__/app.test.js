import canIterate from '../app';

test('canIterate Map()', () => {
  expect(canIterate(new Map())).toBeTruthy();
});

test('canIterate Set()', () => {
  expect(canIterate(new Set())).toBeTruthy();
});

test('canIterate null', () => {
  expect(canIterate(null)).toBeFalsy();
});

test('canIterate Number', () => {
  expect(canIterate(10)).toBeFalsy();
});

test('canIterate String', () => {
  expect(canIterate('Netology')).toBeTruthy();
});

test('canIterate undefined', () => {
  expect(canIterate(undefined)).toBeFalsy();
});

test('canIterate Array', () => {
  expect(canIterate([1, 2, 3])).toBeTruthy();
});
