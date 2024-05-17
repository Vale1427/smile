import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilcitasComponent } from './filcitas.component';

describe('FilcitasComponent', () => {
  let component: FilcitasComponent;
  let fixture: ComponentFixture<FilcitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilcitasComponent]
    });
    fixture = TestBed.createComponent(FilcitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
