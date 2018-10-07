import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInputtextareaComponent } from './input-inputtextarea.component';

describe('InputInputtextareaComponent', () => {
  let component: InputInputtextareaComponent;
  let fixture: ComponentFixture<InputInputtextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputInputtextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputInputtextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
