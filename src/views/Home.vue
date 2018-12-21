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
        <button type="button" @click="openModal('login')" class="mt-5 px-5 btn-lg btn-warning font-weight-bold">
          Start educational journey
          <img class="pl-3" src="../assets/images/plane.svg" />
        </button>
      </div>
    </div>
    <div class="content mt-7 d-flex flex-column align-items-center">
      <h2 class="pb-7">
        <span class="font-weight-light">What’s in it for me?</span>
      </h2>
      <div class="d-flex flex-row">
        <div class="d-flex flex-column align-items-center p-3 text-center">
          <img class="pb-5" src="../assets/images/id-card.svg" />
          <h5>Create competence profile</h5>
          <p>At as in understood an remarkably solicitude. Mean them very seen she she. Use totally written the observe pressed justice.</p>
          <a href="/readmore">Read more</a>
        </div>
        <div class="d-flex flex-column align-items-center p-3 text-center">
          <img class="pb-5" src="../assets/images/hat.svg" />
          <h5>Compare educational options</h5>
          <p>At as in understood an remarkably solicitude. Mean them very seen she she. Use totally written the observe pressed justice.</p>
          <a href="/readmore">Read more</a>
        </div>
        <div class="d-flex flex-column align-items-center p-3 text-center">
          <img class="pb-5" src="../assets/images/path.svg" />
          <h5>Explore educational map</h5>
          <p class="text-nter">At as in understood an remarkably solicitude. Mean them very seen she she. Use totally written the observe pressed justice.</p>
          <a href="/readmore">Read more</a>
        </div>
      </div>
    </div>
    <modal v-if="modal.activeModal==='login'" @close="closeModal()" :headerBorder="false" :bgSplit="true">
      <div slot="header">
        <img src="../assets/images/auth.svg" />
      </div>
      <div slot="body" v-if="modal.modalView==='loading'">
        <div class="d-flex flex-column mt-5 align-items-center">
          <div class="circle-loader">
            <div class="checkmark draw"></div>
          </div>
        </div>
      </div>
      <div slot="body" v-if="modal.modalView==='login'">
        <div class="rating-container d-flex">
          <div class="w-50 pr-7 d-flex flex-column justify-content-between">
            <h5>Login using bank credentials</h5>
            <p>Gives access to your educational profile and more accurate results.</p>
            <router-link to="/authenticate" tag="button" class="py-3 w-100 btn btn-warning font-weight-bold">Login</router-link>
          </div>
          <div class="w-50 pl-7 d-flex flex-column justify-content-between">
            <h2>Continue unidentified</h2>
            <p>Your profile can be edited but not saved until you login.</p>
            <button type="button" class="py-3 w-100 btn btn-secondary font-weight-bold">Continue</button>
          </div>
        </div>
      </div>
      <div slot="footer">
        &nbsp;
      </div>
    </modal>
    <welcome v-if="modal.activeModal==='welcome'" :showModal="true" />
  </div>
</template>

<script>
// @ is an alias to /src
import modal from '@/components/modal.vue'
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'home',
  components: {
    'modal': modal,
    'welcome': Welcome
  },
  props: {
    'welcome': Boolean
  },
  watch: {
    '$route' (to, from) {
      this.closeModal()
    }
  },
  data () {
    return {
      modal: {
        activeModal: '', // login
        modalView: 'login'
      }
    }
  },
  created () {
    if (this.$props.welcome) {
      this.modal.activeModal = 'welcome'
      this.modal.modalView = 'welcome'
    }
  },
  methods: {
    openModal (id) {
      this.modal.modalView = 'login'
      this.modal.activeModal = id
    },
    closeModal () {
      this.modal.activeModal = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/bootstrap-custom/custom.scss';

.header {
  height: 610px;
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
