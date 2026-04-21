import { Person, PhoneNumber } from "./index";

export interface PersonJson {
  name: Person["name"];
  age: Person["age"];
  phoneNumbers: PhoneNumber[];
}