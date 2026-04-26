import * as XLSX from 'xlsx';
import * as fs from 'fs';
import { PersonExcel } from '../modules/index';

export const loadExcel = (filename: string): PersonExcel[] => {
  const fileBuffer = fs.readFileSync(filename);
  const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName!]; 
  return worksheet ? XLSX.utils.sheet_to_json<PersonExcel>(worksheet) : [];
};