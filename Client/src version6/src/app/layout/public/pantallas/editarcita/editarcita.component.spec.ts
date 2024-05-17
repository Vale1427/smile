import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcitaComponent } from './editarcita.component';

describe('EditarcitaComponent', () => {
  let component: EditarcitaComponent;
  let fixture: ComponentFixture<EditarcitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarcitaComponent]
    });
    fixture = TestBed.createComponent(EditarcitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
