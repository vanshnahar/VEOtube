import dotenv from "dotenv";
import ConnectDB from "./DB/index.js";
import app from "./app.js";

dotenv.config({
    path: "./.env"
})

ConnectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log("server is running on port", process.env.PORT);
        })
    })
    .catch(error => { console.log("Mongodb connection failed !!", error) })
