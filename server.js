const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

app = express()
app.use(serveStatic(__dirname + "/dist"))
var port = process.env.PORT || 3000
app.listen(port)
console.log('server started '+ port)
