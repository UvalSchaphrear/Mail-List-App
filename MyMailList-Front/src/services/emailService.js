import { httpService } from './http.service.js'


export const emailService = {
    save,
    query,
}

async function query(filterBy = '') {
    return await httpService.get('message/', filterBy)
}



function save(emailToAdd) {
    return httpService.post('message', emailToAdd)
}
