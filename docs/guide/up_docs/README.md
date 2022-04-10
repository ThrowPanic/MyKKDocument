# 文档上传

文档上传方式有两种：

- 委托管理员上传
- 自己上传



## 委托管理员上传

将指定格式的教程文件打包，放入群文件内的`待上传教程`文件夹内，届时会有管理员来处理并上传文件





## 自己上传

### 安装git

首先安装Git，它用于下载/上传项目是多人协作的工具：

[Git官网下载地址](https://git-scm.com/downloads)

如果电脑上已经安装了，请跳过

### Fork仓库

> 如果这是你第二次提交教程，请直接阅读:如何二次提交教程，流程有点小小的不一样

安装完后，请[登陆Github](https://github.com/login)，并Fork [文档项目仓库](https://github.com/ThrowPanic/MyKKDocument)

![up_docs_1](./img/up_docs_1.png)



然后在Fork下来的仓库中，我们可以看到仓库的地址，我们复制下来稍后会用到

![image-20220410210620385](./img/up_docs_2.png)

### 克隆仓库

 <a href="/git_clone.bat" download="git_clone.bat">>>下载仓库克隆脚本</a>   

> bat文件的内容很简单，就是帮忙克隆仓库，因为考虑到一些人对git的命令行操作不熟悉，特此编写该脚本

在电脑上找个位置创建文件夹"github"用于存放克隆下来的仓库。

然后将上面的下载的脚本复制进刚刚创建"github"文件夹内，双击运行。

会出现以下内容:

```
Active code page: 65001
Fork仓库地址:
```

在这里黏贴之前复制的仓库地址，并按下回车

```
Cloning into 'MyKKDocument-1'...
remote: Enumerating objects: 139, done.
remote: Counting objects: 100% (139/139), done.
remote: Compressing objects: 100% (83/83), done.
remote: Total 139 (delta 52), reused 109 (delta 31), pack-reused 0
Receiving objects: 100% (139/139), 135.74 KiB | 284.00 KiB/s, done.
Resolving deltas: 100% (52/52), done.
Filtering content: 100% (9/9), 233.86 KiB | 33.00 KiB/s, done.
仓库下载完成，按任意键继续
Press any key to continue . . .
```

出现上述内容，则说明仓库克隆完毕，我们可以去打开对应的文件夹查看内容了

![](./img/up_docs_5.png)

### 放入教程文件

接着我们在克隆下来的文件里面找个合适的位置，将自己的文档放进去。

因为我们的插件编写教程中写的是ME插件教程，所以我们自然要将其放到`docs/plugin/`文件夹内

![](./img/up_docs_6.png)

### 按照规范重命名教程文件

这时候，我们应该给我们的教程文件夹重命名了，具体命名方式可以查看：上传文件命名规范

如果你已经明白了上传文件命名规范，那么我们知道此时将文件夹改名为`use_me`比较合适

![image-20220410232843154](./img/up_docs_3.png)

### 开始上传

OK至此，我们可以开始上传了。

回到`MyKKDocument`文件夹下，点击运行里面的`auto_push.bat`

![image-20220410232627197](./img/up_docs_7.png)

如果没有问题的话，运行的结果如下可以看到有个Untracked files:选项下用红色的字体打印出了

docs/plugin/use_me/

这个路径，这个就是我们放入的文件

```shell
Active code page: 65001
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        docs/plugin/use_me/

nothing added to commit but untracked files present (use "git add" to track)
提交文件说明:
```

这时候会让你输入提交的文件说明，这里就写你上传的是什么东西即可，输入完成按下回车，即可完成上传

因为案例中的提交的是ME教程，所以我们输入:ME插件教程提交

并按下回确认，这时候输出应该类似下面所示

```bash
提交文件说明:ME插件教程提交
[main cd5c9d8] 'ME插件教程提交'
 2 files changed, 3 insertions(+)
 create mode 100644 docs/plugin/use_me/README.md
 create mode 100644 docs/plugin/use_me/image/img_1.png
Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 12 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (8/8), 733 bytes | 366.00 KiB/s, done.
Total 8 (delta 2), reused 1 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/GenesisAN/MyKKDocument-1.git
   58e0340..cd5c9d8  main -> main
Press any key to continue . . .
```

OK，这时候代码就提交到你的Fork的仓库了。我们回到网页，就可以看到我们刚刚的提交了

![image-20220410233813966](./img/up_docs_4.png)

### 发起提交

因为我们只是将教程文件提交到了自己的仓库，我们还需要将自己的仓库里提交的更改向上游仓库同步

因此我们点击`Contribute`下拉选单中的`Open pull request`

![image-20220410234919262](./img/up_docs_8.png)

然后点击`Create pull request`

![image-20220410235030060](./img/up_docs_9.png)

在Write内容处写填写好关于教程的一些说明，然后点击`Create pull request`即可

![image-20220410235519437](./img/up_docs_12.png)



这时候，就只需要等待管理员审核通过辣！然后你就可以在网站上检索到你的文章了！

### 撤回提交

什么？我的提交有问题？需要修改？那么这时候就先撤回自己向上游的提交。

进入上游仓库**[ThrowPanic/MyKKDocument](https://github.com/ThrowPanic/MyKKDocument)**

点击Pull requests，在这里就可以看到自己的提交

![image-20220411000143425](./img/up_docs_10.png)



点进去后在最下方点击`Close pull request`即可

> PS：管理员也可以关闭你的提交

![image-20220411000613386](./img/up_docs_11.png)

提交关闭后，你可以在自己Fork下来的仓库内，修复问题，然后再次发起提交即可



> 关于教程提交的任何问题，都可以在群内艾特管理员咨询，别怕麻烦，大胆提问！

# 如何二次提交教程

TODO
