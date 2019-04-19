'use strict';
/**
 * inlcude加载html
 * @param  {Function} cb [回调函数，携带一个参数，返回html内容]
 */
function includeHTML(cb){     
  var $include = $("include");   
  //遍历include自定义标签
  $include.each(function() {
    var $this = $(this),
        $src = $this.attr("src");
    $this.load($src,function(html) {
      $this.after(html).remove(); //加载的文件内容写入到当前标签后面并移除当前标签
      if (cb && typeof cb === 'function') {
        cb(html)
      }
    })
  });
}