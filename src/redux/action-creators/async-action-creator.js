export function requestTodos() {
    return {
        type: 'request_todos',
    };
}

export function receiveTodos(todos) {
    return {
        type: 'receive_todos',
        payload: todos,
    };
}

export function fetchTodos() {
    return dispatch => {
        dispatch(requestTodos());
        return fetch('/api/todos')
            .then(responce => responce.json())
            .then(todos => dispatch(receiveTodos(todos)))
    };
}