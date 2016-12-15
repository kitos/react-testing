import { addTodo } from './action-creator';

describe('action-creators', () => {

    it('should return todo with passed text and generated id', () => {
        const text = 'write test';
        const addTodoAction = addTodo(text);

        expect(addTodoAction.type).toBe('add_todo');
        expect(typeof addTodoAction.payload.id).toBe('number');
        expect(addTodoAction.payload.text).toBe(text);
    });
});