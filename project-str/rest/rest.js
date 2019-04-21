var express = require('express')
var bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');

var app = express()
let port = 3000
let parserUrlEncoded = bodyParser.urlencoded({ extended: false })
let parserJson = bodyParser.json()

app.use(parserUrlEncoded)
app.use(parserJson)
app.use(fileUpload())

app.post(`/upload`, (req, res) => {
    if (Object.keys(req.files).length == 0) {
        return res.status(400).json({ status: 'error', cause: `Error caused beacause there is no file uploaded ${Object.keys(req.files).length}` })
    }

    let uploadedFile = req.files.myFile;
    uploadedFile.mv(`./uploaded-files/${req.files.myFile.name}`, function (err) {
        if (err)
            return res.status(500).send(err);
        res.json({status : 'File Uploaded Successfully'});
    });
})
app.post(`/my`, (req, res) => {
    let body = req.body
    body.createdat = new Date()
    res.json(body)
})

app.get(`/account`, parserJson, (req, res) => {
    let ac = getAccount()
    res.json(ac)
})

app.post(`/accountForm`, parserUrlEncoded, (req, res) => {
    let ac = {}
    ac.acNm = req.body.acNm
    ac.acNum = req.body.acNum
    res.json(ac)
})

app.post('/invoice', parserJson, (req, res) => {
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
    fs.writeFile('./inv.html', htmlInvoice, err => {
        if (err) {
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

