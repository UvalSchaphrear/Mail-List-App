import { emailService } from '../services/emailService.js'

export function loadEmails(filterBy) {
    console.log(filterBy);
    return async (dispatch) => {
        try {
            let emails = await emailService.query('emailDB')
            console.log('filterBy', filterBy);
            if (!filterBy.length) {
                const action = { type: 'SET_EMAILS', emails }
                dispatch(action)
                return emails
            } else {
                emails = await emails.filter((email) => {
                    return email.emailAddress.toLowerCase().includes(filterBy.toLowerCase()) || email.emailContent.toLowerCase().includes(filterBy.toLowerCase())
                })
                console.log('emails', emails)
                const action = { type: 'SET_EMAILS', emails }
                dispatch(action)
                return emails
            }

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

export function setFilter(filterBy) {
    console.log(filterBy);
    return async (dispatch) => {
        try {
            dispatch({ type: 'SET_FILTER', filterBy })
        } catch (err) {
            console.log('Can\'t set filter ', err);
        }
    }
}