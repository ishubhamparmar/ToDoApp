import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();

//Listening on port 4000
app.listen(process.env.PORT, (req, res)=>{
        console.log(`Server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode.`);
});