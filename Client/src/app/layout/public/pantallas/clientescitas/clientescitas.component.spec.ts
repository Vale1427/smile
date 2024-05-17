import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientescitasComponent } from './clientescitas.component';

describe('ClientescitasComponent', () => {
  let component: ClientescitasComponent;
  let fixture: ComponentFixture<ClientescitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientescitasComponent]
    });
    fixture = TestBed.createComponent(ClientescitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
