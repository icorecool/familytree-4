<template>
    <div class="list"></div>
</template>
<script>
import { traverseDF } from '../common/mixins.js'

export default {
    name:'List',
    data(){
        return{
            ListArry:""
        }
    },
    created(){
        this.ListArry = traverseDF(this.$store.state.foldersArry)
    }    
}
</script>
<style scoped>

</style>
