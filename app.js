require('dotenv').config()
const express = require('express')


const app = express()
const port = process.env.PORT
const version = process.env.VERSION


app.get('/', (req, res) => {
    res.json({
        'Powered by': 'https://SamanSoltaniPoor.com',
        'made with love for': 'You',
        'ok': true
    })
})


app.listen(port, () => {
    console.log(`app version : ${version}`)
    console.log(`app port : ${port}`)
})
