import express from "express";
import router from "./router";
import db from "./config/db";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";
import colors from "colors";
import cors, { CorsOptions } from "cors";
import morgan from "morgan";

// Connect to DB
export const connectDB = async () => {
  try {
    await db.authenticate();
    db.sync();
    console.log(colors.magenta("Successful connection"));
  } catch (error) {
    console.log(error);
    console.log(colors.red.bold("Error to connect DB"));
  }
};

connectDB();

// Instance Express
const server = express();

// Allow connections
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (origin === process.env.FRONTEND_URL) {
      callback(null, true);
    } else {
      callback(new Error("CORS Error"));
    }
  },
};

server.use(cors(corsOptions));

// Read form data
server.use(express.json());

// See details about the request
server.use(morgan("dev"));

server.use("/api/products", router);

// API Docs
server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default server;
