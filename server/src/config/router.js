import getUserInfo from '../routers/getUserInfo.js'
import GetData from '../routers/getData.js'

export default function(app) {
  app.get('/', function(req, res) {
    res.sendFile('/src/index.html')
  })
  app.get('/api/getUserInfo', getUserInfo) // 获取用户信息

  app.post('/api/getTableData', GetData)
}
