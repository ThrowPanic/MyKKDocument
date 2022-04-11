# Word转MD教程

考虑到目前有许多使用Word格式编写的教程，为了方便快速的转换为网站可使用的markdown格式，特此推出Word转MD教程

## 安装writage

[>writeage官网地址](www.writage.com)

::: tip

writage是`Microsoft Word `的一款针对`Markdown`格式的插件

:::

::: warning

注意:WPS无法使用，必须使用Microsoft Word，Microsoft Word是微软的办公四件套之一

:::

## 使用教程

![image-20220411172832815](C:\Users\AN\AppData\Roaming\Typora\typora-user-images\image-20220411172832815.png)

打开需要转换的Word文件，在保存类型中选择Markdown(*.md)格式

## 检查导出文件

有时候word导出的图片会因为路径命名问题导致MD无法识别链接格式

如下代码框内所示：

```
![C:\\Users\\Administrator\\AppData\\Roaming\\Tencent\\Users\\2912865028\\QQ\\WinTemp\\RichOle\\9D0@{AP0XYFQ][Z{YKT\$EA5.png](media/a299e4b0cea76f97676cc6a8061ee477.png)

![C:\\Users\\Administrator\\AppData\\Roaming\\Tencent\\Users\\2912865028\\QQ\\WinTemp\\RichOle\\OMU)I06N@7@[_BLG}CH7VMA.png](
```

我们可发现这种`9D0@{AP0XYFQ][Z{YKT\$EA5.png`的文件名，会无法正常显示，核心原因是里面包含了`[]`（方括号）这导致MarkDown无法正确的按图片格式来解析它



> ![](相对路径)
