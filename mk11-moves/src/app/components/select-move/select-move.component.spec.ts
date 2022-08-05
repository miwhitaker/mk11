import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMoveComponent } from './select-move.component';

describe('SelectMoveComponent', () => {
  let component: SelectMoveComponent;
  let fixture: ComponentFixture<SelectMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
