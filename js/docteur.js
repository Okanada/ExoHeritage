import { personne } from "./personne.js";


export class Doctor extends personne {
    constructor(name, age, sex, profession) {
        super(name, age, sex, profession);
    }
    operer() { }
}