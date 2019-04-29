import {HttpParams} from '@angular/common/http';

export class Utils {
  static createHttpParams(formValues) {
    console.log('formValues', formValues);
    return Object.getOwnPropertyNames(formValues)
      .reduce((p, key) => p.set(key, formValues[key]), new HttpParams());
  }
}
