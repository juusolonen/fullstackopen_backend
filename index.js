const express = require('express')
const app = express()

const persons = [
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


app.listen(3001, () => {
    console.log("Open in port 3001")
})