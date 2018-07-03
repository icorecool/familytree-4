<template>
    <div class="folder">
        <div class="case">
            <div class="info" :class="folder.sex" @touchstart="show_widget(folder)" @touchend="clearLoop" @touchmove="clearLoop" @click="flag && GoToDetails(folder)">
                <div class="name">{{ folder.name }}</div>
                <div class="partner" v-show="!!folder.partner" v-for='list in folder.partner'>{{ list }}</div>
            </div>
        </div>
        <tree-folder-contents :children="folder.children"></tree-folder-contents>
    </div>
</template>
<script>
  export default {
    props: ['folder'],
    data: function () {
      return {
          Loop:null,
          flag:true
      }
    },
    beforeCreate() {
      this.$options.components.TreeFolderContents = () => import('./tree-folder-contents.vue')
    },
    methods:{
        GoToDetails(folder){
           this.$store.commit('getDetailsArry', folder)
           this.$router.push({
                path:`/details/${folder.id}`,
            })
        },
        show_widget(folder){
            clearInterval(this.Loop)
            this.Loop = setTimeout(() =>{
                this.flag = false
                this.$store.commit('getDetailsArry', folder)
                this.$router.push({
                    path:`/tree-form/${folder.id}`,
                })
            },500)
            this.flag = true
        },
        clearLoop(){
            clearInterval(this.Loop)
        }
    }
  }
</script>
<style scoped>
.folder {
    display: flex;
    flex-wrap: nowrap;
    align-items: Center;
}

.case {
    width: 6.25rem /* 100/16 */;
    background: transparent;
    color: #fff;
    text-align: center;
    line-height: 2.25rem /* 36/16 */;
    padding: 0.625rem /* 10/16 */;
    position: relative;
}

.case::before,
.case::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 0.625rem /* 10/16 */;
    height: 1px;
    background: #9e9e9e;
    margin-top: -1px;
}

.case::before {
    left: 0;
}

.case::after {
    right: 0;
}

a.info {
    background: transparent;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    display: block;
    color: #fff;
    position: relative;
}

.widget {
    position: absolute;
    bottom: -3.125rem /* 50/16 */;
    background: #000;
    border-radius: 4px;
    display: flex;
    z-index: 10;
}

.widget a {
    display: inline-block;
    color: #fff;
    text-align: center;
    width: 4.375rem /* 70/16 */;
    font-size: 0.8125rem /* 13/16 */;
    text-align: center;
    height: 2.25rem /* 36/16 */;
    line-height: 2.25rem /* 36/16 */;
    border-right: 1px solid #666;
}

.info.man:active {
    opacity: 1;
}

.info.man {
    background: #2196f3;
    opacity: 0.9;
    user-select: none;
}

.info.man .partner {
    border-bottom: 1px solid #ddd;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    background: #fff;
    color: #333;
}
</style>

