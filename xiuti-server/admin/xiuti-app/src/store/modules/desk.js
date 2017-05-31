import * as api from '../../api/desk_api'
export default {
    state: {
        filelist: []
    },
    mutations: {
        getFilelist (state) {
            state.filelist = [{ filename: '111', path: 'c:/aaa/aaa' }]
        }
    },
    actions: {
        getFilelist (context) {
            api.getFilelist()
            context.commit('getFilelist')
        }
    }
}
