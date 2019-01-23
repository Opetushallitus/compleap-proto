<template>
  <form enctype="multipart/form-data" novalidate>
    <div class="d-flex flex-column align-items-center pb-3 dropbox">
      <input type="file" :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target)" accept="application/pdf" class="input-file">
      <img src="../assets/images/europass.png" />
      <strong>
        <div v-if="!isSaving">
          <span v-if="uploadedFiles.length === 0">
            <img src="../assets/images/attachment.svg" />
            Add your EuroPass CV as an attachment
          </span>
          <span v-if="uploadedFiles.length >= 1">
            <img src="../assets/images/attachment.svg" />
            Add a new EuroPass CV
          </span>
        </div>
        <div v-if="isSaving">
          Uploading your CV...
        </div>
      </strong>
    </div>
    <div class="d-flex flex-column align-items-center">
      <small v-if="uploadedFiles.length >= 1">
        <a download :href="uploadedFiles[0].url" target="_blank">{{uploadedFiles[0].fileName}}</a>
      </small>
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { upload } from '../api/upload.js'
const STATUS_INITIAL = 0
const STATUS_SAVING = 1
const STATUS_SUCCESS = 2
const STATUS_FAILED = 3

export default {
  name: 'EuroPass',
  methods: {
    ...mapActions(['getPersonalData', 'setPersonalData']),
    reset () {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL
      this.uploadedFiles = []
      this.uploadError = null
    },
    save (formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING
      upload(formData)
        .then(x => {
          this.uploadedFiles = [].concat(x)
          this.currentStatus = STATUS_SUCCESS
        })
        .catch(err => {
          this.uploadError = err.response
          this.currentStatus = STATUS_FAILED
        })
    },
    filesChange (file) {
      this.reset()
      const formData = new FormData()
      formData.append(file.name, file.files[0], file.files[0].name)
      this.save(formData)
    }
  },
  mounted () {
    this.reset()
  },
  computed: {
    ...mapState([
      'personalData'
    ]),
    isInitial () {
      return this.currentStatus === STATUS_INITIAL
    },
    isSaving () {
      return this.currentStatus === STATUS_SAVING
    },
    isSuccess () {
      return this.currentStatus === STATUS_SUCCESS
    },
    isFailed () {
      return this.currentStatus === STATUS_FAILED
    }
  },
  data () {
    return {
      modal: {
        modalView: 'edit',
        activeModal: '' // edit
      },
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'pdf'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../style/bootstrap-custom/custom.scss';
h4 {
  font-size: 1.125em;
  text-transform: uppercase;
}
.dropbox {
  position: relative;
  cursor: pointer;
}
.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
}
</style>
