import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie01Component } from './partie01.component';

describe('Partie01Component', () => {
  let component: Partie01Component;
  let fixture: ComponentFixture<Partie01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partie01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partie01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
