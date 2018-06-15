<template>
    <div class="details">
        <div class="details-list">
            <div class="info">
                <div class="name">{{detailsArry.name}}</div>
                <div class="partner" v-if='!!detailsArry.partner'>
                    <h3 class="title">配偶:</h3>
                    <div class="partner-list" v-for='list in detailsArry.partner'>{{list}}</div>
                </div>
                <div class="offspring" v-if='!!detailsArry.children'>
                    <h3 class="title">后代:</h3>
                    <ul class="children-list">
                        <li v-for='list in detailsArry.children'>{{list.name}}</li>
                    </ul>
                </div>
            </div>
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
