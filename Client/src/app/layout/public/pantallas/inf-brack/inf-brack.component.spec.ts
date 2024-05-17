import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfBrackComponent } from './inf-brack.component';

describe('InfBrackComponent', () => {
  let component: InfBrackComponent;
  let fixture: ComponentFixture<InfBrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfBrackComponent]
    });
    fixture = TestBed.createComponent(InfBrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
