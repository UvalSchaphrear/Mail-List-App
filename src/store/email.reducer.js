const initialState = {
    emails: [],
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
        case 'REMOVE_EMAIL':
            newState = { ...state, emails: state.emails.filter(email => email.Key !== action.emailId) }
            break;
        default:
    }
    return newState;
}
