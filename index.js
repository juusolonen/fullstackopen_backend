const express = require('express')
const app = express()
var morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

let persons = []

const resp = `
            Phonebook has info for ${persons.length} people 
            </br></br>
            ${new Date()}
            `
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
    res.send(resp)
})

app.get('/api/persons/:id', (req, res, next) => {
    if(persons[req.params.id]) {
        return res.json(persons[req.params.id])
    } else {
        next(error)
    }

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


    let nameExists = persons.find(person => person.name === req.body.name)

    if(!req.body.name) {
        next("new person must have a name")
    } else if (!req.body.number) {
        next("new person must have a number")
    } else if (nameExists) {
        next("person already exists")
    } else {
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
    }
})

const errorHandler = (err, req, res, next) => {
      

    if(err){
        if(err.name === 'CastError'){
            return res.status(400).send({error: 'Check the id'})
        }else {
            return res.status(400).json(err)
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