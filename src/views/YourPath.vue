<template>
  <div>
    <transition name="fade" appear>
      <div class="header-bg" style="height: 90px;">&nbsp;</div>
    </transition>
    <div class="header d-flex align-items-center">
      <img src="../assets/images/logo.png" style="width: 200px;" />
      <navigation />
    </div>
    <div class="content d-flex flex-column align-items-center mt-6">
      <img src="../assets/images/path-hero.png" class="mb-6"/>
      <h1>What's your path like?</h1>
      <p class="text-center">We all have our unique, lifelong educational path.<br>
      Let’s write a new chapter to your story.</p>
      <path-editor />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import PathEditor from '@/components/PathEditor.vue'

export default {
  name: 'YourPath',
  components: {
    'Navigation': Navigation,
    'PathEditor': PathEditor
  }
}
</script>

<style lang="scss" scoped>
@import '../style/bootstrap-custom/custom.scss';

.header {
  height: 90px;
  overflow: visible;
  position: relative;
}

.header-bg {
    width: 100%;
    position: absolute;
    height: 90px;
    max-height: 90px;
    top: 0;
    left: 0;
    background-color: black;
}
</style>
