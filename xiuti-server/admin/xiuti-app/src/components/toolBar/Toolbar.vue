<template>
    <div class="toolbar">
        <div class="btn-group">
            <el-button  icon="plus" v-on:click="addFile">新建文件夹</el-button>
            <el-upload
                class="upload-demo"
                ref="upload"
                action="http://localhost:9999/admin/file/upload"
                :show-file-list="false"
                :before-upload="beforeUpload"
                :data="params"
                multiple>
                <el-button type="primary">点击上传</el-button>
            </el-upload>
        </div>
    </div>
</template>

<script>
import * as api from '../../api/desk_api'

export default {
    name: 'Toolbar',
    data: function () {
        return {
            params: {
                parentDir: '我的文件夹'
            }
        }
    },
    methods: {
        addFile: function (event) {
            this.$prompt('文件名', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            }).then(({ value }) => {
                this.$message({
                    type: 'success',
                    message: '你的新建了文件夹: ' + value
                })
                var self = this
                api.addFile({filename: value}).then(function (result) {
                    self.$store.dispatch('getFilelist')
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消'
                })
            })
        },
        beforeUpload: function (file) {
            console.log('11111')
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
    .upload-demo {
        display: inline-block;
    }
}
</style>
