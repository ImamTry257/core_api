const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

// set cors
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World! 2024')
})

// import body parser
const bodyParser = require('body-parser')

// set parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false }))

// set parse application/json
app.use(bodyParser.json())

// import route posts
const postsRouter = require('./routes/posts')
app.use('/api/posts', postsRouter)

app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`)
})