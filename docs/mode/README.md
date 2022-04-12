# 模组指南

KK中模组（Mod）一般是指某些额外加入游戏的地图、模型、贴图、材质、音效。

mod不是插件，它不能实现某些游戏没有的功能，只是对游戏资源的扩充。


## 模组扩展名

一般情况下Zipmod的扩展名为 `.zipmod` ，但也可以是`.zip`



## [模组安装](/mode/use_mode.html)
> 包含模组校验方式，与模组安装方式


## 实现模组加载的插件

Zipmods由**Sideloader**插件加载。如果没有该插件，mod将无法正常工作。**Sideloader**插件一般位于`BepInEx/Plugin/BepisPlugins`中。

**Sideloader**插件会自动遍历`mods`文件夹下的所有使用`.zipmod`扩展名的文件，因此你可以创建多个子文件夹，用于分类放置mod文件

你可以通过 [IllusionMods/BepisPlugins仓库]( IllusionMods/BepisPlugins仓库) 的 [发布页面](https://github.com/IllusionMods/BepisPlugins/releases) 下载到最新的为

- Koikatu / Koikatsu Party
- EmotionCreators
- AI-Shoujo
- AI-Girl
- HoneySelect2

提供的基本[BepInEx](https://github.com/BepInEx/BepInEx)插件，而那里面就包含了**Sideloader**插件



## 如何制作模组

> TODO...

