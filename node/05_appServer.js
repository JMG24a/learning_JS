import http from 'node:http'
import { findAvailablePort } from './06_freePort.js'

const desiredPort = process.env.PORT ?? 5500

const server = http.createServer((req, res) => {
  res.end('hola mundo')
})

findAvailablePort(desiredPort)
  .then((port) => {
    server.listen(port, () => {
      console.log(`server listening on port ${port}`)
    })
  })
  .catch((error) => {
    console.log('Error: ', error)
  })
