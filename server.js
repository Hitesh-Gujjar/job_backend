// import app from './src/app/app.js';
// import dotenv from 'dotenv'
// import mongoConnect from './mongodb/mongodb.js'
// dotenv.config()

import express from "express";
const app = express();
const port = 5000;
// mongoConnect();

app.listen(port,
    () => console.log("port is runing on", port)
)
