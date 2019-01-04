<template>
  <div id="app" class="pt-0 pb-5 px-5">
    <router-view/>
    <div class="footer pt-6 mt-7 pb-6 mb-7 border-top">
      <h4>Compleap.eu</h4>
      <img align="right" src="./assets/images/eu.png" />
      <div class="p-0 m-0 col-8">
        <p>CompLeap approaches competence development as a lifelong process. Lifelong learning enhances individuals adaptability and flexibility to train and retrain, enabling individuals to answer to changing labor market needs.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './style/typography.scss';
@import './style/variables.scss';
@import './style/bootstrap-custom/custom.scss';

#app {
  max-width: 1004px;
  margin: 0 auto;
}

.fade-enter-active, .fade-leave-active {
  transition: all 1s;
  opacity: 1;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
