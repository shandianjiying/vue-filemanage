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
        <div class="breadCrumb-container">
            <div v-for="(crumb, index) in breadCrumb" class="bread-item">
                <a href="javascript:void(0)" v-on:click="crumbHandler(crumb)">{{crumb.filename}}</a>
                <span class="tip-padding" v-if="index !== breadCrumb.length-1">></span>
            </div>
        </div>
    </div>
</template>

<script>
import * as api from '../../api/desk_api'
import * as recursion from '../../service/recursionService'
import { mapState } from 'vuex'
export default {
    name: 'Toolbar',
    data: function () {
        return {
            params: {
                parentDir: ''
            }
        }
    },
    computed: mapState({
        breadCrumb: function (state) {
            this.$store.commit('getBreadList')
            let arr = state.breadCrumb.breadList
            arr.forEach(function (element, index) {
                if (!element.filename) {
                    arr.splice(index, 1)
                }
            })
            return arr
        }
    }),
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
            this.params.parentDir = recursion.getFilePath()
        },
        crumbHandler: function (crumb) {
            this.$store.commit('emptyLayer')
            if (crumb.filename === '全部文件') {
                this.$store.dispatch('getFilelist')
            } else {
                this.$store.dispatch('getFilelist', crumb.id)
                this.$store.commit('addLayer', crumb)
            }
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.toolbar {
    height: 80px;
    line-height: 50px;
    border-radius: 1px solid grey !important;
    .btn-group {
        margin: 0 10px;
    }
    .upload-demo {
        display: inline-block;
    }
    .breadCrumb-container {
        height: 30px;
        line-height: 24px;
        padding: 0 15px;
        .bread-item {
            font-size: 12px;
            float: left;
        }
        & a {
            text-decoration: none;
        }
        .tip-padding {
            padding: 0 5px;
        }
    }
}
</style>
