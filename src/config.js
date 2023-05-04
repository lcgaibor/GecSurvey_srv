import { config } from "dotenv"
config();

export default{
    mongodbURLVIN:process.env.MONGODB_URI_VIN,
}