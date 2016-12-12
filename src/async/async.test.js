import { ajaxGet } from './async';

describe('ajax', () => {

    it('should return some data', () => {
        return ajaxGet('/known-endpoint')
            .then(data => expect(data).toBe('Some data'));
    });

    it('should return error on other endpoints', () => {
        return ajaxGet('/other')
            .catch(data => expect(data).toBe('Error!'));
    });

});