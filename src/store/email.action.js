import { emailService } from '../services/emailService.js'

export function loadEmails() {
    return async (dispatch) => {
        try {
            const emails = await emailService.query('emailDB')
            const action = { type: 'SET_EMAILS', emails }
            dispatch(action)
            return emails
        } catch (err) {
            console.log(err);
        }

    }
}

export function addEmail(email) {
    return async (dispatch) => {
        try {
            await emailService.save(email)
            dispatch({ type: 'ADD_EMAIL', email })
        } catch (err) {
            console.log('Can\'t add email ', err)
        }
    }
}