const express = require('express')
const path = require('path')
const app = express()
const port = 5000

app.use(express.json({ extended: true }))

app.use('/api', require('./routes/peoples.routes'))
app.use('/api', require('./routes/user.router'))

app.use('/', express.static(path.join(__dirname, 'client', 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})