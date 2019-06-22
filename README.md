# FrontendOnboarding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



```javascript
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
        value: [{preview: 'test'}],
        onUpload: this.onUpload.bind(this)
      },
      {
        type: 'link',
        url: 'https://www.google.com',
        label: 'google2'
      }
    ]
  };
```





