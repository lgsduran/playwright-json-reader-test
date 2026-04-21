import { PersonJson } from './PersonJson';

export class SharedTestContext {
    private person: PersonJson[];

    public constructor(person: PersonJson[]) {
        this.person = person;
    }

    public getPersons() {
        return this.person;
    }
}