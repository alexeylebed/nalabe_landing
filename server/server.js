const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
    res.sendFile("/home/ubuntu/nalabe_landing/index.html")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})