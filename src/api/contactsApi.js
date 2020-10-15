import axios from 'axios';

export class ContactsApi {

    constructor() {
        this.getContactsUrl = 'http://localhost:3000/contacts';
    }

    getContacts(user) {
        return axios.get(this.getContactsUrl+`/${user}`, {
            profileId: user
        });
    }

}