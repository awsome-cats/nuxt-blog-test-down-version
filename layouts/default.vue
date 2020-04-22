<template>
  <div>
    <Header />
    <SideNav />
    <SideNavToggle />
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/Navigation/Header'
import SideNav from '~/components/Navigation/SideNav'
import SideNavToggle from '~/components/Navigation/SideNavToggle'
export default {

  components: {
    Header,
    SideNav,
    SideNavToggle
  }

}
</script>

<style>
html {
  font-family: 'open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>
