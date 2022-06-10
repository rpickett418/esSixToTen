

// -----------------------------------------------------------------------------------------------------// 
// ---- Promises ---- //
// let products = [
//     {
//         id: 1,
//         title: 'Yeezy',
//         price: 300
//     }
// ];

// const getProducts = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (products.length >= 1){
//             resolve(products)
//         } else {
//             reject(`Error: it returned that there's np products avaiable`) 
//         }
//     }, 2000)
// })

// getProducts
// .then(products => {
//     console.log(products)
//     return products[0]
// })
// .then((product) => {
//     console.log(product)
//     return product.price 
// })
// .then((price) => {
//     console.log(price)
//     return price 
// })
// .catch((error)=>{
//     console.log(error)
// } ) 

// -------------------------------------   ES7  ------------------------------------------------------------// 
// ---- Includes ---- //

// const array = [1,2,3,4,5,6,];
// console.log(array.includes(3))

// if (array.includes(22)){
//     console.log('we have number 6')
// } else {
//     console.log('number not found')
// }




// -----------------------------------------------------------------------------------------------------// 
// ---- Exponentiation Infix ---- //

// being able to do exponents 

// console.log(Math.pow(2,2));

// console.log(2 ** 2 ) // this how you write exponents




// ---------------------------------------- ES8 ----------------------------------------------------------// 
// ---- Object Values ---- //

// const user = {
//     id: 243,
//     name: 'rah',
//     age: 26,
//    location: 'UT'
// }
// console.table(Object.values(user))







// -----------------------------------------------------------------------------------------------------// 
// ---- Object entries ---- //

// const user = {
//     id: 243,
//     name: 'rah',
//     age: 26,
//    location: 'UT'
// }
// console.table(Object.values(user))

// for( let [key, value] of Object.entries(user)){
//     console.log(`key: ${key} value${value}`);
// }










// -----------------------------------------------------------------------------------------------------// 
// ---- String Padding ---- //

// const letter = 'A'

// console.log(letter.padStart(10, '*'))

// console.log(letter.padEnd(10, '*'))



// -----------------------------------------------------------------------------------------------------// 
// ---- Object.getOwnPropertyDescriptors ---- //


// var product = {
//     title: 'yeezy',
//     price: 360, 
//     set discount(x) {
//         this.d = x;
//     },
//     get discount(){
//         return this.d;
//     }
// }

// var product2 = Object.defineProperty(
//     {}, Object.getOwnPropertyDescriptors(product)
//     );

// console.log(product2)




// -----------------------------------------------------------------------------------------------------// 

//Async Await // 

// const getUser = fname => {
//     let user = {
//         id: 3,
//         fname: 'jane'
//     };
//     return new Promise((resolve, reject) => {
//         console.log('getting user');
//         setTimeout(() => {
//             if(fname == user.fname) {
//                 resolve(user)
//             } else {
//                 reject(` user not found`)
//             }
//         }, 2000);
//     });
// };

// const getTweet = id => {
//     let tweet = {
//         user_id: 3,
//         post: 'Love Star Wars'
//     };
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//             console.log('getting tweet');
//             if(tweet.user_id === id ) {
//                 resolve(tweet)
//             } else {
//                 reject(` no tweet not found`)
//             }
//         }, 2000);
//     });
// };


// const printUserTweet = async (fname) => {
//     try {
//         const user = await getUser(fname)
//         const tweet = await getTweet(user.id)
    
//         return `${user.fname} tweeted ${tweet.post}`
//     } catch(error) {
//         console.log(`Error: ${error}`)
//     }
// }
// printUserTweet('jane')



// ------------------------------------------ ES9 --------------------------------------------------------// 

// Rest Properties for objects 

// let user = {
//     id: 1, 
//     fname: 'Rah',
//     lname: 'Saan',
//     age: 26,
//     phone: '718-294-8978'
// }

// // let {fname, lname, ...others} = user
// // console.log(`${fname} ${lname}`)
// // console.log(others)

// let cars = {
//     title: 'Subari',
//     price: '10000',
//     company: 'Japan'
// }

// const newObject = {
//     ...user, ...cars //this is going to take all of the properties from user and cars put it inside of this new object
// }

// console.log(newObject)

// --------------------------------------------------------------------------------------------------// 
//Asynchronous iteratons - looping over a bunch of promises 

// const steps = [
//     new Promise(resolve => resolve('Wake up')),
//     new Promise(resolve => resolve('Eat breakfast')),
//     new Promise(resolve => resolve('Code '))
// ]

// async function runSteps() {
//     for await (const step of steps){
//         console.log(step)
//     }
// }

// runSteps()



// --------------------------------------------ES10---------------------------------------------------// 
// --- array flat --- // looks at a array and singles them to one array and only flattens 2 arrays only if you pass in a variable

// flat makes multiple arrays shrink into one big array

// const names = [['Joe', 'Billie'], ['jenny', 'kevin']]
// console.log(names.flat(3))






// --------------------------------------------------------------------------------------------------// 

// --- flatmap --- //

// 

// const names = ['Joe is at the store', 'Billy is programming']

// let newArray = names.flatMap((value) => value.split(' '))
// console.log(newArray)





// --------------------------------------------------------------------------------------------------// 

// --- trim start trim end --- // basically removing the whtie space. 

// const user = '         Joe'
// const juice = 'Apple      '

// console.log(user.trimStart())

// console.log(juice.trimEnd())





// --------------------------------------------------------------------------------------------------// 

// --- functon Tostring --- // 

const printName = () => {
    console.log('You')
}

console.log(printName.toString())

//knowing exactly what is inside of the function 






// --------------------------------------------------------------------------------------------------// 