import express, { json } from 'express';
import { initConnection } from './database/InitConnection';
import { AccountRouter } from './routers/AccountRouter';

const app = express();
app.use(json());
app.use("/api/account", AccountRouter)
initConnection();


app.listen(8080, ()=>{
    console.log("listening at port 8080...")
})