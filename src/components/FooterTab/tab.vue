<template>
    <div class="tab">
        <router-link to='/tree'>tree</router-link>
        <router-link to='/my'>my</router-link>
    </div>
</template>
<script>
export default {
    name:"tab",
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.tab{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 2.875rem /* 46/16 */;
    width: 100%;
    background: rgba(235, 235, 235, 0.8);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    z-index: 10;
    border-top: 1px solid #ddd;
}
</style>