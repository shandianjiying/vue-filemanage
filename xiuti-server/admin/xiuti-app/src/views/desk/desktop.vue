<template>
    <div class="file-container">
        <Toolbar />
        <filelist v-if="fileList" :files='fileList'/>
    </div>
</template>
<script>
import filelist from '../../components/filelist'
import { Toolbar } from '../../components/toolBar/index.js'
// import * as api from '../../api/desk_api'
import { mapState } from 'vuex'
export default {
    components: {
        filelist,
        Toolbar
    },
    computed: mapState({
        fileList: state => state.desk.filelist
    }),
    created () {
        this.fetchData()
    },
    methods: {
        fetchData () {
            this.$store.dispatch('getFilelist')
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .file-container {
        width: 100%;
        min-height: 100%;
    }    
</style>
