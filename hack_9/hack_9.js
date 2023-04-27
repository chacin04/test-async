/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: el total del "response"
*/
const fetch = require('cross-fetch');

async function fnTest() {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  let llamado = await fetch(url,{method:'POST'})
  let response = await llamado.json() 
  return response
}

module.exports = fnTest;