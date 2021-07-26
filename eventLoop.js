// 1. Basic Events
// 2. Job Queue
// 3. Message Queue

// (async () => {
//   try {

//     await new Promise((resolve, reject) => resolve(5))
//   } catch (e) {
//     console.error(e)
//   }


// })()


const start = () => {

  console.log(7)  // Basic

  setTimeout(() => {
    console.log(8)  // Message Queue
  }, 10);

  setTimeout(() => {
    console.log(1)  // Message Queue
  }, 0);

  new Promise((resolve, reject) => {
    return resolve(5)
  }).then((r) => console.log(r)).catch(e => console.error(e)) // Job Queue

  new Promise((resolve, reject) => {
    return resolve(2)
  }).then((r) => console.log(r)).catch(e => console.error(e)) // Job Queue

  new Promise((resolve, reject) => {
    return resolve(4)
  }).then((r) => console.log(r)).catch(e => console.error(e)) // Job Queue

  console.log(3)  // Basic
  console.log(6)  // Basic


}

start()