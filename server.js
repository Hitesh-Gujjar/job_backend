import dotenv from 'dotenv';
import cluster from 'node:cluster';
import { availableParallelism } from 'node:os';
import app from './src/app/app.js';
import mongoConnect from './mongodb/mongodb.js';

dotenv.config();

const PORT = process.env.PORT || 8000;
const NUM_CPUS = availableParallelism();

console.log(`Number of CPUs available: ${NUM_CPUS}`);


if (cluster.isPrimary) {
    console.log(`Primary process ${process.pid} is running`);

    // Fork worker processes
    for (let i = 0; i < NUM_CPUS; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        cluster.fork(); // Restart worker
    });

} else {
    (async function startWorker() {
        try {
            await mongoConnect();
            
            console.log(`Worker process ${process.pid} connected to MongoDB.`);
            
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
                console.log(`Worker process ${process.pid} started`);
            });
        } catch (error) {
            console.error(`Worker process ${process.pid} failed to start:`, error.message);
            process.exit(1); // Exit worker if MongoDB connection fails
        }
    })();
}
