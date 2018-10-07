import express from 'express' // import方式的引入，直接用node命令运行的话会报错，解析不了，所以可以用Babel解析
import Path from 'path'
import bodyParser from 'body-parser'
import history from 'connect-history-api-fallback'
import routes from './config/router.js'

const app = express()
const cwd = Path.join(process.cwd(), 'dist')
app.use(history({
  rewrites: [{
        from: /^\/abc$/, to: '/'
  }]
}))
app.use(express.static(cwd)) // 设置静态资源路径
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') // cors跨域方式，通过设置res.header实现
  res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With,token') // 设置允许通过的字段token
  //res.header('Access-Control-Allow-Methods', 'PUT, POST, GET,DELETE, OPTIONS')
  //res.header('X-Powered-By', '3.2.1')
  //res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
routes(app)

app.listen(3000, function() {
  console.log('server is running in http://119.23.255.12:3000')
})

