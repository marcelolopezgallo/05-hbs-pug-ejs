const express = require('express')
const exhbs = require('express-handlebars')
const app = express()

const indexRouter = require('./routes/index')
const productsRouter = require('./routes/products')

app.engine('hbs', exhbs({
    extname: ".hbs",
    defaultLayout: "layout.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials"
}))
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/products', productsRouter)

const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))