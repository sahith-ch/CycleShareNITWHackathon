import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { server } from './app.js';





dotenv.config({
    config:'./.env'
})
connectDB()
.then(()=>{
  server.listen(process.env.PORT || 3000,()=>{
    console.log(`running`);
  })
})
.catch((err)=>{
    console.log("MongoDb connection failed !!! ",err);
})
