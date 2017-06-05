<template>
    <div class="file-container">
        <Toolbar />
        <filelist :files='filelist'/>
    </div>
</template>
<script>
import filelist from '../../components/filelist'
import { Toolbar } from '../../components/toolBar/index.js'
import * as api from '../../api/desk_api'
export default {
    components: {
        filelist,
        Toolbar
    },
    data () {
        return {
            filelist: []
        }
    },
    created () {
        api.getFilelist().then((data) => {
            this.filelist = data
        })
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .file-container {
        width: 100%;
        min-height: 100%;
    }    
</style>
