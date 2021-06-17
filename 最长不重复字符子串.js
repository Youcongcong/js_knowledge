// function lengthOfLongestSubstring (s) {
//   const arr = []
//   for (let i = 0; i < s.length; i++) {
//     const index = arr.indexOf(s[i])
//     if (index !== -1) {
//       arr.splice(0, index + 1)
//     }
//     arr.push(s[i])
//   }
//   console.log(arr)
// }
// lengthOfLongestSubstring('123434')
