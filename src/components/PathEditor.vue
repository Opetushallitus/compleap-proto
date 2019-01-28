<template>
  <div class="path-editor w-100">
    <p class="text-center">Edit your path</p>
    <div id="cy"></div>
  </div>
</template>

<script>
import cytoscape from 'cytoscape'
// eslint-disable-next-line
let cy = {}

export default {
  name: 'PathEditor',
  data () {
    return {}
  },
  mounted () {
    cy = cytoscape({
      container: document.getElementById('cy'),
      elements: [
        {
          data: { id: 'a', label: 'You’re here :)' }
        },
        {
          data: { id: 'b', label: '' }
        },
        {
          data: { id: 'ab', source: 'a', target: 'b' }
        }
      ],
      style: [ // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': '#666',
            'label': 'data(label)'
          }
        },

        {
          selector: 'edge',
          style: {
            'width': 1,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle'
          }
        }
      ],
      layout: {
        name: 'grid',
        rows: 1
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#cy {
  width: 100%;
  height: 20em;
}
</style>
