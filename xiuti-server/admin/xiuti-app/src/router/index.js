import Layout from '../components/layout/Layout'

const Login = resolve => require(['../views/login'], resolve)
const Desktop = resolve => require(['../views/desk/desktop'], resolve)
const Files = resolve => require(['../views/files/filemanage'], resolve)

export default [{
    path: '/login',
    name: '登录',
    component: Login
},
{
    path: '/desk',
    component: Layout,
    name: '工作台',
    children: [
        { path: 'desktop', component: Desktop, name: '工作台' }
    ]
},
{
    path: '/files',
    component: Layout,
    name: '文件管理',
    children: [
        { path: 'filemanage', component: Files, name: '文件管理' }
    ]
}]

