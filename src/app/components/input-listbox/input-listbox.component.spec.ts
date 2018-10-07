import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputListboxComponent } from './input-listbox.component';

describe('InputListboxComponent', () => {
  let component: InputListboxComponent;
  let fixture: ComponentFixture<InputListboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputListboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputListboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
