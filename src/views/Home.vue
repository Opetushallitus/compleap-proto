<template>
  <div>
    <div class="header d-flex align-items-center">
      <div>
        <h3 class="text-success">Compleap</h3>
        <h2>
          <span class="font-weight-light text-primary">Löydä</span><br>
          <span class="font-weight-bold text-primary"> oma polkusi!</span>
        </h2>
        <button type="button" class="mt-5 btn btn-primary">Aloita opintomatkasi </button>
      </div>
    </div>
    <div class="content d-flex flex-column align-items-center">
      <h4 class="pb-7">
        <span class="font-weight-bold text-primary">Mitä voin tehdä CompLeapissa?</span>
      </h4>
      <div class="d-flex flex-row">
        <div class="d-flex flex-column align-items-center p-3">
          <img class="pb-5" src="../assets/images/id-card.svg" />
          <h5>Luoda osaamisprofiilin</h5>
          <p>At as in understood an remarkably solicitude. Mean them very seen she she. Use totally written the observe pressed justice.</p>
          <a href="">Lue lisää</a>
        </div>
        <div class="d-flex flex-column align-items-center p-3">
          <img class="pb-5" src="../assets/images/hat.svg" />
          <h5>Luoda osaamisprofiilin</h5>
          <p>At as in understood an remarkably solicitude. Mean them very seen she she. Use totally written the observe pressed justice.</p>
          <a href="">Lue lisää</a>
        </div>
        <div class="d-flex flex-column align-items-center p-3">
          <img class="pb-5" src="../assets/images/path.svg" />
          <h5>Luoda osaamisprofiilin</h5>
          <p>At as in understood an remarkably solicitude. Mean them very seen she she. Use totally written the observe pressed justice.</p>
          <a href="">Lue lisää</a>
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

<style lang="scss">
@import '../style/bootstrap-custom/custom.scss';

.header {
  height: 500px;
}

h3 {
  text-transform: uppercase;
  font-size: 1.5em;
}

button {
  text-transform: uppercase;
}
</style>
