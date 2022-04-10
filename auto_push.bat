@echo off
chcp 65001
git status

set /p m=提交文件说明:

git add .

git commit -m '%m%'  

git push origin main

pause