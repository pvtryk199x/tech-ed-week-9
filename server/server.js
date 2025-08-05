import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();


const PORT = 8080;

app.use(express.json()) // useful when we make requests, specifically when we start sending data

app.use(cors()) // Cross Origin Resource Sharing - essentially allows our server to responf to clisnes

dotenv.config()// Allow me to configure environments 

console.log("Key secret  is: ", process.env.SECRET_KEY)
console.log("Key secret password is: ", process.env.SECRET_PASSWORD)

app.get("/", function(req,res) {
res.send("You're looking at my root!!");
})

app.listen(PORT, function(){

    console.log(`Server is running:  ${PORT}`); //Listening for port number

})