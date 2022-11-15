import { upperCase } from "../upperCase";

describe('test upperCase', () => {
    it('should upper case string', () => expect(upperCase('hello')).toBe('HELLO'))
})