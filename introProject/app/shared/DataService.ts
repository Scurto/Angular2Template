import {InMemoryDbService} from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const arrayOfData = [
            {
                id: 1,
                title: "Learn javascript",
                completed: true
            },
            {
                id: 2,
                title: "Learn angular2",
                completed: true
            },
            {
                id: 3,
                title: "Write application",
                completed: false
            }
        ];

        return {jsonArray: arrayOfData};
    }

}

// export const arrayOfData = [
//     {
//         title: "Learn javascript",
//         completed: true
//     },
//     {
//         title: "Learn angular2",
//         completed: true
//     },
//     {
//         title: "Write application",
//         completed: false
//     }
// ];
