<template>
    <div class="toolbar">
        <div class="btn-group">
            <el-button type="primary" icon="plus" v-on:click="addFile">新建文件夹</el-button>
        </div>
    </div>
</template>

<script>
import * as api from '../../api/desk_api'
export default {
    name: 'Toolbar',
    methods: {
        addFile: function (event) {
            api.addFile({filename: 'aa'})
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.toolbar {
    height: 50px;
    line-height: 50px;
    border-radius: 1px solid grey !important;
    .btn-group {
        margin: 0 10px;
    }
}
</style>
