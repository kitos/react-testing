import { functionWithCallback } from './mock';

describe('mock', () => {

    jest.useFakeTimers();

    it('should execute callback', () => {
        const cb = jest.fn();

        functionWithCallback(cb);

        jest.runAllTimers();

        expect(cb).toHaveBeenCalled();
        expect(setTimeout.mock.calls[0][1]).toBe(1000);
    });
});