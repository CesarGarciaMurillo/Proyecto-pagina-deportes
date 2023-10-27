import express from 'express'
// Fix para __dirname
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Servidor
const app = express()
app.set('port', 4000)
const port = app.get('port')
app.listen(port)
console.log(`Servidor corriendo en puerto ${port}`)

// Configuración
app.use(express.static(__dirname + '/public'))

// Rutas
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/login.html')
})
app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/pages/register.html')
})
