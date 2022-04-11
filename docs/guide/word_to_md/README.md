# Word转MD教程

考虑到目前有许多使用Word格式编写的教程，为了方便快速的转换为网站可使用的markdown格式，特此推出Word转MD教程

## 安装writage

[>writeage官网地址](https://www.writage.com)

::: tip

writage是`Microsoft Word `的一款针对`Markdown`格式的插件

:::

::: warning

注意:WPS无法使用，必须使用Microsoft Word，Microsoft Word是微软的办公四件套之一

:::

## 使用教程
打开需要转换的Word文件，在保存类型中选择Markdown(*.md)格式,点击保存即可

![image-20220411193624050](./img/word_to_md_1.png)



## 检查图片命名

有时候word导出的图片会因为命名问题导致MD无法识别链接格式

如下代码框内所示：

```
![C:\\Users\\Administrator\\AppData\\Roaming\\Tencent\\Users\\1234567\\QQ\\WinTemp\\RichOle\\9D0@{AP0XYFQ][Z{YKT\$EA5.png](media/a299e4b0cea76f97676cc6a8061ee477.png)
```

我们可发现这种`9D0@{AP0XYFQ][Z{YKT\$EA5.png`的文件名，会无法正常显示，核心原因是里面包含了`[]`（方括号）这导致MarkDown无法正确的按图片格式来解析它

因此我们将它方括号内的文件名删除即可，方括号的内容不是必填字段。

删除后路径应该如下所示:

```
![](media/a299e4b0cea76f97676cc6a8061ee477.png)
```

那么这样图片就能正常在MarkDown编辑器显示辣,但如果直接使用它,那么会导致上传后网页的图片无法正常显示(虽然在MarkDown编辑器内可以正常看见


## 修正图片路径
原因是它不属于"相对路径"，我们要让它符合相对路径的定义就需要在在它前面加上`./`：
```
![](./media/a299e4b0cea76f97676cc6a8061ee477.png)
```
使之符合相对路径的规范,只有这样才能在提交后经过自动编译,使之能正确的显示图片


## 整理文章

在转为md格式后，原有的标题可能都会变成普通文本，图片，文本可能会堆叠在一起。分段不明显，因此我们需要手动整理一下。

在整理完成后，即可按照[上传流程](/guide/up_docs/)发起上传了。

#### 
