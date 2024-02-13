import express from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
// app.use(cors({
//     origin:"http://local host:3000",
//     method:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type00'],
// }));
app.get("/", (request, response) => {
    console.log(request)
    return response.status(234).send("welcome")
});
app.use('/books',booksRoute);
mongoose.connect("mongodb://localhost:27017/books-collection")
    .then(() => {
        console.log("App connected");
        app.listen(PORT, () => {
            console.log(`App is running:${PORT}`);
        });

    })
    .catch((error) => {
        console.log(error);
    });


