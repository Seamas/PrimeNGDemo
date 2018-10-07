import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInputgroupComponent } from './input-inputgroup.component';

describe('InputInputgroupComponent', () => {
  let component: InputInputgroupComponent;
  let fixture: ComponentFixture<InputInputgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputInputgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputInputgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
