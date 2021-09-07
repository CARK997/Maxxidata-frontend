import {
  DashboardOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const extraNavTree = [
  {
    key: 'extra-pages-list',
    path: `${APP_PREFIX_PATH}/pages/home`,
    title: 'home',
    icon: DashboardOutlined,
    breadcrumb: true,
    submenu: []
  }
]

const professionalNav = [
  {
    key: 'extra-pages-list',
    path: `${APP_PREFIX_PATH}/pages/user-list`,
    title: ' ',
    icon: '',
    breadcrumb: true,
    submenu: [{
      key: 'extra-pages-list',
      path: `${APP_PREFIX_PATH}/pages/user-list`,
      title: 'sidenav.pages.userlist',
      icon: '',
      breadcrumb: true,
      submenu: [
        {
          key: 'extra-pages-list',
          path: `${APP_PREFIX_PATH}/pages/professional-list`,
          title: 'sidenav.pages.professionallist',
          icon: UserOutlined,
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'extra-pages-list',
          path: `${APP_PREFIX_PATH}/pages/professional-type-list`,
          title: 'sidenav.pages.professionaltypelist',
          icon: TeamOutlined,
          breadcrumb: true,
          submenu: []
        }
      ]
    }]
  },
]

const navigationConfig = [
  ...extraNavTree,
  ...professionalNav
]

export default navigationConfig;