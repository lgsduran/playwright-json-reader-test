import { test } from '../fixtures/dataFixture';

test.describe("Learning Playwright", () => {
    test(`Running test for excel`, async ({ personsExcel }) => {
        for (const person of personsExcel) {
            console.log(`Name: ${person.name}`);
            console.log(`Age: ${person.age}`);
            console.log(`Phone type: ${person.type}`);
            console.log(`Phone number: ${person.phoneNumber}`);
            console.log("-----------------------------");
        }
    });
});