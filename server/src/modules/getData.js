import connect from './index.js'
const getData = (options, callback) => {
  let { pageSize, pageNum } = options
  let tid = Number(options.tid)
  let sPos = (pageNum - 1) * pageSize
  let ePos = pageSize
  let dataSql = tid === 1 ? `select * from admin_content_list limit ${sPos},${ePos}` : `select * from admin_content_list where tagType=? limit ${sPos},${ePos}`
  let totalSql = tid === 1 ? `select * from admin_content_list` : `select * from admin_content_list where tagType=?`
  connect.query(dataSql, [tid], function(err, result) {
    if (err) throw err
    connect.query(totalSql, [tid], function (error, num) {
      if (error) throw error
      callback(result, num.length)
    })
  })
}
export { getData }
