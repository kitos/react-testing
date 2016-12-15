let id = 0;

export function addTodo(text) {
    return {
        type: 'add_todo',
        payload: {
            id: id++,
            text
        }
    }
}