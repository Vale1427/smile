import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimdentComponent } from './limdent.component';

describe('LimdentComponent', () => {
  let component: LimdentComponent;
  let fixture: ComponentFixture<LimdentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimdentComponent]
    });
    fixture = TestBed.createComponent(LimdentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
