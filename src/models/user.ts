export interface UserType {
  email: string;
  password: string;
}

export interface UserDataBaseType {
  email: string;
  password: string;
  phone: string;
  name: string;
  birth_date: string;
  age?: string;
  companion_animal: string;
}

export interface UserLoginInfoType {
  email: string;
  password: string;
  phone: string;
  name: string;
  year: number;
  month: string;
  companionAnimal: string;
}
