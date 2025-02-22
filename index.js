import express from 'express'
import cors from 'cors'
import {router} from './src/routes/routes.js'

const app = express()
const PORT = 3000 

app.use(cors())
app.use(express.json())
app.use('/api',router)

app.listen(PORT,() => {
    console.log(`server listening on port ${PORT}`)
})