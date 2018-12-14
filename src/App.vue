<template>
  <div id="app" class="p-5">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
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

.nav {
  display: none;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#app {
  max-width: 1004px;
  margin: 0 auto;
}

.fade-enter-active, .fade-leave-active {
  transition: all 1s;
  min-height: 100vh;
  opacity: 1;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  min-height: 0vh;
}

</style>
