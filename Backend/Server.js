const express = require("express");
const app = express();
const connectDB = require("./Config/db");
const dot = require("dotenv");
const cors = require("cors");
const  route  = require("./Routes/Userroutes");
app.use(cors({
    origin: 'http://localhost:3000' // Replace with the origin of your frontend
  }));
dot.config();
connectDB();
app.use(express.json());
const PORT = process.env.PORT;

app.use("/", route);

app.listen(PORT,()=>console.log("Server is started",PORT));
