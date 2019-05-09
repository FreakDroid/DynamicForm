export class CreateAccountModel {
  email: string;
  username: string;
  password: string;
  firstName: string;
  middleName: string;
  lastName: string;
  hearAboutFolionet: number;
  investmentExperience: number;
  investmentObjective: number;
  // @ts-ignore
   _token: string;
  // @ts-ignore
   password_confirmation: string;


  constructor(email, username, password, firstName, middleName, lastName, hearAboutFolionet, investmentExperience, investmentObjective
  , _token, password_confirmation) {
    this.email = email;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.hearAboutFolionet = hearAboutFolionet;
    this.investmentExperience = investmentExperience;
    this.investmentObjective = investmentObjective;
    // @ts-ignore
    this._token = _token;
    // @ts-ignore
    this.password_confirmation = password_confirmation;
  }
}
