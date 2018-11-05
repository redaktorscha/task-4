const propSorting = require('../js/src/propsorting');

const arrOriginal = [
  {prop1: 'Thomas', prop2: 10},
  {prop1: 'Kitty', prop2: 1},
  {prop1: 'Max', prop2: 6},
  {prop1: 'Angel', prop2: 3},
  {prop1: 'Tiger', prop2: 7},
]

const arrSortedByStrings = [
  {prop1: 'Angel', prop2: 3},
  {prop1: 'Kitty', prop2: 1},
  {prop1: 'Max', prop2: 6},
  {prop1: 'Thomas', prop2: 10},
  {prop1: 'Tiger', prop2: 7}, 
]

const arrSortedByNums = [
  {prop1: 'Kitty', prop2: 1},
  {prop1: 'Angel', prop2: 3},
  {prop1: 'Max', prop2: 6},
  {prop1: 'Tiger', prop2: 7},
  {prop1: 'Thomas', prop2: 10},
]

test('array is sorted by prop1, strings of letters', () => {
  propSorting(arrOriginal, 'prop1');
  expect(arrOriginal).toEqual(arrSortedByStrings);
});


test('array is sorted by prop2, numbers', () => {
  propSorting(arrOriginal, 'prop2');
  expect(arrOriginal).toEqual(arrSortedByNums);
});