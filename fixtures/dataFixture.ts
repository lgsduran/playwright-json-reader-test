import { test as base } from '@playwright/test';
import { loadJSON, loadExcel } from '../utils/index';
import { SharedTestContext } from '../modules/SharedTestContext';
import { PersonJson, PersonExcel } from '../modules/index';
import { DataPath } from '../constants/dataPath';

export const test = base.extend<{
  personJson: PersonJson[],
  personExcel: PersonExcel[],
  SharedTestContext: SharedTestContext;
}>({
  personJson: async ({ }, use) => {
    const personJson: PersonJson[] = loadJSON(DataPath.JSON);
    // await use(new SharedTestContext(loadJSON('./data/data.json')));
    await use(personJson);
  },
  personExcel: async ({ }, use) => {
    const personExcel: PersonExcel[] = loadExcel(DataPath.EXCEL);
    await use(personExcel);
  }
});

export { expect } from '@playwright/test';