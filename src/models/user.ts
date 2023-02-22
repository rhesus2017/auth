export interface UserType {
  email: string;
  password: string;
}

export interface UserDataBaseType extends UserType {
  phone: string;
  name: string;
  birth_date: string;
  age: string;
  companion_animal: string;
}

export interface UserSignInInputType extends UserType {
  passwordConfirm: string;
  phone: string;
  name: string;
  year: string;
  month: string;
  companionAnimal: string;
}
