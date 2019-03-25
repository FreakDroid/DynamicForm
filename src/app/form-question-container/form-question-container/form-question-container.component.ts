import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
      cardMessage: '',
    },
    fields:  [
      {
        type: 'text',
        name: 'firstName',
        label: 'First Name',
        value: '',
        required: true,
      },
      {
        type: 'text',
        name: 'lastName',
        label: 'last Name',
        value: '',
        required: true,
        minLength: 4
      },
      {
        type: 'radio',
        name: 'country',
        label: 'Country',
        value: 'in',
        required: true,
        options: [
          { key: 'm', label: 'Male' },
          { key: 'f', label: 'Female' }
        ]
      }
    ]
  };

  public fields: any[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'last Name',
      value: '',
      required: true,
      minLength: 4
    },
    {
      type: 'text',
      name: 'address',
      label: 'Address',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'phone',
      label: 'Phone',
      value: '',
      required: true,
    }
  ];

  ngOnInit() {
  }

  constructor() {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    })
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log(update);
      this.fields = JSON.parse(update.fields);
    });
  }

  onUpload(e) {
    console.log(e);

  }

  getFields() {
    return this.formInfo  ;
  }

  ngDistroy() {
    this.unsubcribe();
  }

}
