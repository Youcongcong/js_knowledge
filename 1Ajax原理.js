/**
 * Ajax最核心的依赖是浏览器提供的XMLHttpRequest对象
 */
let xhr = null

xhr = new XMLHttpRequest()
// open 第一个参数请求类型 GET或 POST

// 第二 参数请求路径
// 第三 是否异步

xhr.open('POST', 'url', true)

// 注意 设置了POST类型 需要设置请求头的格式

xhr.setRequestHeader('Content-type', 'application-....')
xhr.send('string')

// 如果设置了同步，则返回的数据为 xhr.responseText

// 接下来是异步状态的情况
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.responseText)
  }
}

/**
 * GET和POST请求数据区别
 * · 使用GET请求时参数在URL后面显示，而POST参数则放在send中
 * · GET请求发送数据量小，POST大
 * · POST请求比GET安全，GET会被缓存
 */
