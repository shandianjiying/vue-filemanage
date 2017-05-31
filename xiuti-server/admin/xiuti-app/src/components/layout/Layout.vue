<template>
    <div class="app-wrapper" >
        <div class="sidebar-wrapper">
            <Sidebar class="sidebar-container" />
        </div>
        <div class="main-container">
            <Navbar/>
            <App-main/>
        </div>
    </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './index.js'
export default {
    name: 'layout',
    components: {
        Navbar,
        Sidebar,
        AppMain
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    padding-left: 180px;
    &.hideSidebar {
        padding-left: 40px;
        .sidebar-wrapper {
            transform: translate(-140px, 0);
            .sidebar-container {
                transform: translate(140px, 0);
            }
            &:hover {
                transform: translate(0, 0);
                .sidebar-container {
                    transform: translate(0, 0);
                }
            }
        }
    }
    .sidebar-wrapper {
        width: 180px;
        position: fixed;
        top: 0px;
        bottom: 0;
        left: 0;
        z-index: 2;
        overflow-x: hidden;
        transition: all .28s ease-out;
    }
    .sidebar-container {
        transition: all .28s ease-out;
    }
    .main-container {
        width: 100%;
        min-height: 100%;
        transition: all .28s ease-out;
    }
}
</style>
