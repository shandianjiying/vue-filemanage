<template>
    <div class="file-container">
        <filelist/>
    </div>
</template>
<script>
import filelist from '../../components/filelist'
export default {
    components: {
        filelist
    },
    data () {
        return {
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
