const initialState = {
    emails: [],
    filterBy: ''
}

export function emailReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET_EMAILS':
            newState = { ...state, emails: [...action.emails] }
            break;
        case 'ADD_EMAIL':
            newState = { ...state, emails: [...state.emails, action.email] }
            break;
        case 'SET_FILTER':
            newState = { ...state, filterBy: action.filterBy }
            break
        default:
    }
    return newState;
}
