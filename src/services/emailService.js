import { storageService } from './async.storage.js'

const STORAGE_KEY = 'emailDB'

export const emailService = {
    getById,
    save,
    query,
}

async function query() {
    try {
        var emails = await JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
        return emails
    } catch (err) {
        console.log('Can\'t load emails', err)
    }
}


async function getById(emailId) {
    try {
        const email = await storageService.get(STORAGE_KEY, emailId)
        return email
    } catch (err) {
        console.log('Cant find email by Id', err);
    }

}


async function save(emailToAdd) {
    console.log(emailToAdd);
    try {
        return storageService.post(STORAGE_KEY, emailToAdd)
    } catch (err) {
        console.log(err)
    }
}