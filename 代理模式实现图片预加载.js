
/*现在我们通过 proxyImage 间接地访问 MyImage。
 *proxyImage 控制了客户对 MyImage 的访问，并 且在此过程中加入一些额外的操作，
 *比如在真正的图片加载好之前，先把 img 节点的 src 设置为 一张本地的 loading 图片。
 */
var myImage = (function(){
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return{
        setSrc :function(src){
            imgNode.src = src
        }
    }
})()

var proxyImage = (function(){
    var img = new Image;
    img.onload = function(){
        myImage.setSrc(this.src)
    }
    return{
        setSrc:function(src){
            myImage.setSrc('../photo/0BE5596252BD92CAC4F25812EEA3D244副本.jpg')
            img.src = src
        }
    }
})()
proxyImage.setSrc('http:// imgcache.qq.com/music/photo/k/000GGDys0yA0Nk.jpg')