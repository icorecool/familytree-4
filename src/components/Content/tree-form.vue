<template>
    <div class="treeForm">
        <div class="hd-bar">
            <a href="javascript:;" class="fl-l delete">删除</a>
            <a href="javascript:;" class="fl-r">取消</a>
        </div>
        <div class="info">
            <div class="avater">
                <div class="acater-box">
                    <img src="../../assets/avater-man.png" alt="" v-if="detailsArry.sex == 'man'"/>
                    <img src="../../assets/avater-woman.png" alt="" v-else> 
                </div>
                <a href="javascript:;">编辑</a>
            </div>
            <div class="name column">
                <span class="info-title">姓名：</span> 
                <div class="layer">
                    <input type="text" class="input-box" v-model="detailsArry.name"/>
                </div>
            </div>
            <div class="phone column">
                <span class="info-title">手机号：</span> 
                <div class="layer">
                    <input type="number" class="input-box" maxlength="11" pattern="[0-9]*" autocomplete="off" v-model="formArry.tel"/>
                </div>
            </div>
            <div class="birth column">
                <span class="info-title">生日：</span>
                <div class="layer">
                    <a href="javascript:;" class="dateBox" @click="openPicker">{{formArry.BirthDay}}</a>
                    <a href="javascript:;" class="remove" @click="removeBirth">删除</a>
                </div>
            </div>
              <div class="father column">
                <span class="info-title">父亲：</span> 
                <div class="layer">
                    <input type="text" class="input-box" v-model="father"/>
                    <a href="javascript:;" class="remove" @click="removeFather">删除</a>
                </div>
            </div>
            <div class="partner column">
                <span class="info-title">配偶：</span> 
                 <div class="layer">
                    <div class="list" v-for='(list,key) in detailsArry.partner' >
                        <input type="text" class="input-box" v-model="detailsArry.partner[key]"/>
                        <a href="javascript:;" class="remove" @click="removePartner(key)">删除</a>
                    </div>
                    <div class="list">
                        <a href="javascript:;" class="fix" @click="addPartner">添加配偶</a>
                    </div>
                </div>
            </div>
            <div class="child column">
                <span class="info-title">儿子：</span>
                <div class="layer">
                     <div class="list" v-for='(list,key) in detailsArry.children' v-if="list.sex == 'man'">
                        <input type="text" class="input-box" v-model="detailsArry.children[key].name"/>
                        <a href="javascript:;" class="remove" @click="remove(key)">删除</a>
                    </div>
                    <div class="list">
                        <a href="javascript:;" class="fix" @click="addChild('man')">添加儿子</a>
                    </div>
                </div>
            </div>
            <div class="child column">
                <span class="info-title">女儿：</span>
                <div class="layer">
                     <div class="list" v-for='(list,key) in detailsArry.children' v-if="list.sex == 'woman'">
                        <input type="text" class="input-box" v-model="detailsArry.children[key].name"/>
                        <a href="javascript:;" class="remove" @click="remove(key)">删除</a>
                    </div>
                    <div class="list">
                        <a href="javascript:;" class="fix" @click="addChild('woman')">添加女儿</a>
                    </div>
                </div>
            </div>
            <div class="btn-full">
                <a href="javascript:;" class="finish">完成</a>
            </div>            
        </div>
        <!-- 时间选择器 -->
        <mt-datetime-picker ref="picker" type="date" year-format="{value} 年" :startDate='startTime' :endDate='endTime' month-format="{value} 月" date-format="{value} 日" v-model="pickerValue"></mt-datetime-picker>
    </div>
</template>
<script>
import { OperationNumber, timetrans } from '../common/mixins.js'

export default {
    name:"TreeForm",
    data(){
        return{
            detailsArry:'',
            father:'',
            noScroll:false,
            pickerValue:'',
            startTime:new Date('1900','1','1'),
            endTime:new Date(),
            formArry:{
                tel:'',
                BirthDay:''
            }
        }
    },
    created(){
        this.detailsArry = this.$store.getters.getDetailsArry
    },
    watch:{
        pickerValue(){
            this.formArry.BirthDay = timetrans(this.pickerValue.valueOf())
        }
    },
    methods:{
        openPicker(){
            this.$refs.picker.open()
        },
        addPartner(){
            let partner = this.detailsArry.partner
            partner.push('')
        },
        addChild(msg){
            let child = this.detailsArry.children
            child.push({name:'',sex:msg,id:OperationNumber(9)})
        },
        removePartner(key){
             this.detailsArry.partner.splice(key,1)
        },
        remove(key){
            this.detailsArry.children.splice(key,1)
        },
        removeFather(){
            this.father = ''
        },
        removeBirth(){
            this.formArry.BirthDay = ''
        }
    }
}
</script>

<style scoped>
.fl-r{
    float: right;
}

.btn-full{
    padding: 1.25rem /* 20/16 */;
    margin-top: 1.875rem /* 30/16 */;
}

.info{
    padding-top: 1.25rem /* 20/16 */;
    padding-bottom: 5rem /* 80/16 */;
}

.hd-bar{
    padding: .625rem /* 10/16 */ 1.25rem /* 20/16 */;
}

.info-title{
    display: block;
    float: left;
    width: 20%;
    text-align: right;
    color: #666;
}
.column{
  height: 2.875rem /* 46/16 */;
  line-height: 2.875rem /* 46/16 */;
  width: 100%;
}

.avater{
    margin-bottom: 1.25rem /* 20/16 */;
}

a.delete{
    color: red;
}

a.finish{
    text-align: center;
    display: block;
    height: 2.875rem /* 46/16 */;
    line-height: 2.875rem /* 46/16 */;
    background: #fdd000;
    color: #000;
    border-radius: 4px;
}

a.finish:active{
    background: #ffba00;
}

.avater a{
    text-align: center;
    display: block;
    font-size: 14px;
    height: 2rem /* 32/16 */;
    line-height: 2rem /* 32/16 */;
}

.acater-box{
    margin: 0 auto;
    width: 4.5rem /* 72/16 */;
    height: 4.5rem /* 72/16 */;
    overflow: hidden;
    border-radius: 50%;
}

.list{
    position: relative;
}

.list::before,
.layer::before{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #ededed;
}

.input-box,.dateBox{
    border: none;
    width: 80%;
    color: #333;
}

a{
    color: #0c64ff;
}

a.remove{
    display: block;
    width: 20%;
    float: right;
    text-align: center;
    font-size: .875rem /* 14/16 */;
}

.layer{
    width: 80%;
    float: left;
    position: relative;
}

.dateBox{
    display: block;
    height: 2.875rem /* 46/16 */;
    float: left;
}

.father,.partner,.child{
    margin-top: 1.25rem /* 20/16 */;
    height: auto;
    overflow: hidden;
}

.mint-datetime{
 
}
</style>
