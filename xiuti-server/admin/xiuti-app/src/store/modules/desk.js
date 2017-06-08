import * as api from '../../api/desk_api'
export default {
    state: {
        filelist: []
    },
    mutations: {
        getFilelist (state, payLoad) {
            state.filelist = payLoad
        }
    },
    actions: {
        getFilelist (context) {
            api.getFilelist().then(function (data) {
                context.commit('getFilelist', data)
            })
        }
    }
}
