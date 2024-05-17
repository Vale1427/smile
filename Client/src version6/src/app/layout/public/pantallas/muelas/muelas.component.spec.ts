import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuelasComponent } from './muelas.component';

describe('MuelasComponent', () => {
  let component: MuelasComponent;
  let fixture: ComponentFixture<MuelasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuelasComponent]
    });
    fixture = TestBed.createComponent(MuelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
