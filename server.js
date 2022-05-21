//parte 1 : settiamo il file server

//carichiamo il file .env per la connessione solo se non ci sono errori e lo colleghiamo alla variabile in linea 33:
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

//richiamiamo tutti i moduli necessari al progetto
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

//richiamiamo il file index della cartella routes
const indexRouter = require('./routes/index')

//settiamo il view engine su ejs
app.set('view engine', 'ejs')

//settiamo il percorso di tutti i file necessari a visualizzare il progetto
app.set('views', __dirname + '/views')

//settiamo il percorso di tutti i file necessari a visualizzare il layout delle pag.(header, footer...)
app.set('layout', 'layouts/layout')

//eseguiamo expressLayouts che ci permette di caricare tutti i file di index.js nella cartella views nel file layots.ejs
app.use(expressLayouts)

//settiamo il percorso di tutti gli static files, che saranno accessibili a tutti gli utenti. Images...
app.use(express.static('public'))

//settiamo la nostra connessione con mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))
//per avviare la connessione devo settare il file .env e scrivere al suo interno:
//DATABASE_URL=mongodb://localhost/mybrary dove mybrary è il nome del db 

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)