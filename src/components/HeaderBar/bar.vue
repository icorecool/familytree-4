<template>
    <div class="bar">
        <h1 class="bar-title">{{ $route.meta.title }}</h1>
    </div>
</template>
<script>
export default {
    name:"bar",
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.bar{
    width: 100%;
    height: 2.875rem /* 46/16 */;
    line-height: 2.875rem /* 46/16 */;
    background: rgba(235, 235, 235, 0.8);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    border-bottom: 1px solid #ddd;
    position: fixed;
    top: 0;
    z-index: 10;
}

h1.bar-title{
    font-size: 1.125rem /* 18/16 */;
    display: block;
    text-align: center;
    color: #333;
}
</style>