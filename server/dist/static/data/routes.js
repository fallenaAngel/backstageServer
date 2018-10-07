const routes = [
  {
    menuName: '导师管理',
    iconType: 'el-icon-menu',
    childMenu: [{
      route: {
        path: 'checkPending'
      },
      menuName: '待审核列表'
    }, {
      route: {
        path: 'teacherList'
      },
      menuName: '导师列表'
    }, {
      route: {
        path: 'withdraw'
      },
      menuName: '提现管理'
    }]
  },
  {
    menuName: '用户管理',
    iconType: 'el-icon-view',
    childMenu: [{
      route: {
        path: 'userList'
      },
      menuName: '用户列表'
    }]
  },
  {
    menuName: '互动管理',
    iconType: 'el-icon-share',
    childMenu: [{
      route: {
        path: 'conManage'
      },
      menuName: '内容管理'
    }, {
      route: {
        path: 'activity'
      },
      menuName: '活动管理'
    }]
  },
  {
    menuName: '订单管理',
    iconType: 'el-icon-sort',
    childMenu: [{
      route: {
        path: 'questionOrder'
      },
      menuName: '问答订单'
    }, {
      route: {
        path: 'activityOrder'
      },
      menuName: '活动订单'
    }]
  },
  {
    menuName: '我的账户',
    iconType: 'el-icon-setting',
    childMenu: [{
      route: {
        path: 'account'
      },
      menuName: '账户信息'
    }]
  }
]
export default routes;
