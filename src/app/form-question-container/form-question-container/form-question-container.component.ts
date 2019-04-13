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
        type: 'text',
        name: 'ngbaires',
        label: 'ngBaires',
        value: '',
        required: true,
        placeholder: 'ngBaires'
      },
      {
        type: 'text',
        name: 'firstName',
        label: 'First Name',
        value: '',
        required: true,
        placeholder: 'Wilfredo'
      },
      {
        type: 'text',
        name: 'skn',
        label: 'SKN',
        value: '',
        required: false,
        pattern: /^(\d{3})-(\d{2})-(\d{4})$/
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
          {key: 'm', label: 'Male'},
          {key: 'f', label: 'Female'}
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
          {key: 'no', label: 'Select Country'},
          {key: 'in', label: 'India'},
          {key: 'us', label: 'USA'}
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
        type: 'switchToggleFieldWithBox',
        name: 'switchToggleFieldWithBox',
        label: 'This is a toggle field With Box',
        value: 'switch2',
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
      },
      {
        type: 'radioButtonToggle',
        name: 'rbt',
        label: 'Select please whether Yes or No',
        value: '',
        required: false,
        options: [
          {key: '1', label: 'Yes'},
          {key: '2', label: 'No'}
        ],
        subFields: [
          {
            group: {
              value: 1,
              controls: [
                {
                  type: 'text',
                  name: 'ssn',
                  label: 'SSN/ITIN',
                  value: null,
                  required: true
                },
                {
                  type: 'text',
                  name: 'txtname',
                  label: 'Matthew',
                  value: null,
                  required: false
                }
              ]
            }
          },
          {
            group: {
              value: 2,
              controls: [
                {
                  type: 'text',
                  name: 'ssn2',
                  label: 'Type Your name',
                  value: null,
                  required: false
                }
              ]
            }
          }
        ]
      },
      {
        type: 'radioSubmit',
        name: 'ok',
        label: 'Are you Ok',
        value: '',
        required: false,
        options: [
          {key: 'y', label: 'Yes'},
          {key: 'n', label: 'No'}
        ]
      },
      {
        type: 'textboxIncreaseDecrease',
        name: 'numberDependents',
        label: 'Number of dependents',
        value: '',
        required: false,
        minLength: 1,
        maxLength: 5
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
