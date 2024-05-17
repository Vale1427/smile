import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InperfilComponent } from './inperfil.component';

describe('InperfilComponent', () => {
  let component: InperfilComponent;
  let fixture: ComponentFixture<InperfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InperfilComponent]
    });
    fixture = TestBed.createComponent(InperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
