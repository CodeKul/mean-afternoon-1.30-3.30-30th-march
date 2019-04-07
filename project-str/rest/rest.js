var express = require('express')
var bodyParser = require('body-parser')

var app = express()
let port = 3000
app.use(bodyParser.json())

app.post(`/my`, (req, res) => {
    let body = req.body
    body.createdat = new Date()
    res.json(body)
})

app.get(`/account`, (req, res) => {
    let ac = getAccount()
    res.json(ac)
})

function getAccount() {
    return {
        no : '989856',
        bal : 8989,
        lastupdate : new Date(),
        nm : 'android'
    }
}
app.listen(port, () => console.log(`Express Server Running on port ${port}`))

