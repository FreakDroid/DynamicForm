import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { FormQuestionContainerService } from '../form-question-container.service';
import {DynamicFormModel} from '../../model/DynamicForm.model';

@Component({
  selector: 'app-form-question-container',
  templateUrl: './form-question-container.component.html',
  styleUrls: ['./form-question-container.component.scss']
})
export class FormQuestionContainerComponent implements OnInit {

  public form: FormGroup;
  unsubcribe: any;

  public formInfo: any;

  ngOnInit() {
  }

  constructor(private formService: FormQuestionContainerService) {

    this.formService.checkStep().subscribe((res: DynamicFormModel) => {
        console.log(res);
        // @ts-ignore
        const { basicFormInfo, fields, next, prev } = res.data;

        const jsonForm = { basicFormInfo, fields};
        this.form = new FormGroup({
          fields: new FormControl(JSON.stringify(this.formInfo))
        });
        console.log(jsonForm);
      },
      error => {
        console.log('error', error);
      }
    );

   /* this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log('llegue');
      console.log(update);
      this.formInfo = JSON.parse(update.fields);
    }); */
  }

  onUpload(e) {
    console.log('onUpload');
    console.log(e);
  }

  getFields() {
    return this.formInfo;
  }

  ngDistroy() {
    this.unsubcribe();
  }

  onSubmit(event) {
    console.log(event);
  }

  back() {
    console.log('back');
  }

}
