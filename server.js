// Import Dependencies
const express = require('express')
const cors = require('cors')

// Import JSON files
const projects = require('./projects.json')
const about = require('./about.json')

// Create app objects
const app = express()

// Set Middleware
app.use(cors())

// Home route for testing app
app.get('/', (req, res) => {
    res.send('Hello Garrett')
} )

// Route for retreiving projects
app.get('/projects', (req, res) => {
    // send projects via JSON
    res.json(projects)
})

// Route for retreiving about info
app.get('/about', (req, res) => {
    // send projects via JSON
    res.json(about)
})

// Declare variable for port #
const PORT = process.env.PORT || 4000

// Turn on server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))