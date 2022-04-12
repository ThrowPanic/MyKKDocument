# 插件指南

为了通用性考虑，这里的插件指南并不单指KK的插件，而是指所有基于BepinEx框架下的插件。

::: tip 关于BepinEx

BepInEx是一个针对Unity和.NET Framework游戏的插件框架。

:::

## 概览

插件、BepInEx、mod、游戏，它们四者的关系如下

> 游戏：一个对玩家来说不便于修改的程序
>
> BepInEx：作为框架安装到游戏上，提供了接口供插件去替换/新增游戏的代码。
>
> 插件：运行在BepInEx框架上，让玩家通过编写/安装插件，来给游戏替换/新增的功能
>
> Mod：基于Sideloader插件实现的额外功能，它能让模组（`.zipmod`）在游戏启动时被载入。



## 插件扩展名

以`.dll`结尾，是动态链库文件。



## [安装插件](/plugin/use_plugin)

> 如果是基于[IPA](https://github.com/Eusth/IPA)的插件，那么要放在游戏根目录的plugin文件夹中，但由于IPA和BepInEx不一样它不具备通用性，因此这里不会细讲

## 开发插件

> TODO..

## KK常用插件列表

> TODO..

