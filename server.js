import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import bodyParser from 'body-parser'

import { getOpportunities, loseOpportunity, postOpportunity, winOpportunity } from './sap/Controllers/OpportunityController.js'

const app = express()
const port = process.env.APP_API_PORT
const appUrl = process.env.APP_URL

app.use(cors({
  origin: `${appUrl}:5173`,
  optionsSuccessStatus: 200
}))

// app.use((req, res, next) => {
//   console.log(req.headers.authorization)
//   next()
// })

app.get('/', (req, res) => {
  res.send('hola')
})

app.get('/opportunities', getOpportunities)
app.post('/opportunities', bodyParser.json(), postOpportunity)

// Change opportunity Percent
app.post('/winopportunity', winOpportunity)
app.post('/loseopportunity', loseOpportunity)

app.listen(port)
