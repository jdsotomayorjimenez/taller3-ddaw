import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../components/contact-list/contact-list';

@Injectable ({
    providedIn: 'root',
})
export class ContactsService {
    private http = inject(HttpClient);
    private apiUrl = 'https://jsonplaceholder.typicode.com/users';

    getContacts(): Observable<Contact[]> {
        return this.http.get<Contact[]>(this.apiUrl);
    }
}
