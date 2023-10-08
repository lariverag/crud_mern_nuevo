const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node.js. Corriendo')
})


//Configuracion del server básico.

app.listen(5000, function(){
    console.log('El servidor NODE 2está corriendo correctamente')
})

