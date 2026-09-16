import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { ContactRow } from '../contact-row/contact-row';
import { ContactsService } from '../../servicios/contacts';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [ContactRow],
  templateUrl: './contact-list.html',
})
export class ContactList implements OnInit {
  private contactsService = inject(ContactsService);
  private changeDetector = inject(ChangeDetectorRef);
  contacts: Contact[] = [];
  cargando = true;

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe({
      next: (d) => { this.contacts = d; this.cargando = false; this.changeDetector.markForCheck(); },
      error: () => { this.cargando = false; this.changeDetector.markForCheck(); }
    });
  }
}
export interface Contact {
    id: number;
    name: string;
    email: string;
}
