require('dotenv').config();
const express = require('express');
const RunServer = require('./database/connection');

const cors = require('cors');
const to_do_listRouter = require('./routes/to_do_list_Routes');


const app = express()
const port = process.env.PORT || 5000;



// connect the mongodb database , it will point to Runserver = require('./database/connection'); after that it will call the connection.js file and it will execute the function Runserver() => then try catch block
RunServer()



app.use(express.json());
app.use(cors());


 app.use('/todolist',to_do_listRouter);

app.listen(port ,()=>{                                 
    console.log(`server is running on ${port}`)
})