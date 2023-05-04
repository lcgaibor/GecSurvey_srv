import mongoose from "mongoose";
import config from './config'


(async () => {
    const db = await mongoose.set('strictQuery', false).connect(config.mongodbURLVIN)
    console.log('Database is connected to: ',db.connection.name)
})();