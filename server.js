const express= require('express')
const app= express()

app.use(express.static(__dirname+'/dist/index'))
app.listen(process.env.PORT || 3000)