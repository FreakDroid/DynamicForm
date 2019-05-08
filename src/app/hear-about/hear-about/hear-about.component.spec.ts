import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HearAboutComponent } from './hear-about.component';

describe('HearAboutComponent', () => {
  let component: HearAboutComponent;
  let fixture: ComponentFixture<HearAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HearAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HearAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
