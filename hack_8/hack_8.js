const fetch = require('cross-fetch');

/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: GET
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: el total del "response"
*/

async function fnTest() {
  const url= 'https://jsonplaceholder.typicode.com/posts'
  let llamado = await fetch(url,{method:"GET"})
  let response = await llamado.json()
  
  return response.length
}

module.exports = fnTest;