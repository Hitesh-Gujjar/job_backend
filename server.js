import app from './src/app/app.js';
import dotenv from 'dotenv'
import mongoConnect from './mongodb/mongodb.js'
dotenv.config()

const port = 8000;
mongoConnect();

app.listen(port,
    () => console.log("port is runing on", port)
)
