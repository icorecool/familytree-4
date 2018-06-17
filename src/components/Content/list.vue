<template>
    <div class="list">
        <mt-index-list>
            <mt-index-section :index='list[0]' :key="index" v-for='(list,index) in ListArry'>
                <mt-cell :title='list[1]'></mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>
<script>
import { traverseDF } from '../common/mixins.js'
import pyfl from 'pyfl'

export default {
    name:'List',
    data(){
        return{
            ListArry:'',
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

        let PY_initials = []

        listData.forEach((data,i)=>{
            PY_initials = PY_initials.concat(pyfl(data[0]))
        })

        const arr = PY_initials.map((a,i)=>{
            var nary = PY_initials.sort()
            // console.log(nary)

            if(nary[i] == PY_initials[i+1]){
                console.log(nary[i])
            }

            return [ a , listData[i] ]
        })

        this.ListArry = arr.sort()

        // console.log(this.ListArry)
    }
}
</script>
<style scoped>

</style>
