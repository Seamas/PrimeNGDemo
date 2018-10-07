import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInputtextComponent } from './input-inputtext.component';

describe('InputInputtextComponent', () => {
  let component: InputInputtextComponent;
  let fixture: ComponentFixture<InputInputtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputInputtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputInputtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
