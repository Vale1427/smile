import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McitasComponent } from './mcitas.component';

describe('McitasComponent', () => {
  let component: McitasComponent;
  let fixture: ComponentFixture<McitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McitasComponent]
    });
    fixture = TestBed.createComponent(McitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
