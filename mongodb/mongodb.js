// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const password = encodeURIComponent('hitesh@0507');
const username = encodeURIComponent('hitesh');
const clusterAddress = 'cluster0.4npfbgv.mongodb.net';
const databaseName = 'pocdata';
const nodeurl = process.env.MONGOES_DB_URL

const connectDb = async () => {
    try {
        await mongoose.connect(nodeurl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

export default connectDb;