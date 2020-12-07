const express = require("express");
const router =  express.Router();
const axios = require("axios");
const  fs = require('fs')
axios.get('http://tsetmc.com/tsev2/data/MarketWatchPlus.aspx').then(resp => { 
 let data = resp.data;
 let dataParts = data.split('@');
 let stocks = dataParts[2].split(';');


 for(let i = 0 ;i<stocks.length;i++){
   let stockProps = stocks[i].split(',');
     jsonData = `[
         {
        "id": "${stockProps[0]}",
        "link": "${stockProps[1]}",
        "parent_id": "${stockProps[2]}",
        "tablecompnt":"${stockProps[3]}",
        "detail": {
          "ISIN" : "${stockProps[4]}",
          "symol" : "${stockProps[5]}",
          "company" : "${stockProps[6]}",
          "sharenumber" : "${stockProps[7]}",
        },
        "spaciaDelete": "${stockProps[8]}",
        "price": {
            "opening" : "${stockProps[9]}",
            "closeing" : "${stockProps[10]}",
            "last" : "${stockProps[11]}",
            "lowest" : "${stockProps[12]}",
            "heigth" : "${stockProps[13]}",
            "yesterday" : "${stockProps[14]}",
          },
          "cost": "${stockProps[15]}",
          "value": "${stockProps[16]}",
          "volume": "${stockProps[17]}",
        }]
    ,`

     let make = fs.appendFileSync('sample.json',jsonData, 'utf8');

}

})
 



router.get("/",(req,res,next)=>{
 return res.render("../MarketWatchPlus.aspx")
})






module.exports = router