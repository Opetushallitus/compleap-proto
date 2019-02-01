<template>
  <div class="nav d-flex justify-content-center align-items-end ml-7">
    <router-link to="/profile">My profile</router-link>
    <router-link to="/education">Education</router-link>
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../style/bootstrap-custom/custom.scss';

.nav {
  width: 100%;
  height: 100%;
  position: relative;
  a {
    padding: 0 .2em;
    margin: 0 1em;
    font-weight: bold;
    color: $yellow;
    text-transform: uppercase;
    letter-spacing: .08em;
    height: 2em;
    &.router-link-exact-active {
      border-bottom: 3px solid $yellow;
    }
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
