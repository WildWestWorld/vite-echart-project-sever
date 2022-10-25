// 合并和创建服务
let express = require("express")

//创建实体express的
let app = express();

// 引用路由文件
let chartApiOne = require("./router/echart-api-one")
let chartApiTwo = require("./router/echart-api-two")
let chartApiThree = require("./router/echart-api-three")
let chartApiFour = require("./router/echart-api-four")

let chartApiMap = require("./router/echart-api-map")

//使用中间件来配置路由
// 分配各个文件的接口路径
app.use("/one", chartApiOne)
app.use("/two", chartApiTwo)
app.use("/three", chartApiThree)
app.use("/four", chartApiFour)
app.use("/map", chartApiMap)


// 设置跨域 （重要！）
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    // 千万不要网%%￥￥￥###
    // 千万不要网
    // 千万不要网
    next();
})


// 设置服务器的端口号
app.listen(8888)