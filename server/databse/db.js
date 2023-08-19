import mongoose from "mongoose";

export const Connection = async () => {
  const URL =
    "mongodb+srv://moulish0809:admin@cluster0.392eszf.mongodb.net/Flipkart?retryWrites=true&w=majority";
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewurlParser: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error while Connectiong with database", error.message);
  }
};

export default Connection;
