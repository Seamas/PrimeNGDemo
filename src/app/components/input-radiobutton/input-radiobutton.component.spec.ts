import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRadiobuttonComponent } from './input-radiobutton.component';

describe('InputRadiobuttonComponent', () => {
  let component: InputRadiobuttonComponent;
  let fixture: ComponentFixture<InputRadiobuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputRadiobuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
