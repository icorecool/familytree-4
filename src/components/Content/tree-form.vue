<template>
    <div class="treeForm">
        <div class="info">
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
                    <a href="javascript:;" class="dateBox" @click="openPicker">{{formArry.pickerValue}}</a>
                    <a href="javascript:;" class="remove">删除</a>
                </div>
            </div>
              <div class="father column">
                <span class="info-title">父亲：</span> 
                <div class="layer">
                    <input type="text" class="input-box" v-model="father"/>
                    <a href="javascript:;" class="remove">删除</a>
                </div>
            </div>
            <div class="partner column">
                <span class="info-title">配偶：</span> 
                 <div class="layer">
                    <div class="list" v-for='(list,key) in detailsArry.partner' >
                        <input type="text" class="input-box" v-model="detailsArry.partner[key]"/>
                        <a href="javascript:;" class="remove">删除</a>
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
                        <a href="javascript:;" class="remove" @click="remove(list)">删除</a>
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
                        <a href="javascript:;" class="remove">删除</a>
                    </div>
                    <div class="list">
                        <a href="javascript:;" class="fix" @click="addChild('woman')">添加女儿</a>
                    </div>
                </div>
            </div>            
        </div>
        <!-- 时间选择器 -->
        <mt-datetime-picker ref="picker" type="date" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" v-model="formArry.pickerValue"></mt-datetime-picker>
    </div>
</template>
<script>
import { OperationNumber } from '../common/mixins.js'

export default {
    name:"TreeForm",
    data(){
        return{
            detailsArry:'',
            father:'',
            formArry:{
                tel:'',
                pickerValue:''
            }
        }
    },
    created(){
        this.detailsArry = this.$store.getters.getDetailsArry
        console.log(this.detailsArry)
    },
    methods:{
        openPicker(){
            this.$refs.picker.open()
        },
        addPartner(){
            let partner = this.detailsArry.partner
            partner.push('')
        },
        remove(list){
            console.log(list )
        },
        addChild(msg){
            let child = this.detailsArry.children
            child.push({name:'',sex:msg,id:OperationNumber(9)})
        }
    }
}
</script>

<style scoped>
.info{
    padding:3.125rem /* 50/16 */ 1.25rem /* 20/16 */ 6.25rem /* 100/16 */;
}


.info-title{
    display: block;
    float: left;
    width: 20%;
    text-align: right;
}
.column{
  height: 2.875rem /* 46/16 */;
  line-height: 2.875rem /* 46/16 */;
  width: 100%;
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
</style>
