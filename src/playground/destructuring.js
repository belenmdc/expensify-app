// const person = {
//     name: 'Belén',
//     age: 28,
//     location: {
//         city: 'London',
//         temp: 18
//     }
// };

// const name = person.name;
// const age = person.age;

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


// const address = ['36B Witherington Road', 'London', 'United Kingdom', 'N5 1PP'];
// const [, city, country] = address;

// console.log(`You are in ${city}, ${country}`);



const item = ['Coffee', '£2.00', '£2.50', '£3.00'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);