const express = require("express");
const app = express();

const db = require("./config/db.config")
db();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const userRouter= require("./routes/user.routes")
app.use("/user",userRouter)

app.listen(3000);