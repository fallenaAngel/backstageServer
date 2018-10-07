import express from 'express'
import {getData} from '../modules/getData.js'

const router = express.Router()

router.post('/api/getTableData', function(req, res) {
  if (req.body === null || req.body === undefined || req.body === {}) {
    res.send({
      code: 0,
      msg: '请传入参数'
    })
  }
  getData(req.body, function (result, total) {
    res.send({
      code: 1,
      msg: 'success',
      total,
      data: result
    })
  })
})
export default router