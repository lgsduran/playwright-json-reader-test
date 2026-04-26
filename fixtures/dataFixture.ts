import { test as base } from '@playwright/test';
import { loadJSON, loadExcel } from '../utils/index';
import { SharedTestContext } from '../modules/SharedTestContext';
import { PersonJson, PersonExcel } from '../modules/index';
import { DataPath } from '../constants/dataPath';

export const test = base.extend<{
  personsJson: PersonJson[],
  personsExcel: PersonExcel[],
  SharedTestContext: SharedTestContext;
}>({
  personsJson: async ({ }, use) => {
    const persons: PersonJson[] = loadJSON(DataPath.JSON);
    // await use(new SharedTestContext(loadJSON('./data/data.json')));
    await use(persons);
  },
  personsExcel: async ({ }, use) => {
    const personsExcel: PersonExcel[] = loadExcel(DataPath.EXCEL);
    await use(personsExcel);
  }
});

export { expect } from '@playwright/test';