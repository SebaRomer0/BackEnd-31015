const { Router } = require('express')
const express = require ('express')

const app = express()
const router = Router()

app.get('/user', (req,res) => res.send('user list'))





app.listen(8080)