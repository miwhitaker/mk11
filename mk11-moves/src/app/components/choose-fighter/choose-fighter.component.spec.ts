import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFighterComponent } from './choose-fighter.component';

describe('ChooseFighterComponent', () => {
  let component: ChooseFighterComponent;
  let fixture: ComponentFixture<ChooseFighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseFighterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseFighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
