const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const multer = require('multer')

app.use(express.static('.'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const storage = multer.diskStorage({
    destination: function(req, file, res) {
        res(null, './upload')
    },
    filename: function(req, file, res) {
        res(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('file')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end('Some error ocurred...')
        } 

        res.end('Success')      
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        result: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executing...'))