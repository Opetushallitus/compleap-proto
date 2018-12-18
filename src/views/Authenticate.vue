<template>
  <div>
    <div class="content mt-7 d-flex flex-column align-items-center">
      <img src="../assets/images/strong-auth.svg" />
      <h1 class="pt-7">
        Strong authentication
      </h1>
      <h5>Provided by a trusted service provider</h5>
      <div class="d-flex flex-row">
        <router-link to="/welcome" tag="button" class="btn btn-large">Continue to the service ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'authenticate'
}
</script>

<style lang="scss">
@import '../style/bootstrap-custom/custom.scss';
.footer {
  display: none;
}
.nav {
  display: none;
}
.btn {
  border: 2px solid #0041DC;
  border-radius: 3em;
  color: #0041DC;
  padding: 1em 3em;
  margin-top: 3em;
  font-size: 1.6em;
  font-weight: bold;
}
</style>
