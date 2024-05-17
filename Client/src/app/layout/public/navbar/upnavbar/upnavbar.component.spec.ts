import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpnavbarComponent } from './upnavbar.component';

describe('UpnavbarComponent', () => {
  let component: UpnavbarComponent;
  let fixture: ComponentFixture<UpnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpnavbarComponent]
    });
    fixture = TestBed.createComponent(UpnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
