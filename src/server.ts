import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const port: number = 5000;
const mongoURI = process.env.MONGODB_URI2 as string; // Access the URI from .env

async function bootstrap() {
  try {
    await mongoose.connect(mongoURI);
    console.log(`🛢 Database connection successful`);

    app.listen(port, (): void => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.log(`you Failed to connect to the database`, err);
  }
}

bootstrap();

/* // !n! sad=> server > dbconnect
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 
import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";
const port: number = 5000;
const mongoURI = process.env.MONGODB_URI as string; // Access the URI from .env
//database connection
async function bootstrap() {
  try {
    // await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    await mongoose.connect(
      "mongodb+srv://web2:8HdqwXJGb4ZKIcJ1@chkdbcluster.qsaqded.mongodb.net/?retryWrites=true&w=majority",
    );
    console.log(`🛢 Database connection successful`);

    app.listen(port, () => {
      console.log(`Server is  listening on port ${port}`);
    });
  } catch (err) {
    console.log(`you failed to connect database`, err);
  }
}

bootstrap(); */
