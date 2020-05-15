const express = require('express')
const app = express()

let persons = [
    {
        name: "Arto Hellas",
        number: "050-1234567",
        id: 1
    },
    {
        name: "Joku Testinen",
        number: "050-7654321",
        id: 2
    },
    {
        name: "Chuck Norris",
        number: "1",
        id: 3
    }
]

const resp = `
            Phonebook has info for ${persons.length} people 
            </br></br>
            ${new Date()}
            `


app.use(express.json())

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/info', (req, res) => {
    res.send(resp)
})

app.get('/api/persons/:id', (req, res) => {
    if(persons[req.params.id]) {
        return res.json(persons[req.params.id])
    } else {
        return res.status(404).end()
    }

})

app.delete('/api/persons/:id', (req, res) => {
    persons = persons.filter(person => person.id !== req.params.id)
    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
    let errorMessage = {}

    let nameExists = persons.find(person => person.name === req.body.name)

    if(!req.body.name) {
        errorMessage.error = "new person must have a name"
        res.status(400).json({error: errorMessage.error})
    } else if (!req.body.number) {
        errorMessage.error = "new person must have a number"
        res.status(400).json({error: errorMessage.error})
    } else if (nameExists) {
        errorMessage.error = "person already exists"
        res.status(400).json({error: errorMessage.error})
    } else {
        let newPerson = {
                        name: req.body.name,
                        number: req.body.number,
                        id: Math.ceil(Math.random() * 100)
                        }
        persons = persons.concat(newPerson)
        res.json(persons)
    }

 
})


app.listen(3001, () => {
    console.log("Open in port 3001")
})