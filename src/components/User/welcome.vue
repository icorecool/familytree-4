<template>
    <div class="welcome-page">
        <div class="light-box">

        </div>
        <div class="box-btn">
            <div class="flex-btn">
                <router-link to='/reg' class="a-btn btn btn-reg">注册</router-link>
            </div>
            <div class="flex-btn">
                <router-link to='/login' class="a-btn btn">登陆</router-link>
            </div>
       </div>
    </div>
</template>
<script>
export default {
    name:"Welcome",
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.light-box{
    width: 100%;
    height: 26.25rem /* 420/16 */;
    background: #ddd;
}

.box-btn{
    padding: .625rem /* 10/16 */;
    margin-top: 1.875rem /* 30/16 */
}

.flex-btn{
    float: left;
    width: 46%;
    padding: 2%;
}

.a-btn{
    display: block;
    text-align: center;
    line-height: 2.875rem /* 46/16 */;
    color: #000;
}

.btn{
    width: 100%;
    height:2.875rem /* 46/16 */;
    border: 1px solid #fdd000;
    background: #fff;
    border-radius: 6px;
}

.btn:active{
    background: #ffba00;
}

.btn-reg{
    background: #fdd000;
}

</style>
