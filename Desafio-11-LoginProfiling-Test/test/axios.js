const axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/posts", {
    params: { name: "Sebas" },
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  })
  .then((response) => console.log(response))
  .catch((e) => console.error(e))
  .finally(() => console.log("END"));



axios.post("https://jsonplaceholder.typicode.com/posts",
    { pepe: "Sebastian" },
    { params: { name: "r2" }, headers: { key: "asdasd" } }
  )
  .then((response) => console.log(response))
  .catch((e) => console.error(e))
  .finally(() => console.log("END"));


  
axios.put("https://jsonplaceholder.typicode.com/posts",
{ pepe: "Sebastian" },
{ params: { name: "r2" }, headers: { key: "asdasd" } }
)
.then((response) => console.log(response))
.catch((e) => console.error(e))
.finally(() => console.log("END"));



axios.delete("https://jsonplaceholder.typicode.com/posts",
    { pepe: "Sebastian" },
    { params: { name: "r2" }, headers: { key: "asdasd" } }
  )
  .then((response) => console.log(response))
  .catch((e) => console.error(e))
  .finally(() => console.log("END"));

