let express = require("express")

let router = express.Router()

let oneData =require("../mock/one.json")

//req 是请求 
//res 是响应
router.get("/data", (req, res) => {
    // 发送响应
    res.send({ msg: "成功1" ,chartData:oneData})
})
router.get("/", (req, res) => {
    // 发送响应
    res.send({ msg: "根目录的API成功" })
})



module.exports = router