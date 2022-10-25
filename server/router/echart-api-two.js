let express = require("express")

let router = express.Router()
let twoData =require("../mock/two.json")



//req 是请求 
//res 是响应
router.get("/data",(req,res)=>{
    // 发送响应
    res.send({msg:"成功2",chartData:twoData})
})

module.exports = router