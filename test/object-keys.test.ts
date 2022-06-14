import { objectKeys } from '../src';

describe('objectKeys function', () => {
  it('should return array of keys of object', () => {
    expect(objectKeys({ a: 1, b: 2 })).toEqual(['a', 'b']);
  });

  it('should return empty array if object is empty', () => {
    expect(objectKeys({})).toEqual([]);
  });
});
