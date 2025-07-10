import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({ path: '.env.prod' });




if (!process.env.MONGO_URL) { 
  throw new Error("MONGO_URL environment variable not set");
}
const MONGO = process.env.MONGO_URL 

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO)
          .then(()=>{console.log("MONGOOO....")});
  } catch (error) {
    console.error(
      "error in connecting to db",
      error instanceof Error ? error.message : error
    );
    process.exit(1);
  }
};

connectDB();
