<template>
    <div class="transfer">
        <div class="wrap">
            <mt-popup v-model="popupVisible" class="popup" :class="{success:LoginSuccess}" position="top" :modal="false">{{UserPrompts}}</mt-popup>
            <div class="hd-bar">
                家谱
            </div>
            <div class="login-form">
                <form @submit.prevent="UserLoginSubmit">
                    <div class="box-input" :class="{current:HighLight=='tel'}">
                        <input class="login-input input-txt" type="number" maxlength="11" pattern="[0-9]*" autocomplete="off" @focus="PitchOn('tel')" @input="TelNumber" v-focus='onFocus' v-model="UserPhone" placeholder="请输入手机号" />
                    </div>
                    <div class="box-input" :class="{current:HighLight=='password'}">
                        <input class="login-input input-pw" type="password" v-model="UserPassWord" @focus="PitchOn('password')" placeholder="请输入密码" />
                    </div>
                    <div class="box-button">
                        <button class="btn btn-submit" type="submit" @click="UserLoginSubmit">{{loginTxt}}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import treeVue from '../../Content/tree.vue';

export default {
    name: 'Login',
    data() {
        return {
            onFocus: true,
            Disabled: true,
            loginTxt:'登陆',
            HighLight:'tel',
            UserPhone:'',
            UserPassWord:'',
            LoginSuccess:false,
            popupVisible:false,
            UserPrompts:'',
            LoginCode:''
        }
    },
    directives: {
        focus: {
            inserted: function(el, { value }) {
                if (value) {
                    el.focus()
                }
            }
        }
    },
    beforeRouteEnter  (to, from, next){
        next(vm => {
            const token = vm.$store.getters.getToken
            if(token){
                next({path: '/', replace: true})
            }else{
                next()
            }            
        })
    },
    methods: {
        PitchOn(msg){
            this.HighLight = msg
        },
        TelNumber(){
            if(this.UserPhone.length>11){
                this.UserPhone = this.UserPhone.slice(0,11)
            }
        },
        UserLoginSubmit(){
          const self = this
          if(this.UserPhone.length<11 || !(/^1[34578]\d{9}$/.test(this.UserPhone))){
                 this.UserPrompts = "手机号码不正确 请重新输入"
                 this.popupVisible = true
                 setTimeout(()=>{
                    self.popupVisible = false
                    self.UserPhone = ''
                 },2000)
            }else{
                if(this.UserPassWord.length<6 || this.UserPassWord.length==0){
                    this.UserPrompts = "密码不能小于6位数"
                    this.popupVisible = true
                    setTimeout(()=>{
                        self.popupVisible = false
                    },2000)
                }else{
                    axios.post('http://120.78.176.178:8080/v1/fam/user/login', {
                        password:this.UserPassWord,
                        username:this.UserPhone
                    })
                    .then(response => {
                        self.LoginCode = response.data.err_code
                        if(this.LoginCode == 1004){
                            this.UserPrompts = "密码错误 请重新输入"
                            this.popupVisible = true,
                            setTimeout(()=>{
                                self.popupVisible = false
                                self.UserPassWord = ''
                            },2000)
                        }
                        if(this.LoginCode == 1010){
                            this.UserPrompts = "该用户还未注册"
                            this.popupVisible = true,
                            setTimeout(()=>{
                                this.$router.replace('/reg')
                                self.popupVisible = false
                            },2000)
                        }
                        if(this.LoginCode == 0){
                            this.UserPrompts = "登陆成功"
                            this.popupVisible = true
                            this.LoginSuccess = true
                            this.$store.commit('getToken', response.data.data.access_token)
                            this.loginTxt = '登陆中...'
                            setTimeout(()=>{
                                this.$router.replace('/')
                                self.popupVisible = false
                            },2000)
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
                }
            }
        }
    }
}
</script>
<style scoped>
.wrap {
    padding: 7.5rem /* 120/16 */ 3.75rem /* 60/16 */ 0 3.75rem /* 60/16 */;
}

.login-input {
    width: 100%;
    height: 2.875rem /* 46/16 */;
    border: none;
    font-size: 1.5rem /* 24/16 */;
    font-weight: 600;
    color: #333;
}

.hd-bar {
    font-size:2.125rem /* 34/16 */;
    color: #333;
}
</style>
