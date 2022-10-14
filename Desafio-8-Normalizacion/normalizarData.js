const fs = require('fs')
const {schema,normalize} = require('normalizr')


const autorSchema = new schema.Entity('autor',{}, {idAttribute: 'email'})


fs.readFile('./dbFormChat.json','utf-8',(err,data)=>{
    if (err) {
        console.log(err);
        return
    }
    let json = JSON.parse(data)

    const dataNormalized = normalize(json, [autorSchema])

    fs.writeFile('./normalizar/dataNormalizada.json',JSON.stringify(dataNormalized),e=>console.log(e))
    console.log(json)
})

