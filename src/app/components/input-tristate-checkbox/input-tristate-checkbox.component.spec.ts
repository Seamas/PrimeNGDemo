import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTristateCheckboxComponent } from './input-tristate-checkbox.component';

describe('InputTristateCheckboxComponent', () => {
  let component: InputTristateCheckboxComponent;
  let fixture: ComponentFixture<InputTristateCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTristateCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTristateCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
