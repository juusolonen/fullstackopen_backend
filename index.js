const express = require('express')
const app = express()
var morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

let persons = []


morgan.token('postdata', function (req, res) { return JSON.stringify(req.body) })

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(morgan(':method :url :status :response-time ms - :postdata'))

app.get('/api/persons', (req, res) => {
    Person.find({})
        .then(result => {
            persons = result
            res.json(persons)
        })
})

app.get('/info', (req, res) => {
    Person.find({})
    .then(result => {
        persons = result
        res.send(`
        Phonebook has info for ${persons.length} people 
        </br></br>
        ${new Date()}
        `)
    })
})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => next(error))

    })




app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end()
        })
        .catch(error => {
            next(error)
        })

})

app.put('/api/persons/:id', (req, res, next) => {
    const person = {
        name: req.body.name,
        number: req.body.number
    }

    Person.findByIdAndUpdate(req.params.id, person, {new: true})
        .then(updatedPerson => {
            res.status(200).json(updatedPerson)
        })
        .catch(err => next(err))
})

app.post('/api/persons', (req, res, next) => {


        let newPerson = new Person({
                        name: req.body.name,
                        number: req.body.number
                       // id: Math.ceil(Math.random() * 100)
                        })
        
        newPerson.save()
            .then(result => {
               persons = persons.concat(result)
               res.json(persons)
            })
            .catch(err => next(err))
    
})

const errorHandler = (err, req, res, next) => {
      

    if(err){
        if(err.name === 'CastError'){
            return res.status(400).send({error: 'Check the id'})
        }else {
            if(err.name === 'ValidationError') {
                return res.status(400).json(err.message)
            } else {
                return res.status(400).json(err)
            }

        }

    } else {
        res.status(404).end()
    }



}

app.use(errorHandler)

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Open in port ${port}`)
})