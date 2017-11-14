interface Author {
    name: string;
    surname: string;
}

class Types {
    name: string;
    age: number;
    isMan: boolean;
    aDates: Array<string>;
    aNames: string[];
    something: any;
    author: Author;
    id: number | string; //valen ambos tipos
}

//inferencia de tipos
class AuthorModel implements Author {
    name;
    surname;
}