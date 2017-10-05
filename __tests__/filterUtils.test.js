import { parseCheckObjects } from '../src/utils/filterUtils';

describe('Test utils', () => {
  it('it parses object', () => {
    expect(parseCheckObjects([], ['78992'], true)).toEqual({ checked: [], all: [] });
  });
});
