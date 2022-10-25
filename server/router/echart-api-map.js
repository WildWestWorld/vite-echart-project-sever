let express = require("express")

let router = express.Router()

let mapData =require("../mock/china.json")

//req 是请求 
//res 是响应
router.get("/data", (req, res) => {
    // 发送响应
    res.send({ msg: "成功1" ,chartData:mapData})
})
router.get("/", (req, res) => {
    // 发送响应
    res.send({ msg: "根目录的API成功" })
})



module.exports = router