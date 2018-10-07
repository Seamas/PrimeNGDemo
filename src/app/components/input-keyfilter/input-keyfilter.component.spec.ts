import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputKeyfilterComponent } from './input-keyfilter.component';

describe('InputKeyfilterComponent', () => {
  let component: InputKeyfilterComponent;
  let fixture: ComponentFixture<InputKeyfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputKeyfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputKeyfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
