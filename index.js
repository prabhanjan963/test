import express from 'express' 
import Connection from './connection/connection.js';
const app = express()
import routes from './routes/router.js';
import cors from 'cors'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

const PORT = process.env.PORT || 5500;

dotenv.config()

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.use('/',routes);

Connection();

app.listen(PORT, () => {
    console.log('server is running on port ',PORT)
})