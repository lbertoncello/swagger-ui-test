const express = require('express')
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()

const app = express()
const port = 3000;

app.use(express.static(pathToSwaggerUi))
app.listen(port, () => { console.log(`Access from your browser:\nhttp://localhost:${port}`) })