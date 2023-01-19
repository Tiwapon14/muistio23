const express = require('express')
const app = express()
const cors = require('cors')

let notes =[
    {
        id: 1,
        content: "CSS on tyylimuotoilua",
        date: "2022-11-23T11:22:40.0982",
        important: true
    },
    {
        id: 2,
        content: "Selain pystyy suorittamaan ainostaan Javascript-koodi",
        date: "2022-11-23T11:22:50.0007",
        important: false
    },
    {
        id: 3,
        content: "PHP-ohjelmointikieltä käytetään back-end onjelmoinnissa",
        date: "2022-11-23T11:24:09.0313",
        important: true
    },
    {
        id: 4,
        content: "Tietokannat on englanniksi password",
        date: "2022-11-23T11:44:09.0000",
        important: false
    }
]

const requestLogger = (req, res, next) => {
    console.log('Method:', req.method)
    console.log('Path:', req.path)
    console.log('Body:', req.body)
    console.log('---')
    next() 
}

app.use(express.json())

app.use(requestLogger)

app.use(cors())

app.use(express.static('build'))

app.get('/', (req, res) => {
    res.send('<h1>Terve Tiwapon</h1>')
})
app.get('/api/notes', (req, res) => {
    res.json(notes)
})

const generateId = () => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => n.id))
      : 0
      return maxId + 1
  }
  
  app.post('/api/notes/', (request, response) => {
    const body = request.body
  
    if (!body.content) {
        return response.status(400).json({ 
          error: 'content missing' 
        })
      }
  
    const note = {
      id: generateId(),
      content: body.content,
      date: new Date(),
      important: body.important || false
    }
  
    notes = notes.concat(note)
    response.json(note)
  })

  app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter(note => note.id !== id)
  
    res.status(204).end()
  })


app.get('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = notes.find(note => note.id === id)
    if(note){
        res.json(note)

    }else{
        res.status(404).end()
    }
    
  })

const unknownEndpoint = (req, res) => {
res.status(404).send({ error: 'unknown endpoint'})
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT,() =>{
console.log(`Palvelin käynnissä portissa ${PORT}`)
})