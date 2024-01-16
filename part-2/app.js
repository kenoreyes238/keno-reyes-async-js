// //using fetch API
// const fetchPromise = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//   );
  
//   console.log(fetchPromise);
  
//   fetchPromise.then((response) => {
//     console.log(`Received response: ${response.status}`);
//   });
  
//   console.log("Started request…");

//   //chaining promises
//   const fetchPromise = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//   );
  
//   fetchPromise.then((response) => {
//     const jsonPromise = response.json();
//     jsonPromise.then((data) => {
//       console.log(data[0].name);
//     });
//   });
  
//   const fetchPromise = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//   );
  
//   fetchPromise
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data[0].name);
//     });
  
// //checking status
// const fetchPromise = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//   );
  
//   fetchPromise
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data[0].name);
//     });
  
// //catching errors
// const fetchPromise = fetch(
//     "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//   );
  
//   fetchPromise
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data[0].name);
//     })
//     .catch((error) => {
//       console.error(`Could not get products: ${error}`);
//     });
  
// //multiple promises
// const fetchPromise1 = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//   );
//   const fetchPromise2 = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
//   );
//   const fetchPromise3 = fetch(
//     "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
//   );
  
//   Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//     .then((responses) => {
//       for (const response of responses) {
//         console.log(`${response.url}: ${response.status}`);
//       }
//     })
//     .catch((error) => {
//       console.error(`Failed to fetch: ${error}`);
//     });

//     //multiple promises w/ broken url
//     const fetchPromise1 = fetch(
//         "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//       );
//       const fetchPromise2 = fetch(
//         "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
//       );
//       const fetchPromise3 = fetch(
//         "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
//       );
      
//       Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//         .then((responses) => {
//           for (const response of responses) {
//             console.log(`${response.url}: ${response.status}`);
//           }
//         })
//         .catch((error) => {
//           console.error(`Failed to fetch: ${error}`);
//         });
      
//         //async
//         async function fetchProducts() {
//             try {
//               // after this line, our function will wait for the `fetch()` call to be settled
//               // the `fetch()` call will either return a Response or throw an error
//               const response = await fetch(
//                 "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//               );
//               if (!response.ok) {
//                 throw new Error(`HTTP error: ${response.status}`);
//               }
//               // after this line, our function will wait for the `response.json()` call to be settled
//               // the `response.json()` call will either return the parsed JSON object or throw an error
//               const data = await response.json();
//               console.log(data[0].name);
//             } catch (error) {
//               console.error(`Could not get products: ${error}`);
//             }
//           }
          
//           fetchProducts();

//           async function fetchProducts() {
//             try {
//               const response = await fetch(
//                 "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//               );
//               if (!response.ok) {
//                 throw new Error(`HTTP error: ${response.status}`);
//               }
//               const data = await response.json();
//               return data;
//             } catch (error) {
//               console.error(`Could not get products: ${error}`);
//             }
//           }
          
//           const promise = fetchProducts();
//           promise.then((data) => console.log(data[0].name));
// //baked beans

// try {
//     // using await outside an async function is only allowed in a module
//     const response = await fetch(
//       "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data[0].name);
//   } catch (error) {
//     console.error(`Could not get products: ${error}`);
//   }
  
//PRACTICE CODE
//USING fetch() API
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response => {
    console.log(`received: ${response.status}`);
}));

console.log('started request')

//chaining 
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
        console.log(data[0].name);
    });
});

//catching errors
const fetchPromise = fetch (
    "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
    .then((response) => {
        if(!response.ok) {
            throw new error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data[0].name);
    })
    .catch((error) => {
        console.error(`couldn't get products: ${error}`);
    })

//combining multiple promises
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise, fetchPromise2])

function example() {
    console.log("example");
}
    .then((responses) => {
        console.log(`${response.url}: ${response.status}`);
    });

    .try((responses) => {
        example();
    })

    .catch((error) => {
        console.log(`failed to fetch: ${error}`);
    });


//async function
async function fetchProducts() {
    try {
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );
        if(!response.ok) {
            throw new error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data[0]);
    } catch (error) {
        console.error(`couldn't get products: ${error}`);
    }
}