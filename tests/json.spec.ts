import { test } from '../fixtures/dataFixture';

test.describe("Learning Playwright", () => {
  test('Running test for exceln', async ({ personJson }) => {
    for (const person of personJson) {
      console.log(`Name: ${person.name}`);
      console.log(`Age: ${person.age}`);
      for (const phone of person.phoneNumbers) {
        console.log(`Phone: ${phone.type} - ${phone.number}`);
      }
    }
  });
});
