import { sanitize } from '../../../src/utils/index';

describe('sanitize', () => {
  it('should sanitize special characters in a string', () => {
    const input = '<script>alert("Hello, World!")</script>';
    const expectedOutput = '&lt;script&gt;alert&quot;Hello, World!&quot;&lt;&#x2F;script&gt;';
    const result = sanitize(input);
    expect(result).toBe(expectedOutput);
  });

  it('should handle empty input string', () => {
    const input = '';
    const result = sanitize(input);
    expect(result).toBe('');
  });

  it('should handle string without special characters', () => {
    const input = 'Hello, World!';
    const result = sanitize(input);
    expect(result).toBe(input);
  });

  it('should handle null input', () => {
    const input = null;
    const result = sanitize(input);
    expect(result).toBeUndefined();
  });

  it('should handle undefined input', () => {
    const input = undefined;
    const result = sanitize(input);
    expect(result).toBeUndefined();
  });
});