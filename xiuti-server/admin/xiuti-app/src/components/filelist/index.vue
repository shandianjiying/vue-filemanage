<template>
    <div class="list-container">
        <div class="file-item" v-for="file in files">
            <div class="file-image img-large"></div>
            <div class="file-name">{{file.filename}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'filelist',
        props: ['files']
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
</style>
