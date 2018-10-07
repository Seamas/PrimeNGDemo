import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputColorpickerComponent } from './input-colorpicker.component';

describe('InputColorpickerComponent', () => {
  let component: InputColorpickerComponent;
  let fixture: ComponentFixture<InputColorpickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputColorpickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputColorpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
