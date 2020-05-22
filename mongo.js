const mongoose = require('mongoose')

const pwd = process.argv[2]

const url = `mongodb+srv://juusokayttaja:${pwd}@cluster0-ljqfc.mongodb.net/puhelinluettelo?retryWrites=true&w=majority`


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: Number
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 5) {

        const person = new Person({
            name: process.argv[3],
            number: process.argv[4]
        })

        person.save().then(result => {
            console.log(`added ${person.name} number ${person.number} to phonebook`)
            mongoose.connection.close()
        })
}

if (process.argv.length === 3) {
    console.log('phonebook:')
    Person.find({}).then(result => {
        result.forEach(person=> {
            console.log(`${person.name} ${person.number}`)
        });
        mongoose.connection.close()
    })
}



