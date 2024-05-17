import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("connectd to mongodb");
  } catch (error) {
    console.log("Error connecting to MomgoDB", error.message);
  }
};
export default connectToMongoDB;
