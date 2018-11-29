<template>
  <div id="app" class="p-5">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './style/typography.scss';
@import './style/variables.scss';
@import './style/bootstrap-custom/custom.scss';

#nav {
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
</style>
