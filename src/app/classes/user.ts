export class User {
  private _id !: String; //propiedad no sera undefined o null
  private _email !: string;
  private _password !: string;

  // Constructor vacío
  constructor() {
    this._id= crypto.randomUUID();
  }

  // Getter y Setter para email
  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
    this._email = email;
  }

  // Getter y Setter para password
  public get password(): string {
    return this._password;
  }

  public set password(password: string) {
    this._password = password;
  }
}
