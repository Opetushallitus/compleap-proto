<template>
  <div>
    <transition name="fade" appear>
      <div class="header-bg">&nbsp;</div>
    </transition>
    <div class="header d-flex align-items-center">
      <div>
        <h1 style="font-size: 4rem;">
          <span class="font-weight-light">Find</span><br>
          <span class="font-weight-bold"> your path!</span>
        </h1>
        <button type="button" class="mt-5 px-5 btn-lg btn-warning" style="padding-top: .7em;">Start educational journey</button>
      </div>
    </div>
    <div class="content d-flex flex-column align-items-center">
      <h2 class="pb-7">
        <span class="font-weight-light">What’s in it for me?</span>
      </h2>
      <div class="d-flex flex-row">
        <div class="d-flex flex-column align-items-center p-3">
          <img class="pb-5" src="../assets/images/id-card.svg" />
          <h5>Create competence profile</h5>
          <p>At as in understood an remarkably solicitude. Mean them very seen she she. Use totally written the observe pressed justice.</p>
          <a href="/readmore">Read more</a>
        </div>
        <div class="d-flex flex-column align-items-center p-3">
          <img class="pb-5" src="../assets/images/hat.svg" />
          <h5>Compare educational options</h5>
          <p>At as in understood an remarkably solicitude. Mean them very seen she she. Use totally written the observe pressed justice.</p>
          <a href="/readmore">Read more</a>
        </div>
        <div class="d-flex flex-column align-items-center p-3">
          <img class="pb-5" src="../assets/images/path.svg" />
          <h5>Explore educational map</h5>
          <p>At as in understood an remarkably solicitude. Mean them very seen she she. Use totally written the observe pressed justice.</p>
          <a href="/readmore">Read more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
@import '../style/bootstrap-custom/custom.scss';

.header {
  height: 640px;
  overflow: visible;
  position: relative;
}
.header-bg {
    background-image: url('../assets/images/hero-bg.jpg');
    background-repeat: no-repeat;
    background-position: top center;
    width: 100%;
    position: absolute;
    height: 640px;
    top: 0;
    left: 0;
}
h3 {
  text-transform: uppercase;
  font-size: 1.5em;
}

button {
  text-transform: uppercase;
}
</style>
