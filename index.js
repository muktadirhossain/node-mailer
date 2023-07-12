// Import External dependencies:
const express = require("express");
const path = require("path");
const sendEmailRouter = require("./router/sendEmailRouter");
const dotenv = require("dotenv").config();

// declare APP Component:
const app = express();

// request parsers:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine:
app.set("view engine", "ejs");

// Set static files here:
app.use(express.static(path.join(__dirname, "public")));

// APP Routes::
app.use('/',sendEmailRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`app listening on: http://localhost:${PORT}`)
})