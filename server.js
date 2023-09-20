import express from 'express'
import 'dotenv/config'
import cors from 'cors'

import getOpportunities from 'sap/Controllers/OpportunityController.js'

const app = express()
const port = process.env.APP_API_PORT
const appUrl = process.env.APP_URL

app.use(cors({
  origin: `${appUrl}:5173`,
  optionsSuccessStatus: 200
}))

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.get('/opportunities', getOpportunities)

app.listen(port)
