<template>
    <div>
        <div class="list-container">
            <div class="file-item" v-for="file in files" v-on:click="enterFile(file)">
                <div v-if="file.filename" class="file-image img-large"></div>
                <div v-if="file.filename" class="file-name">{{file.filename}}</div>
                <div v-if="file.picName" class="file-image"><img v-bind:src="path+file.direction" /></div>
                <div v-if="file.picName" class="file-name">{{file.picName}}</div>
            </div>
        </div>
        <el-dialog title="提示" :visible.sync="dialogVisible" size="tiny" >
            <img class="preview-img" v-bind:src="img" />
            <span slot="footer" class="dialog-foot  er">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        name: 'filelist',
        props: ['files'],
        data: function () {
            return {
                path: 'http://localhost:9999/system',
                dialogVisible: false,
                img: ''
            }
        },
        methods: {
            enterFile: function (file) {
                if (file.filename) {
                    this.$store.dispatch('getFilelist', file.id)
                    this.$store.commit('addLayer', file)
                } else {
                    this.dialogVisible = true
                    this.img = this.path + file.direction
                }
            }
        }
    }
    
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .list-container {
        height: 100%;
        width: 100%;
        .file-item {
            width: 120px;
            height: 127px;
            float: left;
            margin: 4px 0 0 6px;
            text-align: center;
            border: 1px solid #fff;
            position: relative;
            &:hover {
                border: 1px solid #f1f5fa;
                border-radius: 5px;
                background: #f1f5fa;
            }
            .file-image {
                position: relative;
                margin: 9px auto 0;
                width: 84px;
                height: 84px;
                background-repeat: no-repeat;
                overflow: hidden;
            }
            .img-large {
                background: url('../../assets/image/file1_lg.png') center no-repeat;
            }
            .file-name {
                display: block;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                margin: 6px 5px 5px;
                color: #424e67;
                font-size: 12px;
            }
        }
    }
    .preview-img {
        height: 100%;
        width: 100%;
    }
</style>
