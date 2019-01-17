<template>
  <transition name="fade">
    <div class="box p-5">
      <div class="box-header"><h4>{{$props.header}}</h4></div>
      <div class="box-content">
        <slot>
          default body
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Box',
  props: ['header']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.box-header {
  h4 {
    font-size: 1.125em;
    text-transform: uppercase;
  }
}
</style>
