<template>
    <div class="transfer">
        <div class="wrap">
            <mt-popup v-model="popupVisible" class="popup" :class="{success:RegSuccess}" position="top" :modal="false">{{UserPrompts}}</mt-popup>
            <div class="hd-bar">{{ $route.meta.title }}</div>
                <form @submit.prevent="UserReg" autocomplete="off">
                    <div class="box-input" :class="{current:HighLight=='tel'}">
                        <input class="reg-input input-txt" type="number" maxlength="11" pattern="[0-9]*" @focus="PitchOn('tel')" @input="TelNumber" v-focus='onFocus' v-model="UserPhone" placeholder="请输入手机号" />
                    </div>
                    <div class="box-input" :class="{current:HighLight=='password'}">
                        <input class="reg-input input-pw" type="password" v-model="UserPassWord" @focus="PitchOn('password')" placeholder="请输入密码" />
                    </div>
                    <div class="box-button">
                        <button class="btn btn-submit" type="submit" @submit="UserReg">注  册</button>
                    </div>
                </form>
        </div>
    </div>
</template>
<script>
import axios from "axios"

export default {
    name:'Reg',
    data(){
        return{
            onFocus:true,
            HighLight:"tel",
            UserPhone:"",
            UserPassWord:"",
            UserPrompts:"",
            popupVisible:false,
            RegSuccess:false,
            RegCode:""
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
    methods: {
        PitchOn(msg){
            this.HighLight = msg
        },
        TelNumber(){
            if(this.UserPhone.length>11){
                this.UserPhone = this.UserPhone.slice(0,11)
            }
        },
        UserReg(){
            const self = this
            if(this.UserPhone.length<11 || !(/^1[34578]\d{9}$/.test(this.UserPhone))){
                 this.UserPrompts = "手机号码不正确 请重新输入"
                 this.popupVisible = true
                 setTimeout(()=>{
                    self.popupVisible = false
                 },2400)
            }else{
                if(this.UserPassWord.length<6 || this.UserPassWord.length==0){
                    this.UserPrompts = "密码不能小于6位数"
                    this.popupVisible = true
                    setTimeout(()=>{
                        self.popupVisible = false
                    },2400)
                }else{
                    axios.post('http://120.78.176.178:8080/v1/fam/user/register', {
                        password:this.UserPassWord,
                        username:this.UserPhone
                    })
                    .then(response => {
                        self.RegCode = response.data.err_code
                        if(this.RegCode == 1007){
                            this.UserPrompts = "该账号已注册"
                            this.popupVisible = true
                        }
                        if(this.RegCode == 0){
                            this.UserPrompts = "注册成功"
                            this.popupVisible = true
                            this.RegSuccess = true
                        }

                        setTimeout(()=>{
                            this.$router.push({ path:'/login' })
                            self.popupVisible = false
                        },2400)
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
.wrap{
    padding: 6.25rem /* 100/16 */ 2.5rem /* 40/16 */ 0 2.5rem /* 40/16 */;
}

.hd-bar{
    width: 100%;
    height: 2.875rem /* 46/16 */;
    line-height: 2.875rem /* 46/16 */;
    text-align: center;
    color: #333;
    font-size: 1.25rem /* 20/16 */;
    margin-bottom: 1.25rem /* 20/16 */;
}

.reg-input{
    text-align: center;
    width: 100%;
    height: 2.875rem /* 46/16 */;
    border: none;
    font-size: 1.125rem /* 18/16 */;
    font-weight: 600;
}
</style>