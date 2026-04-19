// specs/person.spec.ts
import { test } from '../fixtures/dataFixture';

test.describe("Learning Playwright", () => {
  test('generate tests per person', async ({ persons }) => {
    for (const person of persons) {
      //test(`Running test for ${person.name}`, async () => {
        console.log(`Age: ${person.name}`);
        console.log(`Age: ${person.age}`);
        for (const phone of person.phoneNumbers) {
          console.log(`Phone Number: ${phone.type} - ${phone.number}`);
        }
        //expect(person.age).toBeGreaterThan(0); // example assertion
      //});
    }
  });
});
