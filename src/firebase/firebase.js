import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };
// database.ref('expenses')
//     .on('child_removed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .on('child_changed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .on('child_added', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         })

//         console.log(expenses);
// });
// database.ref('expenses').push({
//     description: 'Cake',
//     note: 'mmmmm',
//     amount: 8100,
//     createdAt: 983203423432
// })

// database.ref('notes/-LLdCnKLzCctsgygqv7_').remove();

// const firebaseNotes = {
//     notes: {

//     }
// };

// database.ref().once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })

// const onValueChange = (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// };

// const onValueChange = database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(val);
// }, (e) => {
//     console.log('Error fetching data', e);
// });

// setTimeout(() => {
//   database.ref("age").set(20);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(30);
// }, 10500);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a, ${val.job.title} at ${val.job.company}`);
// });

// setTimeout(() => {
//   database.ref('job/company').set('Apple');
// }, 3500);

// database.ref().set({
//     name: 'Belén',
//     age: 28,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'London',
//         country: 'United Kingdom'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((error) => {
//     console.log(error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });//
// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     })
//     .catch((e) => {
//         console.log('There was an error', e);
//     });
