
// http GET
// HTTP Standard Library NodeJS
// http://www.myserver.com/http-excercise
// http://www.myserver.com/https-excercise
// http://www.myserver.com/https-excercise-2
// { "data": "age=67, age=16, age=27, age=5, age=10, age=30, ..." }  n
//  4  --> Correct Answer
// async await axios request
const http = require('http');
const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/todos'
};

const req = http.get(options, (res) => {
  let body = []
  res.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    //const response = Buffer.concat(body).toString()
    const response = JSON.parse('{ "data": "age=27, age=5, age=10, age=30, age=39" }').data.split(", ").map(a => +a.substring(4)).filter(a => a > 15).length
    console.log(response)
  })
})

req.on('error', (e) => {
  console.error('ERROR ' + e.message)
})
