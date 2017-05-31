<template>
    <div class="toolbar">
        <button v-on:click="addFile"></button>
    </div>
</template>

<script>

export default {
    name: 'Toolbar',
    components: {
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.toolbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
}
</style>
