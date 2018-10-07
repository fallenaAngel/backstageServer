import express from 'express'
import { getUserInfo } from '../modules/getUserInfo.js'

const router = express.Router()

router.get('/api/getUserInfo', function(req, res) {
  getUserInfo(1, function(result) {
    let data = {
      uid: 1,
      code: 1,
      msg: '获取用户信息成功',
      data: {
        nickname: result[0].nickname,
        imgUrl: result[0].imgUrl,
        job: result[0].job,
        location: result[0].location,
        introduce: result[0].introduce,
        interested: result[0].interested,
        workYear: result[0].workYear
      }
    }
    res.send(data)
  })
})
export default router
