import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactList } from './contact-list';

describe('ContactList', () => {
  let component: ContactList;
  let fixture: ComponentFixture<ContactList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactList],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render both contacts as table rows', () => {
    const element = fixture.nativeElement as HTMLElement;
    const rows = Array.from(element.querySelectorAll('tbody > tr'));

    expect(rows.map(row => Array.from(row.querySelectorAll('td'), cell => cell.textContent?.trim())))
      .toEqual([
        ['1', 'María López', 'maria@example.com'],
        ['2', 'Carlos Ruiz', 'carlos@example.com'],
      ]);
  });
});
