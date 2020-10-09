import axios from 'axios';

export class ContactsApi {

    constructor() {
        this.getContactsUrl = 'http://localhost:3000/contacts';
    }

    async getContacts(user) {
        await axios.post(this.getContactsUrl, {
            phone: user.phone
        })
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                return error.response.data
            })
    }

}