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
      cardMessage: '',
      button: { showButton: true }
    },
    fields: [
      {
        type: 'text',
        name: 'ngbaires',
        label: 'ngBaires',
        value: 'Daddy Yankee',
        required: true,
        placeholder: 'ngBaires'
      },
      {
        type: 'file',
        name: 'picture',
        label: 'Picture',
        value: [{preview: 'data:image/jpeg;base64,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'}],
        onUpload: this.onUpload.bind(this)
      }
    ]
  };


  /*
  *       {
        type: 'radioSubmit',
        name: 'sex',
        label: 'Sex',
        value: 'm',
        required: true,
        options: [
          {key: 'm', label: 'Male'},
          {key: 'f', label: 'Female'}
        ]
      },
  * */
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
    console.log(event);
  }

}
