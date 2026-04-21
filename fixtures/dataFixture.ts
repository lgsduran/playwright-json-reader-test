import { test as base } from '@playwright/test';
import { loadJSON } from '../utils/loadJSON';
import { SharedTestContext } from '../modules/SharedTestContext';
import { PersonJson } from '../modules/PersonJson';

export const test = base.extend<{
  persons: PersonJson[],
  SharedTestContext: SharedTestContext;
}>({
  persons: async ({ }, use) => {
    const persons: PersonJson[] = loadJSON('./data/data.json')
    // await use(new SharedTestContext(loadJSON('./data/data.json')));
    await use(persons);
  },
});

export { expect } from '@playwright/test';