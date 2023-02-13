const express = require('express')
const indexRouter = require( './router/indexRouter' )
const app = express()
const port = 3030

app.use('/',indexRouter )
app.listen(port, () => console.log(`Example app listening on port ${port}!`))