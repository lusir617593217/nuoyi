import {
  FormOutlined,
  SettingOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MehOutlined,
  BgColorsOutlined,
  OrderedListOutlined,
  AliwangwangOutlined,
  RocketOutlined
} from '@ant-design/icons'

const menuData = [
  {
    title: '首页',
    pathName: '/home',
    icon: FormOutlined
  },
  {
    title: '系统管理',
    pathName: '/manage',
    icon: SettingOutlined,
    children: [
      {
        title: '用户管理',
        pathName: '/manage/user-manage',
        icon: UserOutlined
      },
      {
        title: '角色管理',
        pathName: '/manage/role-manage',
        icon: MehOutlined
      },
      {
        title: '部门管理',
        pathName: '/manage/department-manage',
        icon: BgColorsOutlined
      },
      {
        title: '岗位管理',
        pathName: '/manage/job-manage',
        icon: OrderedListOutlined
      },
      {
        title: '公告通知',
        pathName: '/manage/inform-manage',
        icon: AliwangwangOutlined
      },
    ]
  },
  {
    title: '系统监控',
    pathName: '/monitor',
    icon: VideoCameraOutlined,
    children: [
      {
        title: '在线用户',
        pathName: '/monitor/inline-user',
        icon: RocketOutlined
      }
    ]
  }
]

export default menuData
