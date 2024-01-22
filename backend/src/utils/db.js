// db.js

import mongoose from 'mongoose';

const connectionUri = '';

const openDbConnection = async () => {
    try {
        await mongoose.connect(connectionUri);

        console.log('Connected to MongoDB');

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);

        process.exit(1); // Exit the process if unable to connect
    }
};

const closeDbConnection = async () => {

    await mongoose.disconnect();

    console.log('Disconnected from MongoDB');
};

export { openDbConnection , closeDbConnection };
