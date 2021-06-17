function LinkedList() {
  // constructor(params) {
  //   this.head = null
  // }
  this.head = null
  var Node = function (val) {
    this.data = val
    this.next = null
  }
  this.append = function (val) {
    var node = new Node(val)
    var current
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
  }
  this.resvere = function (head) {
    let pre = null
    var cur = head
    while (cur !== null) {
      const next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
    return pre
  }
}
var link = new LinkedList()
link.append(1)
link.append(2)
link.append(3)
link.append(4)
link.append(5)

const head = link.head
console.log(head)
console.log(link.resvere(head))
