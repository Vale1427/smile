import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapasitioComponent } from './mapasitio.component';

describe('MapasitioComponent', () => {
  let component: MapasitioComponent;
  let fixture: ComponentFixture<MapasitioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapasitioComponent]
    });
    fixture = TestBed.createComponent(MapasitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
