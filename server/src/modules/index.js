import mysql from 'mysql'
let con = mysql.createConnection({
  host: '0.0.0.0', //域名
  user: 'root', //用户就是root
  password: '1234', //登录密码
  database: 'vueAdmin' //数据库名称
})
con.connect()

export default con
