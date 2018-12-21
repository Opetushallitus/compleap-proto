<template>
  <div>
    <div class="header d-flex align-items-center">
      <div>Content</div>
    </div>
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
  height: 100px;
  overflow: visible;
  position: relative;
}

.header-bg {
    width: 100%;
    position: absolute;
    height: 640px;
    top: 0;
    left: 0;
}

</style>
