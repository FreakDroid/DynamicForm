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
      model: 'radio'
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
        name: 'sex',
        label: 'Sex',
        value: 'm',
        required: true,
        options: [
          { key: 'm', label: 'Male' },
          { key: 'f', label: 'Female' }
        ]
      },
      {
        type: 'file',
        name: 'picture',
        label: 'Picture',
        onUpload: this.onUpload.bind(this)
      },
      {
        type: 'dropdown',
        name: 'country',
        label: 'Country',
        value: 'no',
        required: true,
        options: [
          { key: 'no', label: 'Select Country' },
          { key: 'in', label: 'India' },
          { key: 'us', label: 'USA' }
        ]
      },
      {
        type: 'switchToggleField',
        name: 'switch',
        label: 'This is a toggle field',
        value: 'switch',
        required: false,
        subFields: [
          {
            type: 'text',
            name: 'say',
            label: 'Hallo',
            value: '',
            required: false,
          }
        ]
      },
      {
        type: 'switchToggleField',
        name: 'switch2',
        label: 'This is a toggle field',
        value: 'switch',
        required: false,
        subFields: [
          {
            type: 'text',
            name: 'say2',
            label: 'Hallo2',
            value: '',
            required: false,
          }
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
    });
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log(update);
      this.fields = JSON.parse(update.fields);
    });
  }

  onUpload(e) {
    console.log('onUpload');
    console.log(e);

  }

  getFields() {
    return this.formInfo  ;
  }

  ngDistroy() {
    this.unsubcribe();
  }

  onSubmit(event) {
    console.log('actual values');
    console.log(event);
  }

}
