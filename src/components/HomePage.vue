<template>
  <div class="home-page">

    <div class="container">
      <HeaderBar/>
        <router-view/>
      <FooterTab/>
    </div>
  </div>
</template>

<script>
import Header from './HeaderBar/bar'
import Footer from './FooterTab/tab'

export default {
  name: 'HomePage',
  components:{
    HeaderBar : Header,
    FooterTab : Footer
  }
}
</script>