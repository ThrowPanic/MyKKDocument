# 文档上传

文档上传方式有两种：

- 委托管理员上传
- 自己上传





## 委托管理员上传

将指定格式的教程文件打包，放入群文件内的`待上传教程`文件夹内，届时会有管理员来处理并上传文件





## 自己上传

首先安装Git，它用于下载/上传项目是多人协作的工具：

[Git官网下载地址](https://git-scm.com/downloads)



安装完后，请[登陆Github](https://github.com/login)，并Fork [文档项目仓库](https://github.com/ThrowPanic/MyKKDocument)

![up_docs_1](./up_docs_1.png)



然后在Fork下来的仓库中，我们可以看到仓库的地址，我们复制下来稍后会用到

![image-20220410210620385](./up_docs_2.png)



在电脑上找个位置创建文件夹"github"用于存放克隆下来的仓库。

创建好后对着github文件夹右键，选择Git Bash Here

![image-20220410211117071](./up_docs_3.png)



输入以下命令

```
git clone [仓库地址]
```

> [仓库地址]是指之前从网页上复制下来的`https://github.com/`开头的仓库地址，每个人Fork下来后的仓库都是属于自己的，所以每个人都不一样

![image-20220410212042863](./up_docs_4.png)

出现上述内容，则说明仓库克隆完毕，我们可以去打开对应的文件夹查看内容了



![image-20220410212121543](./up_docs_5.png)

接着我们找个合适的位置，将自己的文档放进去。

因为我们写的是ME插件教程，自然要放到docs/plugin/文件夹内

![image-20220410212336960](./up_docs_6.png)

这时候，我们应该给我们的教程文件夹重命名了，具体命名方式可以查看：上传文件命名规范

如果你已经明白了上传文件命名规范，那么我们知道此时将文件夹改名为`use_me`比较合适

![image-20220410212620688](./up_docs_7.png)

OK至此，我们可以开始上传了。



回到克隆下来的文件夹，对着它右键，打开Git Bash 



![image-20220410212924793](./up_docs_8.png)

```bash
git add .
#让仓库记录新添加的所有文件


```


