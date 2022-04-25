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

app.get('/explorersInNode', (req, res) => {
    const explorer = { name: "explorer", msg: "hello" }
    res.send(explorer)
})

// Query Parms: Recibir parámetros por la url 
// http://localhost:3000/explorers/carlo
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})

// con esto iniciamos  la app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})