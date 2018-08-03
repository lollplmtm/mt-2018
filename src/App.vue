<template>
  <div id="app">
  <app-header></app-header>
  <app-center></app-center>
  </div>
</template>

<script>

import AppHeader from './components/pages/header/header'
import AppCenter from './components/pages/center/appCenter'
export default {
  name: 'App',
  components: {
      AppHeader : AppHeader,
      AppCenter : AppCenter
  }
}
</script>

<style>

</style>
