import store from '../store'
// 返回当前路径
export function getFilePath () {
    let path = ''
    let breadCrumb = store.state.breadCrumb.breadCrumb
    path = getChild(breadCrumb, '')
    return path
}
// 返回当前面包屑导航数据
export function recurBreadCrumb (breadCrumb, arr) {
    arr.push(breadCrumb)
    if (breadCrumb.child) {
        recurBreadCrumb(breadCrumb.child)
    }
    return arr
}

function getChild (breadCrumb, path) {
    path += '/' + breadCrumb.filename
    if (breadCrumb.child) {
        getChild(breadCrumb.child)
    }
    return path
}
