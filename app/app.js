// importando express
const express = require('express')

// app express
const app = express()

// definición de puerto para host
const port = 3000

// path inicial, responderá a la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hello world')
})

// path launchX respondiendo texto
app.get('/launchx', (req, res) => {
    res.send('Bienvenido a LaunchX')
})

// con esto iniciamos  la app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})