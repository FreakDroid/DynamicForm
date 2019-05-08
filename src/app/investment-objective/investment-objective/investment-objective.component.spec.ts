import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentObjectiveComponent } from './investment-objective.component';

describe('InvestmentObjectiveComponent', () => {
  let component: InvestmentObjectiveComponent;
  let fixture: ComponentFixture<InvestmentObjectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentObjectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
