import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ContactList } from './contact-list';

describe('ContactList', () => {
  let component: ContactList;
  let fixture: ComponentFixture<ContactList>;
  let http: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactList],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    http = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(ContactList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    http.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    http.expectOne('https://jsonplaceholder.typicode.com/users').flush([]);
  });

  it('should render contacts from the HTTP response as table rows', async () => {
    expect(fixture.nativeElement.textContent).toContain('Cargando contactos...');

    const request = http.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(request.request.method).toBe('GET');
    request.flush([
      { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz' },
      { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv' },
    ]);
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    const rows = Array.from(element.querySelectorAll('tbody > tr'));

    expect(rows.map(row => Array.from(row.querySelectorAll('td'), cell => cell.textContent?.trim())))
      .toEqual([
        ['1', 'Leanne Graham', 'Sincere@april.biz'],
        ['2', 'Ervin Howell', 'Shanna@melissa.tv'],
      ]);
  });

  it('should stop showing the loading message when the request fails', async () => {
    http.expectOne('https://jsonplaceholder.typicode.com/users')
      .flush(null, { status: 500, statusText: 'Server Error' });
    await fixture.whenStable();

    expect(fixture.nativeElement.textContent).not.toContain('Cargando contactos...');
  });
});
