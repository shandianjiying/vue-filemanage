<template>
    <el-menu :router="true" theme="dark"  class="el-menu-vertical-demo">
        
        <el-menu-item index="/desk/desktop"><i class="el-icon-menu"></i>全部文件</el-menu-item>
        <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>文件管理</template>
            <el-menu-item-group>
                <el-menu-item index="/files/filemanage">文件管理</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    name: 'Sidebar',
    data () {
        return {}
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu {
    min-height: 100%;
}

.el-menu-item-group__title {
    padding-left: 40px;
}
</style>
