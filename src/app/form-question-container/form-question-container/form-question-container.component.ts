import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-question-container',
  templateUrl: './form-question-container.component.html',
  styleUrls: ['./form-question-container.component.scss']
})
export class FormQuestionContainerComponent implements OnInit {

  public form: FormGroup;
  unsubcribe: any;


  public formInfo: any = {
    basicFormInfo: {
      cardTitle: 'Contact',
      cardSubtitle: 'Information',
      cardMessage: ''
    },
    fields: [
      {
        type: 'radioSubmit',
        name: 'sex',
        label: 'Sex',
        value: 'm',
        required: true,
        options: [
          {key: 'm', label: 'Male'},
          {key: 'f', label: 'Female'}
        ]
      }
    ]
  };

  ngOnInit() {
  }

  constructor() {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.formInfo))
    });
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log('llegue');
      console.log(update);
      this.formInfo = JSON.parse(update.fields);
    });
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
    console.log('actual values');
    console.log(event);
    console.log(this.form);
  }

}
