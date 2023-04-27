/*
- Mediante la libreria: axios
- Hacer una petición de tipo: PATCH
- Endpoint: https://jsonplaceholder.typicode.com/posts/1
- Return: "response" global de la petición 
*/
const axios = require ('axios')

async function fnTest() {
  const url = 'https://jsonplaceholder.typicode.com/posts/1'
  let response = await axios.patch(url)
  return response;
}

module.exports = fnTest;