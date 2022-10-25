let express = require("express")

let router = express.Router()

let fourData = require("../mock/four.json")


//req 是请求 
//res 是响应
router.get("/data", (req, res) => {
    // 发送响应
    res.send({ msg: "成功4", chartData: fourData })
})

module.exports = router