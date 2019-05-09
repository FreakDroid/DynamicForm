import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { CreateAccountModel } from '../model/createAccount.model';

@Injectable({
  providedIn: 'root'
})
export class MemoryDataService {

  createAccountSubject: BehaviorSubject<CreateAccountModel> = new BehaviorSubject<CreateAccountModel>(null);
  createAccountState: Observable<CreateAccountModel>;

  constructor() {
  }

  saveCreateAccountState(createAccount: CreateAccountModel): void {
    this.createAccountSubject.next(createAccount);
  }

  get getCreateAccountState(): CreateAccountModel {
    console.log(this.createAccountSubject.getValue());
    return this.createAccountSubject.getValue();
  }
}
