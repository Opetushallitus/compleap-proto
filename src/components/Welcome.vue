<template>
  <div class="welcome">
    <modal v-if="modal.showModal" @close="closeModal()" :headerBorder="false" :bgSplit="false">
      <div slot="header">
        <h2><img src="../assets/images/personal.svg" class="pr-4" />My personal data</h2>
      </div>
      <div slot="body" v-if="modal.modalView==='loading'">
        <div class="d-flex flex-column mt-5 align-items-center">
          <div class="circle-loader">
            <div class="checkmark draw"></div>
          </div>
        </div>
      </div>
      <div slot="body" v-if="modal.modalView==='welcome'">
        <div class="rating-container d-flex">
          <div class="w-50 pr-7 d-flex flex-column justify-content-top">
            <p>We gathered this basic info from the public sources:</p>
            <b><span v-if="personalData.basicInfo">{{personalData.basicInfo.name}}</span></b>
            <b><span v-if="personalData.basicInfo">Age {{personalData.basicInfo.age}}</span></b>
            <b><span v-if="personalData.basicInfo">{{personalData.basicInfo.city}}</span></b>
          </div>
          <div class="w-50 pl-7 d-flex flex-column justify-content-top">
            <p>Enrich your profile with the additional data from these available sources:</p>
            <div v-for="(info, index) in personalData.additionalInfo" :key="index" class="custom-control custom-checkbox">
              <input type="checkbox" checked class="custom-control-input" :id="'InfoCheck'+index">
              <label class="custom-control-label" :for="'InfoCheck'+index">{{info}}</label>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer" >
        <button type="button" class="btn btn-lg btn-light mr-2 font-weight-bold py-3 px-5" v-on:click="$router.push('/')">Cancel</button>
        <button type="button" class="btn btn-lg btn-warning font-weight-bold py-3 px-5" v-on:click="$router.push('/profile')">All good, continue</button>
      </div>
    </modal>
  </div>
</template>

<script>
import modal from '@/components/modal.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Welcome',
  components: {
    'modal': modal
  },
  props: ['showModal', 'userId'],
  methods: {
    ...mapActions(['getPersonalData', 'getUsers']),
    openModal () {
      this.modal.showModal = true
    },
    closeModal () {
      this.modal.showModal = false
    }
  },
  data () {
    return {
      modal: {
        modalView: 'welcome',
        showModal: this.$props.showModal
      }
    }
  },
  computed: mapState([
    'personalData'
  ]),
  created () {
    this.getUsers()
    // Default user id 1001
    this.getPersonalData(this.$props.userId)
  }
}
</script>

<style scoped lang="scss">
</style>
