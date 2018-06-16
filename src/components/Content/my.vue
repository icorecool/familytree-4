<template>
    <div class="content">
        <mt-popup v-model="popupVisible" class="popup" :class="{success:LoginSuccess}" position="top" :modal="false">{{UserPrompts}}</mt-popup>
        <div class="space">
            <button class="button red" @click="outLogin">退出登陆</button>
        </div>
    </div>
</template>
<script>
export default {
    name:"my",
    data(){
        return{
            popupVisible:false,
            LoginSuccess:true,
            UserPrompts:''
        }
    },
    methods:{
        outLogin(){
            this.$store.commit('outLogin')
            this.UserPrompts = '退出成功'
            this.popupVisible = true
            setTimeout(()=>{
                this.popupVisible = false
                this.$router.replace('/welcome')
            },2000)
        }
    }    
}
</script>
<style scoped>

</style>