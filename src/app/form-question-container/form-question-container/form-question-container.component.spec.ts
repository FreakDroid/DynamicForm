import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQuestionContainerComponent } from './form-question-container.component';

describe('FormQuestionContainerComponent', () => {
  let component: FormQuestionContainerComponent;
  let fixture: ComponentFixture<FormQuestionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormQuestionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormQuestionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
