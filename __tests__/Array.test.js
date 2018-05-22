import '../lib/Array';

const fullArray = [1,2,3, 4];
const emptyArray = [];

describe('Array', () => {
  describe('last', () => {
    test('should return the last element of an array', () => {
      expect(fullArray.last()).toEqual(4);
    });
    test('should return undefined for an empty array', () => {
      expect(emptyArray.last()).toBeUndefined();
    });
  });

  describe('first', () => {
    test('should return the first element of an array', () => {
      expect(fullArray.first()).toEqual(1);
    });
    test('should return undefined for an empty array', () => {
      expect(emptyArray.first()).toBeUndefined();
    });
  });

  describe('chunk', () => {
    test('should return a new array of arrays of size n', () => {
      expect(fullArray.chunk(2)).toEqual([[1,2],[3,4]]);
    });
    test('should return an array of arrays of size 1 when n is not provided', () => {
      expect(fullArray.chunk()).toEqual([[1],[2],[3], [4]]);
    });
    test('should return what it has left for mismatched n', () => {
      expect(fullArray.chunk(3)).toEqual([[1,2,3], [4]]);
    });
    test('should return an empty array for empty arrays', () => {
      expect(emptyArray.chunk(0)).toEqual([]);
    });
    test('should return an empty array for n < 1', () => {
      expect(fullArray.chunk(0)).toEqual([]);
      expect(fullArray.chunk(-1)).toEqual([]);
    });
  });

  describe('startsWith', () => {
    test('should return true', () => {
      expect(fullArray.startsWith(1)).toBeTruthy();
    });
    test('should return false', () => {
      expect(fullArray.startsWith(2)).toBeFalsy();
    });
    test('should return false when v is undefined', () => {
      expect(fullArray.startsWith()).toBeFalsy();
    });
    test('should return false if the array is of length 0', () => {
      expect(emptyArray.startsWith(undefined)).toBeFalsy();
    });
  });

  describe('endsWith', () => {
    test('should return true', () => {
      expect(fullArray.endsWith(4)).toBeTruthy();
    });
    test('should return false', () => {
      expect(fullArray.endsWith(2)).toBeFalsy();
    });
    test('should return false when v is undefined', () => {
      expect(fullArray.endsWith()).toBeFalsy();
    })
    test('should return false if the array is of length 0', () => {
      expect(emptyArray.endsWith(1)).toBeFalsy();
    });
  });
  
  describe('unique', () => {
    test('should return an array of unique values', () => {
      expect([1,2,3,4,4].unique()).toEqual(fullArray);
    });
  });
});