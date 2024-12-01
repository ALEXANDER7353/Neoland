const express = require('express')


const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
    res.status(400)
    res.send('MI GET APP CON EXPRESS')
})

app.post('/', (req, res)=>{
    res.send('MI POST APP CON EXPRESS')
})

const PORT = 3000

app.listen(PORT, ()=>{
    console.log('me he iniciado correctamente')
})
