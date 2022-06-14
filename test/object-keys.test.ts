import { objectKeys } from '../src';

describe('objectKeys function', () => {
  it('should return empty array when passed parameter is not an object', () => {
    // @ts-expect-error
    expect(objectKeys(null)).toEqual([]);
    // @ts-expect-error
    expect(objectKeys(undefined)).toEqual([]);
    // @ts-expect-error
    expect(objectKeys('')).toEqual([]);
    // @ts-expect-error
    expect(objectKeys(0)).toEqual([]);
    // @ts-expect-error
    expect(objectKeys(true)).toEqual([]);
    // @ts-expect-error
    expect(objectKeys(false)).toEqual([]);
  });

  it('should return array of keys of object', () => {
    expect(objectKeys({ a: 1, b: 2 })).toEqual(['a', 'b']);
  });
});
