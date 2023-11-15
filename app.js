const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

//dummy endpoint to test that new version is deploying
app.get('/version', (req, res) => {
  res.send('1')
})

//for doing a health check in RENDER
app.get('/health', (req, res) => {
  res.status.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
