import cytoscape from 'cytoscape'

const getCytoscape = (container, elements) => {
  {
    let cy = cytoscape(
      {
        container: container,
        userZoomingEnabled: false,
        userPanningEnabled: false,
        boxSelectionEnabled: false,
        autoungrabify: true,
        elements: elements,
        style: [ // the stylesheet for the graph
          {
            selector: 'node',
            style: {
              'background-color': '#333333',
              'label': 'data(label)',
              'text-halign': 'center',
              'text-valign': 'bottom',
              'font-family': 'urw_din',
              'font-size': '9',
              'width': '12',
              'height': '12',
              'text-margin-y': '6'
            }
          },
          {
            selector: 'edge',
            style: {
              'width': 1.4,
              'line-style': 'dashed',
              'line-color': '#D8D8D8',
              'target-arrow-color': '#D8D8D8',
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
    return cy
  }

  export default {
    initCytoscape(container, elements) {
      // onsole.log(container)
      return getCytoscape(container, elements)
    }
  }