import { Person, PhoneNumber } from "./index";

export interface PersonExcel {
  name: Person["name"];
  age: Person["age"]  ;
  type: PhoneNumber["type"];
  phoneNumber: PhoneNumber["number"];
}