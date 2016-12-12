describe('user.service', () => {

    const getJsonMock = jest.fn()
        .mockReturnValue(Promise.resolve('User'));

    jest.mock('./http.service', () => ({
        getJson: getJsonMock
    }));

    afterEach(function () {
        jest.resetAllMocks();
        jest.clearAllTimers();
    });

    const getUser = require('./user.service').getUser;

    it('should request user by /user/:id', () => {
        return getUser(1).then(
            () => expect(getJsonMock).toHaveBeenCalledWith('/users/1'));
    });

});