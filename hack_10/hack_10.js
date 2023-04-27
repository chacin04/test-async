/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: PUT
- Endpoint: https://jsonplaceholder.typicode.com/posts/id
- Return: "data" 
- Contenido del return data:
{
   "id": 50
}
 NOTA: se envia el "id" por parámetro con valor 50
*/
const fetch = require('cross-fetch');

async function fnTest(id) {
    async function valor(id){
      const url = `https://jsonplaceholder.typicode.com/posts/${id}`
      let response = await fetch(url, {method:'PUT'})

      return response
    }
  return valor(50)
}

module.exports = fnTest;