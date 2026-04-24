import { test } from '../fixtures/dataFixture';
import { loadWorkBook } from '../utils/loadWorkBook';

test.describe("Learning Playwright", () => {
    test(`Running test for excel`, async ({ }) => {
        const workBook = loadWorkBook('./data/data.xlsx');
        for (const line of workBook) {
            console.log(`Name: ${line.name}`);
            console.log(`Age: ${line.age}`);
            console.log(`Phone type: ${line.type}`);
            console.log(`Phone number: ${line.phoneNumber}`);
            console.log("-----------------------------");
        }
    });
});