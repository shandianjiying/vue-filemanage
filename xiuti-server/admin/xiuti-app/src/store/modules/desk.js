import * as api from '../../api/desk_api'
export default {
    state: {
        filelist: []
    },
    mutations: {
        // 查询根目录所有文件节点
        getFilelist (state, payLoad) {
            state.filelist = payLoad
        }
    },
    actions: {
        // 查询根目录所有文件节点
        getFilelist (context, fileId) {
            let id = ''
            if (fileId) {
                id = fileId
            }
            api.getFilelist(id).then(function (data) {
                context.commit('getFilelist', data)
            })
        }
    }
}
