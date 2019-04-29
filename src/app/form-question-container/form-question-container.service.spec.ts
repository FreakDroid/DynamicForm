import { TestBed } from '@angular/core/testing';

import { FormQuestionContainerService } from './form-question-container.service';

describe('FormQuestionContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormQuestionContainerService = TestBed.get(FormQuestionContainerService);
    expect(service).toBeTruthy();
  });
});
