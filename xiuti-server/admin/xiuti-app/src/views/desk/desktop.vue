<template>
    <div class="file-container">
        <filelist :files='filelist'/>
    </div>
</template>
<script>
import filelist from '../../components/filelist'
import * as api from '../../api/desk_api'
export default {
    components: {
        filelist
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
