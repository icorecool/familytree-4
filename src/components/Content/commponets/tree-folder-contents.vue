<template>
  <ul class="children">
    <li v-for="child in children">
      <tree-folder v-if="child.children" :folder="child"></tree-folder>
        <div class="case" v-else>
            <a class="info" :class="child.sex" @click="GoToDetails(child)">
                <div class="name">{{ child.name }}</div>
                <div class="partner" v-show="!!child.partner" v-for='list in child.partner'>{{ list }}</div>
            </a>
        </div>
    </li>
  </ul>
</template>
<script>
  import TreeFolder from './tree-folder'
  export default {
    props: ['children'],
    components: {
      TreeFolder
    },
    methods:{
        GoToDetails(child){
            this.$store.commit('getDetailsArry', child)
            this.$router.push({
                path:`/details/${child.id}`,
            })
        }
    }
  }
</script>
<style scoped>
.case{
    width: 6.25rem /* 100/16 */;
    background: transparent;
    color: #fff;
    text-align: center;
    position: relative;
    line-height:2.25rem /* 36/16 */;
    padding: .625rem /* 10/16 */;
}

.case::before{
    content: '';
    position: absolute;
    top: 50%;
    width: .625rem /* 10/16 */;
    height: 1px;
    background: #9E9E9E;
    margin-top: -1px;
}

.case::before{
    left: 0;
}

a.info{
    background: transparent;
    overflow: hidden; 
    text-overflow: ellipsis; 
    white-space: nowrap;
    text-align: center;
    display: block;
}

li{
    position: relative;
}

li::before,
li::after{
    content: '';
    position: absolute;
    left: 0;
    width: 1px;
    height:50%;
    background: #9E9E9E;
}

li::before{
    bottom: 50%;
}

li::after{
    top:50%;
}

li:last-child::after{
    display: none;
}

li:first-child::before{
    display: none;
}

.info.man:active{
    background: #1281da;
    opacity: 1;
}

.info.man{
    background: #2196F3;
    opacity: .9;
}

.info.woman:active{
     background: #d4084d;
     opacity: 1;
}

.info.woman{
    opacity: .9;
    user-select: none;
}


.info.woman .name{
    background: #E91E63;
}

.info.woman .partner{
    border-bottom: 1px solid #ddd;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    background: #fff;
    color: #333;
}
</style>
