export default function todosReducer(state, action) {
    switch (action.type) {
        case 'request_todos':
            return {
                ...state,
                isFetching: true,
            };
        case 'receive_todos':
            return {
                ...state,
                todos: action.payload,
                isFetching: false,
            }
    }
}