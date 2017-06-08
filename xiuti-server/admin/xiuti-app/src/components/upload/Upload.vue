<template>
    <div class="upload-container">
        <div class="upload-header">
            <h3>
                <span class="upload-header-title">文件上传</span>
            </h3>
        </div>
        <div class="upload-body">
            <div class="upload-list">
                <ul class="list-container">
                    <li class="file-list"></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Upload'
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .upload-container {
        width: 633px;
        top: auto;
        bottom: 0px;
        left: auto;
        right: 30px;
        display: block;
        visibility: visible;
        z-index: 42;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        border: 1px solid #e2e2e2;
        box-shadow: 0 0 10px #ccc;
        margin-bottom: -2px;
    }
</style>
