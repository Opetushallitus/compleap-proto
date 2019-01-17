<template>
  <div>
    <ul class="mt-0 mb-2 p-0 pt-2">
      <li v-for="(degree, index) in personalData.degrees" :key="index" class="d-flex align-items-start degree" v-on:click="editDegree(index)">
        <img src="../assets/images/degree.svg" class="pr-3 pt-1" />
        <div class="pb-3">
          <strong>{{degree.name}}</strong>
          <span v-if="degree.verified" class="text-uppercase text-success"><small>&nbsp;&nbsp;✓ Verified</small></span>
          <br />
          <small>{{degree.location}}</small>
        </div>
      </li>
    </ul>
    <modal v-if="modal.activeModal==='edit'" @close="closeModal()" :headerBorder="true" :bgSplit="false">
      <div slot="header">
        <h4>Edit education</h4>
      </div>
      <div slot="body" v-if="modal.modalView==='loading'">
        <div class="d-flex flex-column mt-5 align-items-center">
          <div class="circle-loader">
            <div class="checkmark draw"></div>
          </div>
        </div>
      </div>
      <div slot="body" v-if="modal.modalView==='edit'">
        <div class="rating-container">
          <h5>Edit yo ting</h5>
          <p>{{personalData.degrees[editId].name}}</p>
        </div>
      </div>
      <div slot="footer">
        <button class="btn btn-text mr-5" v-on:click="closeModal()">Cancel</button>
        <button class="btn btn-secondary mr-2">Remove</button>
        <button class="btn btn-warning">Save</button>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import modal from '@/components/modal.vue'

export default {
  name: 'Education',
  components: {
    'modal': modal
  },
  methods: {
    ...mapActions(['getPersonalData']),
    openModal (id) {
      this.modal.modalView = 'edit'
      this.modal.activeModal = id
    },
    closeModal () {
      this.modal.activeModal = ''
    },
    editDegree (degree) {
      this.editId = degree
      this.openModal('edit')
    }
  },
  computed: mapState([
    'personalData'
  ]),
  data () {
    return {
      modal: {
        modalView: 'edit',
        activeModal: '', // edit
        editId: ''
      }
    }
  },
  created () {
    // this.getPersonalData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../style/bootstrap-custom/custom.scss';
ul {
  list-style-type: none;
  div {
    line-height: 1em;
  }
}
.degree:hover {
  cursor: pointer;
  background-image: url('../assets/images/edit.svg');
  background-repeat: no-repeat;
  background-position: right top;
}
h4 {
  font-size: 1.125em;
  text-transform: uppercase;
}
</style>
