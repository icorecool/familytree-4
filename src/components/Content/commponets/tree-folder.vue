<template>
  <div class="folder">
    <div class="case">
        <a class="info" :class="folder.sex" href="javascript:;" @click="GoToDetails(folder)">
            <div class="name">{{ folder.name }}</div>
             <div class="partner" v-show="!!folder.partner" v-for='list in folder.partner'>{{ list }}</div>
         </a>
    </div>
    <tree-folder-contents :children="folder.children"></tree-folder-contents>
  </div>
</template>
<script>
  export default {
    props: ['folder'],
    data: function () {
      return {
 
      }
    },
    beforeCreate() {
      this.$options.components.TreeFolderContents = () => import('./tree-folder-contents.vue')
    },
    methods:{
        GoToDetails(folder){
            console.log(folder.id)
            this.$router.push({
                path:`/details/${folder.id}`
            })
        }
    }
  }
</script>
<style scoped>
.folder{
    display: flex;
    flex-wrap:nowrap;
    align-items:Center;
}

.case{
    width: 6.25rem /* 100/16 */;
    background: transparent;
    color: #fff;
    text-align: center;
    line-height:2.25rem /* 36/16 */;
    padding: .625rem /* 10/16 */;
    position: relative;
}

.case::before,
.case::after{
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

.case::after{
    right: 0;
}

a.info{
    background: transparent;
    overflow: hidden; 
    text-overflow: ellipsis; 
    white-space: nowrap;
    text-align: center;
    display: block;
    color: #fff;
}

.info.man:active{
    opacity: 1;
}

.info.man{
    background: #2196F3;
    opacity: .9;
}

.info.man .partner{
    border-bottom: 1px solid #ddd;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    background: #fff;
    color: #333;
}

.folder{

}
</style>

