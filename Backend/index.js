import express from 'express'
import router from './Routes/index.js'
import db from './config/db.js'
db.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))

const app=express()
app.use(express.json())
const port=3001
app.use(express.urlencoded({ extended: true }))
app.listen(port,()=>{
    console.log('server is running on port ',port)
   
})
app.use('/',router)