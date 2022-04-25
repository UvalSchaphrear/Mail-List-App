import { storageService } from './async.storage.js'
import { httpService } from './http.service.js'

const STORAGE_KEY = 'emailDB'

export const emailService = {
    // getById,
    save,
    query,
}

async function query(filterBy = '') {
    return await httpService.get('message/', filterBy)
}

// async function getById(emailId) {
//     try {
//         const email = await storageService.get(STORAGE_KEY, emailId)
//         return email
//     } catch (err) {
//         console.log('Cant find email by Id', err);
//     }

// }

function save(emailToAdd) {
    return httpService.post('message', emailToAdd)
}
