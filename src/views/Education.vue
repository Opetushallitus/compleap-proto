<template>
  <div>
    <transition name="fade" appear>
      <div class="header-bg" style="height: 90px;">&nbsp;</div>
    </transition>
    <div class="header d-flex align-items-center">
      <img src="../assets/images/logo.png" style="width: 200px;" />
      <navigation />
    </div>
    <div class="content d-flex pt-7">
      <div class="col-3">
        <img :src="'../profile-images/' + personalData.basicInfo.id + '.png'" style="width: 100px;" />
        <div class="liked-eds" v-if="likedEducations.length > 0">
          <img src="../assets/images/thumb-small.svg" />
          &nbsp;5 liked educations
        </div>
      </div>
      <div class="col-7 text-center">
        <h3>Find your educational match</h3>
        <p>Collect educations to your favorite list so we can suggest better, just the right educational options for you. If you can’t find a suitable one, you can try to complement your profile.</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import { mapState } from 'vuex'

export default {
  name: 'education',
  components: {
    'Navigation': Navigation
  },
  computed: mapState([
    'personalData',
    'likedEducations'
  ])
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
.liked-eds {
  position: absolute;
  bottom: 1em;
  left: 0;
  background-color: white;
  border: 1px solid $gray-200;
  padding: .1em .75em;
  border-radius: .25em;
  font-size: 14px;
}
</style>
