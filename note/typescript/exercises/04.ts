import chalk from 'chalk';

/*

Intro:

    Time to filter the data! In order to be flexible
    we filter users using a number of criteria and
    return only those matching all of the criteria.
    We don't need Admins yet, we only filter Users.

Exercise:

    Without duplicating type structures, modify
    filterUsers function definition so that we can
    pass only those criteria which are needed,
    and not the whole User information as it is
    required now according to typing.

Higher difficulty bonus exercise:

    Exclude "type" from filter criterias.

Run:

    npm run 4

    - OR -

    yarn -s 4

*/

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}



interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

/************ answer1 *************/ 
type Criteria =  {
    [k in keyof User]?: User[k]
}

const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    {
        type: 'admin',
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        type: 'user',
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        type: 'admin',
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    },
    {
        type: 'user',
        name: 'Wilson',
        age: 23,
        occupation: 'Ball'
    },
    {
        type: 'admin',
        name: 'Agent Smith',
        age: 23,
        role: 'Administrator'
    }
];

const isAdmin = (person: Person): person is Admin => person.type === 'admin';
const isUser = (person: Person): person is User => person.type === 'user';

function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${chalk.green(person.name)}, ${person.age}, ${additionalInformation}`);
}

// function filterUsers(persons: Person[], criteria: Criteria): User[] {

/************ answer2 *************/ 
// 使用 Partial语法糖 获取User的可选子集
function filterUsers(persons: Person[], criteria: Partial<User>): User[] {
    return persons.filter(isUser).filter((user) => {
        let criteriaKeys = Object.keys(criteria) as (keyof User)[];
        return criteriaKeys.every((fieldName) => {
            return user[fieldName] === criteria[fieldName];
        });
    });
}

console.log(chalk.yellow('Users of age 23:'));

filterUsers(
    persons,
    {
        age: 23
    }
).forEach(logPerson);



/**
 * 
 */