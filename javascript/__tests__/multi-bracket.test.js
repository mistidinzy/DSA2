'use strict';

const { validateBrackets } = require('../stack-and-queue/multi-bracket');

describe("Multi-Bracket Validation", () => {
  test('MBV-01: Can correctly validate brackets, in several string variations.', () => {
    let s1 = '{[( a b c )]}';
    let s2 = '[(]{}';
    let s3 = '';
    let s4 = 'function banana(){oops i forgot something, I know it.';
    let s5 = 'technically true?';

    let r1 = validateBrackets(s1);
    let r2 = validateBrackets(s2);
    let r3 = validateBrackets(s3);
    let r4 = validateBrackets(s4);
    let r5 = validateBrackets(s5);

    expect(r1).toBeTruthy();
    expect(r2).toBeFalsy();
    expect(r3).toBeTruthy();
    expect(r4).toBeFalsy();
    expect(r5).toBeTruthy();
  })
});