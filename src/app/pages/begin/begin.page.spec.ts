import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginPage } from './begin.page';

describe('BeginPage', () => {
  let component: BeginPage;
  let fixture: ComponentFixture<BeginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
