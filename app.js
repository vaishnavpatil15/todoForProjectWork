const express = require("express");
const app = express();

const cors = require("cors")

const db = require("./config/db.config")
db();

app.use(cors({
    origin:"http://localhost:5173"
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const userRouter= require("./routes/user.routes")
app.use("/user",userRouter)

app.listen(3000);