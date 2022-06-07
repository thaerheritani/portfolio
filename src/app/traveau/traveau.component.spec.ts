import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraveauComponent } from './traveau.component';

describe('TraveauComponent', () => {
  let component: TraveauComponent;
  let fixture: ComponentFixture<TraveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraveauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
