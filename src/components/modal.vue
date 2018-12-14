<template id="modal-template">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="p-5 modal-container d-flex flex-column" :class="{'bgSplit': bgSplit}">
          <div class="modal-header d-flex justify-content-between" :class="{'border-0': !headerBorder}">
            <slot name="header">
              default header
            </slot>
            <button class="modal-default-button" @click="$emit('close')" title="Sulje">✕</button>
          </div>
          <div class="modal-body">
            <slot name="body">
                  default body
            </slot>
          </div>
          <div class="modal-footer align-self-end">
            <slot name="footer">
              default footer
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  template: '#modal-template',
  props: ['headerBorder', 'bgSplit']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 800px;
  min-height: 450px;
  margin: 0px auto;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  &.bgSplit{
    background: linear-gradient(to right, #ffffff 0%,#ffffff 50%,#efefef 50%,#efefef 100%);
  }
}

.modal-header {
  position: relative;
  h3 {
    margin-top: 0;
  }
}

.modal-content {
  margin: 0;
}

.modal-default-button {
    font-size: 1.8em;
    background: transparent;
    border: 0;
    position: absolute;
    right: 0;
    top: 0;
    &:hover {
      cursor: pointer;
    }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
