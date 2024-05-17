import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtracComponent } from './extrac.component';

describe('ExtracComponent', () => {
  let component: ExtracComponent;
  let fixture: ComponentFixture<ExtracComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtracComponent]
    });
    fixture = TestBed.createComponent(ExtracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
