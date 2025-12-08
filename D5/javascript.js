// console.log("First");
// console.log("Second");
// console.log("Third");

// console.log("Start");
// setTimeout(() => {
//     console.log("This run after 5 seconds");
// }, 5000);
// console.log("End");

// setTimeout(() => {
//     console.log("Made Tea");
//     setTimeout(() => {
//         console.log("Toasted Bread");
//         setTimeout(() => {
//             console.log("Fried Egg");
//             setTimeout(() => {
//                 console.log("Served Breakfast");
//             }, 4000);
//         }, 3000);
//     }, 2000);
// }, 1000);

// // Promise Chain
// // Fullfilled - .then()
// // Rejected - .catch()

// let icecreamPromise = new Promise((resolve, reject) => {
//     let icecreamReady = false;
//     if(icecreamReady) {
//         resolve("Ice cream is ready");
//     }
//     else {
//         reject("No ice cream today");
//     }
// });
// icecreamPromise.then((message) => {
//     console.log("Yay! " + message);
// })
// .catch((message) => {
//     console.log("Oops! " + message);
// })

// let icecreamPromise = new Promise((resolve, reject) => {
//     let icecreamReady = false;
//     if (icecreamReady) {
//         resolve("Ice cream is ready");
//     } else {
//         reject("No ice cream today");
//     }
// });
// async function getIceCream() {
//     try {
//         let message = await icecreamPromise;
//         console.log(message);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// getIceCream();

// // Array Destructuring
// const [a, b, c] = [10, 20, 30];
// console.log(a);
// console.log(b);
// console.log(c);

// const [first, second, ...rest] = [1, 2, 3, 4, 5, 6];
// console.log(first);
// console.log(second);
// console.log(rest);

// const user = {name: "Alice", age: 18};
// const {name, age} = user;
// console.log(name);
// console.log(age);
// function greet(user) {
//     console.log(`Hello ${name}, you're ${age} years old.`);    
// }
// greet(user);