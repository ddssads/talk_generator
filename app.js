//require module and define related variables
const express = require('express')
const exphbs = require('express-handlebars')
const handlebars = require('handlebars')
const bodyParse = require('body-parser')
const generateTalk = require('./generate_talk')
const port = 3000
const app = express()

//regist helper
handlebars.registerHelper('ifEquals', function (job, jobName, options) {
  if (job === jobName) {
    return options.fn(this)
  }
  return options.inverse(this)
})



//setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParse.urlencoded({ extended: true }))

//setting route
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const job = req.body.jobRadios
  const talk = generateTalk(job)
  res.render('index', { talk, job })
})

//start sever
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})