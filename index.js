const express = require('express');
const createError = require('http-errors');
const app = express();
const studentRoute = require('./routes/studentRoutes');
const courseRoute =require('./routes/courseRoutes');

require("dotenv").config();
require("./model/dbConnect");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/course', courseRoute)
app.use('/api/courses',courseRoute)
app.use('/api/student', studentRoute)
app.use('/api/students', studentRoute)

// handling 404 error
app.use(async(req, res, next)=>{
    next(createError.NotFound())
})

// Error handling middleware
app.use((err, req, res, next)=>{
    if (err.status === 401){
        // handle 401 Unauthorized error
        res.status(401).send({
            error:{
                status: 401,
                message: "Unauthorized: Invalid username or password"
            }
        });
    }else {
        // Handle other errors
        res.status(err.status || 500).send({
            error:{
                status: err.status || 500,
                message: err.message || "Internal Server Error"
            }
        })
    }
},
)





app.listen(process.env.port || 4000, function(){
    console.log('Now listening for requests on:http://localhost:4000');
});
