<template>
    <div class="details">
        <div class="details-list">
            <ul>
                <li>{{detailsArry.name}}</li>
                <div class="children-list" v-for='list in detailsArry.children'>
                    {{list.name}}
                </div>
            </ul>
        </div>
    </div>    
</template>
<script>

export default {
    name:"Details",
    data(){
        return{
            detailsArry:this.$store.state.detailsArry
        }
    },
    created(){
        if(this.$store.state.detailsArry.length === 0){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>

</style>
