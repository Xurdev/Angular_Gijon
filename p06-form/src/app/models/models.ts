export interface User {
    name: string;
    surname: string;
    phoneNumber: string;
}

export interface Printer {
    code: string | number;
    description: string;
}

export interface Department {
    code: string | number;
    description: string;
}

export class Printing {

    constructor (
        public user: User,
        public printer: Printer,
        public isColour: boolean,
        public isLight: boolean,
        public department: Department) {}


}
