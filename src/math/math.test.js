import { increment, add, nonExistingMethod } from './math';

describe('math.js', () => {

    it('should increment',
        () => expect(increment(1)).toBe(2));

    it('should add',
        () => expect(add(1, 2)).toBe(3));

    it('should have add method',
        () => expect(add).toBeDefined());

    describe('nonExistingMethod', () => {
        it('should not exists',
            () => expect(nonExistingMethod).not.toBeDefined());

        it('should throw',
            () => expect(() => nonExistingMethod()).toThrow());
    });

});