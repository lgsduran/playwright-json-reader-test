import { PhoneNumbers } from "./phoneNumber";

export interface PersonExcel {
  name: string;
  age: number;
  type: "home" | "work" | "mobile";
  phoneNumber: string;
}