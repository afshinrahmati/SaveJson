const express = require("express");
const app = express();
const port = process.env.PORT || 3500;



app.use('/',require('./router/index'))




app.listen(port,()=>{
    console.log(`Port Run : ${port}`);
})