import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRoundComponent } from './current-round.component';

describe('CurrentRoundComponent', () => {
  let component: CurrentRoundComponent;
  let fixture: ComponentFixture<CurrentRoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentRoundComponent]
    });
    fixture = TestBed.createComponent(CurrentRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
