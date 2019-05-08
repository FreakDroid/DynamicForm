import {HttpParams} from '@angular/common/http';

export class Utils {
  static createHttpParams(formValues) {
    console.log('formValues', formValues);
    return Object.getOwnPropertyNames(formValues)
      .reduce((p, key) => p.set(key, formValues[key]), new HttpParams());
  }

  static transformErrorMessage(error) {
    console.log('message form ', error);
    let message;
    for (let key in error) {
      let value = error[key][0];
      message = value;
      break;
    }
    return message;
  }
}
