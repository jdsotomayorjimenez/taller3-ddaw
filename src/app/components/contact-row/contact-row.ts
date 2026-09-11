import { Component, input } from '@angular/core';
import type { Contact } from '../contact-list/contact-list';

@Component({
  selector: 'tr[app-contact-row]',
  standalone: true,
  styleUrl: './contact-row.css',
  templateUrl: './contact-row.html',
})

export class ContactRow {
  contact = input.required<Contact>();
}
