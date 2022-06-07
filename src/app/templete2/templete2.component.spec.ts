import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templete2Component } from './templete2.component';

describe('Templete2Component', () => {
  let component: Templete2Component;
  let fixture: ComponentFixture<Templete2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Templete2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Templete2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
