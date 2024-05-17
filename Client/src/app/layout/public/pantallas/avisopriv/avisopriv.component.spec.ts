import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoprivComponent } from './avisopriv.component';

describe('AvisoprivComponent', () => {
  let component: AvisoprivComponent;
  let fixture: ComponentFixture<AvisoprivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisoprivComponent]
    });
    fixture = TestBed.createComponent(AvisoprivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
