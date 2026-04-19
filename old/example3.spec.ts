import { test } from '../fixtures/dataFixture';
import { Person } from '../modules/PersonJson';

let sharedTestContext: Person[];

test.describe("Learning Playwright", () => {    
  test.beforeAll(async ({ SharedTestContext }) => {
    // atribui à variável global, não cria uma nova
    sharedTestContext = SharedTestContext.getPersons();
  });

  test("Gera testes dinamicamente", async ({  }) => {
    for (const person of sharedTestContext) {
      console.log(`Running test for ${person.name}`);
      console.log(`Age: ${person.age}`);
      for (const phone of person.phoneNumbers) {
        console.log(`Phone Number: ${phone.type} - ${phone.number}`);
      }
    }
  });
});