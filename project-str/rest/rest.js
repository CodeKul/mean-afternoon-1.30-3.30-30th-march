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

app.post('/invoice', (req, res) => {
    let invDt = req.body
    let htmlInvoice = `
    <html>
        <head>
            <title> My Name </title>
        </head>
        <body>
             <h1> Customer Name Name is ${invDt['custNm']}</h1>
        </body>
    </html>
    `
    fs.writeFile('./inv.html', htmlInvoice, err =>{
        if(err) {
               //send res 
        }
        //covert html to pdf and send json response
    })
})

function getAccount() {
    return {
        no: '989856',
        bal: 8989,
        lastupdate: new Date(),
        nm: 'android'
    }
}
app.listen(port, () => console.log(`Express Server Running on port ${port}`))

