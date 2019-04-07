
/**
 * - design (bootstrap and material)
 * - router
 * - http
 * - forms
 * - modules
 * - dividing components
 * - *ngFor, *nfIf
 * - intercomponent communication
 */

const express = require('express')
const app = express()
const fs = require('fs');
app.set('views', './views')
app.set('view engine', 'pug')

const port = 3000

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
            <title> My Name </title>
            </head>
            <body>
                <h1> Your Name is ${req['query']['myNm']}</h1>
            </body>
        </html>

    `)
})
app.get('/my', (req, res) => {
    res.render('my', { title: 'Android', myNm: req['query']['myNm'] })
})
app.get(`/file`, (req, res) => {
    fs.writeFile(`./our.txt`, req['query']['myNm'] , err => {
        if (err) throw err
        console.log(`Data written successfully`)
        res.sendFile(`${__dirname}/our.txt`)
    })
})

app.listen(port, () => console.log(`Express Server Running on port ${port}`))
