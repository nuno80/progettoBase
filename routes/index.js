
//routes o controllers sono la stessa cosa
const express = require('express')
const router = express.Router()


//renderizziamo il file index della cartella views in modo da visualizzarre tutto a schermo
router.get('/', (req, res) => {
  res.render('index')
  //res.send('Hello Armando!')
})

//esportiamo il file in modo da poter usare la variabile router creata sopra
module.exports = router