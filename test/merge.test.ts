import { merge } from '../src/merge';

describe('3-Way Merge Function (No Sort)', () => {

  test('should merge typical inputs with different lengths', () => {

    expect(
      merge(
        [1, 3, 5],
        [2, 4, 6],
        [9, 7, 0]
      )
    ).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9]);

  });

  test('should handle empty arrays seamlessly', () => {

    expect(
      merge([], [], [])
    ).toEqual([]);

  });

  test('should handle all duplicate values across arrays', () => {

    expect(
      merge(
        [1, 1],
        [1, 1],
        [1, 1]
      )
    ).toEqual([1, 1, 1, 1, 1, 1]);

  });

  test('should merge properly when arrays contain negative numbers', () => {

    expect(
      merge(
        [-5, -1, 3],
        [-3, 0, 2],
        [4, -2, -6]
      )
    ).toEqual([-6, -5, -3, -2, -1, 0, 2, 3, 4]);

  });

});