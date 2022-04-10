@echo off
chcp 65001

cd /d %~dp0

set /p m=Fork仓库地址:

git clone %m%

echo 仓库下载完成，按任意键继续
pause
