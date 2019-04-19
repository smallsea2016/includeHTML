# includeHTML

使用include自定义标签+jq插入html片段到页面中

## html
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>html实现include</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <ul id="j-ul"> 
      <li>非洲</li>
      <li>大洋洲</li>
      <li>亚洲</li>
      <li>美洲</li>
      <li>欧洲</li>
  </ul>
  <include src="a.tpl"></include>
  <include src="b.tpl"></include>

</body>
</html>
```

## js

```
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
```
