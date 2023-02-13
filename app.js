import express from 'express';
import connectDB from './db/connectdb.js'
import {join} from 'path';
import web from './routes/web.js'
const app = express();

const port = process.env.PORT || '3000'

/** URL encooded middle where encoded */
app.use(express.urlencoded({extended:false}))
/** connect database */

connectDB(); 
/** statif File */
app.use("/student",express.static(join(process.cwd(),"public")));
app.use("/student/edit",express.static(join(process.cwd(),"public")));


app.set("view engine","ejs");

/** load router file */
app.use("/student",web);

app.listen(port,()=>{
    console.log(`Server Listening at http://localhost:${port}`)
})