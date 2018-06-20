<template>
    <div class="list">
        <div class="index-list">
            <div class="title-fixed" v-if='scrollTop > 0'>{{nodeLetter}}</div>
            <div class="item" v-for='item in ListArry' :name="'point'+item.letter">
                <a href="javascript:;" class="item-title">
                    {{item.letter}}
                </a>
                <div class="item-name" v-for='list in item.data'>{{list}}</div>
            </div>
        </div>
        <div class="mod-list">
            <ul class="indexlist-navlist">
                <li class="indexlist-navitem" v-for='(list,i) in ListArry'>
                    <v-touch tag='a' v-on:Swipe="gotoNode(i)">{{list.letter}}</v-touch>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { traverseDF,pySegSort,getElementsClass } from '../common/mixins.js'

export default {
    name:'List',
    data(){
        return{
            ListArry:'',
            scrollTop:'',
            nodeLetter:''
        }
    },
    created(){
        let listDataName = []
        let listDataPartner = []
        let listData = []

        traverseDF(this.$store.getters.getFoldersArry).forEach( data => {
            if(!!data.partner){
                listDataPartner = listDataPartner.concat(data.partner)
            }
            listDataName = listDataName.concat(data.name)
        })

        listData = listDataName.concat(listDataPartner)
        this.ListArry =  pySegSort(listData)
    },
    mounted(){
       window.addEventListener('scroll', this.hanleScroll)
    },
    methods:{
        hanleScroll () {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            this.scrollTop = scrollTop
            getElementsClass('item').forEach((e,i) =>{
               let t = e.offsetTop
               let h = e.offsetHeight
                if(t < scrollTop && scrollTop < t + h){
                    this.nodeLetter = this.ListArry[i].letter
                }
            })
        },
        gotoNode(i){
            event.preventDefault()
            this.nodeLetter = this.ListArry[i].letter
        }
    }
}
</script>
<style scoped>
.list{

}

.mod-list,.indexlist-navlist{
    margin: 0;
    max-height: 100%;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
}

.mod-list{
    position: fixed;
    right: 0;
    top: 0;
    width: 1.25rem /* 20/16 */;
    height: 100%;
    text-align: center;
    justify-content: center;
    -webkit-box-pack: center;
}

.indexlist-navitem{
    font-size: .75rem /* 12/16 */;
    -webkit-touch-callout: none;
    user-select: none;
    -webkit-touch-callout: none;
    font-weight: 700;
}

.indexlist-navitem a{
    display: block;
    color: #0c64ff;
}

.index-list{
    padding-bottom: 2.8125rem /* 45/16 */;
}

.item{
    width: 100%;
    border-top: 1px solid #ededed;
}

.title-fixed{
    position: fixed;
    top: 0;
    width: 100%;
}

a.item-title{
    display: block;
    color: #333;
}

.item-title,.title-fixed{
    height: 2rem /* 32/16 */;
    line-height: 2rem /* 32/16 */;
    background: #f2f2f2;
    padding-left: 1.25rem /* 20/16 */;
}

.item-name{
    height: 3rem /* 48/16 */;
    line-height: 3rem /* 48/16 */;
    margin-left: 1.25rem /* 20/16 */;
    border-bottom: 1px solid #ededed;
    color: #333;
}

.item-name:last-of-type{
    border-bottom: none;
}
</style>
