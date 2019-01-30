export let defaultElements = []
defaultElements = [
  {
    data: { id: 'a', label: 'You’re here :)' }
  },
  {
    data: { id: 'b', label: 'GOAL' },
    style: {
      'background-color': '#80E90E'
    }
  },
  {
    data: { id: 'ab', source: 'a', target: 'b' }
  }
]

let elements = {}
// {userId: {goalId: [elements] }}
elements = {
  1001: {
    9001:
      [
        {
          data: { id: 'a', label: 'You’re here :)' }
        },
        {
          data: { id: 'b', label: 'Retail experience' }
        },
        {
          data: { id: 'c', label: 'SALES PERSON' },
          style: {
            'background-color': '#80E90E'
          }
        },
        { data: { id: 'ab', source: 'a', target: 'b' } },
        { data: { id: 'bc', source: 'b', target: 'c' } }
      ]
  }
}
// console.log(elements[1001][9001])

export default elements
