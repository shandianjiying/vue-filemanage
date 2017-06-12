import * as recursion from '../../service/recursionService'
export default {
    state: {
        breadCrumb: {},
        breadList: []
    },
    mutations: {
        // 增加一层
        addLayer (state, payLoad) {
            let layers = state.breadCrumb
            if (!layers.child) {
                state.breadCrumb = payLoad
            } else {
                state.breadCrumb.child = payLoad
            }
        },
        // 清空所有面包
        emptyLayer (state) {
            state.breadCrumb = {}
        },
        // 指定一个面包屑
        certainLayer (state, payLoad) {
        },
        getBreadList (state) {
            let arr = []
            if (state.breadCrumb.child !== undefined) {
                arr = recursion.recurBreadCrumb(state.breadCrumb, [])
            } else {
                arr.push(state.breadCrumb)
            }
            arr.unshift({filename: '全部文件', id: 0})
            state.breadList = arr
        }
    }
}
