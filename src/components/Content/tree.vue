<template>
    <div class="content">
        <ul class="tree-chart">
            <li v-for='folder in folders'>
                <tree-folder v-bind:folder="folder"></tree-folder>
            </li>
            <div class="generations">
                <ul>
                    <li v-for='(list,index) in Generations' v-if='index > 0'>
                        {{index}}世
                    </li>
                </ul>
            </div>
        </ul>
        <div class="captions">
            <ul>
                <li v-for="list in captions">
                    <i class="color-lump" :style="{background:list.colorLump}"></i>
                    <span class="txt">{{list.txt}}</span>
                </li>
            </ul>
        </div>
        <div class="number-prople">
            <span>家族共</span>
            <span class="number">{{NumberOfPeople}}</span>
            <span>人</span>    
        </div>

    </div>
</template>
<script>
import axios from "axios"
import TreeFolder from './commponets/tree-folder.vue'
import { traverseDF,getSum } from '../common/mixins.js'

export default {
    name:"tree",
    components: {
       TreeFolder
    },
    data(){
        return{
           captions:[
                {
                    colorLump:"#2196F3",
                    txt:"后代(男)"
                },
                {
                   colorLump:"#E91E63",
                   txt:"后代(女)"
                },
                {
                    colorLump:"#fff",
                    txt:"配偶"
                }
           ],
           folders:'',
           NumberOfPeople:'',
           Generations:''
        }
    },
    created(){
        const self = this
        axios.get('http://oss-hys.oss-cn-hangzhou.aliyuncs.com/tree.json')
        .then(response => {
            self.folders = response.data.folders

            let partnerArry = []
            let generations = []

            traverseDF(this.folders).forEach(value=>{
                if(value.partner){
                    partnerArry.push(value.partner.length)
                }
                if(value.children){
                    generations.push(value.children)
                }
            })

            self.Generations = generations
            self.NumberOfPeople = traverseDF(this.folders).length + getSum(partnerArry)
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>
<style scoped>
.content {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: scroll;
}

.tree-chart {
    position: absolute;
    top: 0;
    left: 0;
    padding: 5rem /* 80/16 */ 1.25rem /* 20/16 */;
    display: inline-block;
}

.captions {
    position: fixed;
    left: 0;
    top: 2.875rem /* 46/16 */;
}

.captions ul {
    height: 1.25rem /* 20/16 */;
    background: rgba(0, 0, 0, 0.8);
    padding: .125rem /* 2/16 */ .625rem /* 10/16 */;
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
}

.captions ul li {
    display: inline-block;
    height: 1.25rem /* 20/16 */;
    margin-right: 10px;
}

.captions ul li:last-child {
    margin-right: 0;
}

.captions ul li i {
    display: block;
    width: 0.625rem /* 10/16 */;
    height: 0.625rem /* 10/16 */;
    float: left;
    margin-right: 6px;
    margin-top: 0.3125rem /* 5/16 */;
}

.captions ul li span {
    display: block;
    font-size: .75rem /* 12/16 */;
    color: #fff;
    float: left;
    height: 1.25rem /* 20/16 */;
    line-height: 1.25rem /* 20/16 */;
}

.number-prople{
    position: fixed;
    right: 0;
    top: 2.875rem /* 46/16 */;
    font-size: .8125rem /* 13/16 */;
    height: 1.25rem /* 20/16 */;
    line-height: 1.25rem /* 20/16 */;
    padding:.125rem /* 2/16 */ .625rem /* 10/16 */;
    color: #666;
}

.number-prople span.number{
    font-size: 1rem /* 16/16 */;
    font-weight: 700;
    color: #F44336;
}

.generations{
    margin-top: 1.25rem /* 20/16 */;
    height: 4.375rem /* 70/16 */;
    background: linear-gradient(to right, #00c3ff, #ffff1c);
    border-radius: 4.375rem /* 70/16 */;
}

.generations ul{
    line-height: 4.375rem /* 70/16 */;
}

.generations ul li{
    display: inline-block;
    width: 7.5rem /* 120/16 */;
    text-align: center;
    color: #fff;
    font-size: 1.5rem /* 24/16 */;
    font-weight: 700;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    margin-left: -1px;
}

.generations ul li:first-child{
    border-left: none;
}
</style>
