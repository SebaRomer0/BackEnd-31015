const fs = require("fs")
const {schema,normalize, denormalize} = require('normalizr')
const util = require('util')


const autorSchema = new schema.Entity('author',{}, {idAttribute: 'email'})


fs.readFile('./normalizar/dataNormalizada.json','utf-8',(err,data)=>{

    let json = JSON.parse(data)
    const dataDenormalized = denormalize(json.result, [autorSchema],json.entities)

    fs.writeFile('./normalizar/dataDesNormalizada.json',JSON.stringify(dataDenormalized),e=>console.log(e))
    console.log(util.inspect(dataDenormalized, false, 12, true));
})
