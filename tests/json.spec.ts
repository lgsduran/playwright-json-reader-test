import { test } from '../fixtures/dataFixture';

test.describe("Learning Playwright", () => {
  test('generate tests per person', async ({ persons }) => {
    for (const person of persons) {
      console.log(`Name: ${person.name}`);
      console.log(`Age: ${person.age}`);
      for (const phone of person.phoneNumbers) {
        console.log(`Phone: ${phone.type} - ${phone.number}`);
      }
    }
  });
});
