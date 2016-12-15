import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import * as actions from './async-action-creator';

const mockStore = configureMockStore([thunk]);

describe('async', () => {
    let store;

    beforeEach(() => store = mockStore());

    afterEach(fetchMock.restore);

    it('should create an action to fetch posts', () => {
        const todos = [{
            id: 1,
            text: 'write async test'
        }];

        fetchMock.get('/api/todos', todos);

        return store.dispatch(actions.fetchTodos())
            .then(() => {
                expect(fetchMock.called('/api/todos')).toBe(true);
                expect(store.getActions()).toEqual([
                    actions.requestTodos(),
                    actions.receiveTodos(todos),
                ]);
            });
    });
});