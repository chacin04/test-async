/*
- Mediante la libreria: axios
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: "response" global de la petición 
*/

const { default: axios } = require("axios");

async function fnTest() {
  const url="https://jsonplaceholder.typicode.com/posts"
  let response = await axios.post(url,{"id":101})
  return response;
}

module.exports = fnTest;