import { getDefaultNormalizer } from '@testing-library/react'
import { storageService } from './async.storage.js'


// let md5 = require('md5')

const STORAGE_KEY = 'emailDB'

export const emailService = {
    getById,
    save,
    query,
}
// let str = 'elik@bigpanda.io'
// str = str.toLowerCase()
// console.log(md5(str));
// console.log(md5('Ori89@gmail.com'));


// async function getAvatar(email) {
//     // console.log(email);
//     // email = email.toLowerCase()
//     // let img = md5(email)
//     try {
//         const res = (`https://www.gravatar.com/avatar/${img}`)
//         // console.log(res);
//         // const avatar = res.data
//         // console.log(avatar);
//         return res

//     } catch (err) {
//         console.log('Couldn\'t get avatar pic', err);
//     }
// }

async function query() {
    try {
        var emails = await JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
        // emails.map(async mail => {
        //     return mail.avatarPic = await getAvatar(mail.emailAddress)

        // })
        // console.log(emails);
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