import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactRow } from './contact-row';

describe('ContactRow', () => {
  let component: ContactRow;
  let fixture: ComponentFixture<ContactRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactRow],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactRow);
    fixture.componentRef.setInput('contact', {
      id: 1, name: 'María López', email: 'maria@example.com',
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
