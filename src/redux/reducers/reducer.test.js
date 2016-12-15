import todosReducer from './reducer';
import {
    requestTodos,
    receiveTodos,
} from '../action-creators/async-action-creator';

describe('todosReducer', () => {

    it('should set isFetching to true when loading started', () => {
        const state = Object.freeze({});
        expect(todosReducer(state, requestTodos()).isFetching).toBe(true);
    });

    it('should save todos and set isFetching to false when todos were loaded', () => {
        const state = Object.freeze({ isFetching: true });
        const todos = [{ id: 1 }];

        const newState = todosReducer(state, receiveTodos(todos));

        expect(newState.isFetching).toBe(false);
        expect(newState.todos).toBe(todos);
    });
});