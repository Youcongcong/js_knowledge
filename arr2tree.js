const arr = [
  {
    id: 1,
    name: 11111,
    parent: '0'
  },
  {
    id: 2,
    name: 22,
    parent: '1'
  },
  {
    id: 3,
    name: 333,
    parent: '2'
  },
  {
    id: 4,
    name: 333,
    parent: '2'
  }
]

function list2tree (arr) {
  var map = {}
  arr.forEach((item, index) => {
    map[item.id] = index
    item.children = []
  })
  console.log(map, 'map')
  var root = []
  arr.forEach((item, index) => {
    if (item.parent == '0') {
      root.push(item)
    } else {
      console.log(arr, '-----')
      arr[map[item.parent]].children.push(item)
    }
  })
  return root
}

list2tree(arr)
