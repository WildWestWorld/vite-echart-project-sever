let express = require("express")

let router = express.Router()
let threeData =require("../mock/three.json")



//req 是请求 
//res 是响应
router.get("/data",(req,res)=>{
    // 发送响应
    res.send({msg:"成功3",chartData:threeData})
})

module.exports = router