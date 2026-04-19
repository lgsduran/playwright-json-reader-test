import { PersonJson } from "../modules/PersonJson.js";
import * as fs from "fs";

export const loadJSON = (filename: string): PersonJson[] => {
  const data = fs.readFileSync(filename, "utf-8");
  const items: PersonJson[] = JSON.parse(data);

  // Garante que o retorno é um array
  if (!Array.isArray(items)) {
    throw new Error("O JSON não contém uma lista de pessoas (Person[]).");
  }

  return items;
};
