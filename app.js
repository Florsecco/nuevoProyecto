const express= require('express')
const app= express()
const PORT= 3005
const rutaMain=require('./routes/main.js')
const rutaDetalle=require('./routes/detalleProd.js')
app.set('view engine', 'ejs')

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`);
})

app.use(express.static('public'))

app.use('/', rutaMain)
app.use('/detalle', rutaDetalle)