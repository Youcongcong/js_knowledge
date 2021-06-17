const arr = [
  {
    id: 1
  },
  {
    id: 2
  }
]
// [1,2,3].map(x=>x+1)
for (let i = 0, item; item = arr[i++];) {
  console.log(item)
}
const res = arr.filter(x => x.id == 1)
console.log(res)
