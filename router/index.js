const express = require("express");
const router =  express.Router();

const  fs = require('fs')


     jsonData = `[
      {
        "name":"afshin",
        "lastname":"rahmati",
        "phonenumber":"09108348429"
      }
        ]`

     let make = fs.appendFileSync('sample.json',jsonData, 'utf8');

     let exsic = fs.existsSync('sample.json')
     if(exsic){
       let filejson = require("../sample.json");
       console.log(filejson);
     }



 









module.exports = router