# 根据端口号杀掉进程脚本

## windows
创建killport.bat，脚本内容如下  
```shell
@echo off
set port=20002
for /f "tokens=5" %%a in ('netstat /ano | findstr %port%') do taskkill /F /pid %%a
//for循环，提取第5个字段（从命令的结果中）赋予到变量a，并执行杀进程调用变量a
pause
```
上面那个脚本文件中端口号写死了，可以提取出来当成参数传递
```shell
@echo off
set port=%1
for /f "tokens=5" %%a in ('netstat /ano | findstr %port%') do taskkill /F /pid %%a
//for循环，提取第5个字段（从命令的结果中）赋予到变量a，并执行杀进程调用变量a
pause
```
调用方式：killport.bat 20002

## linux
根据传入参数的端口号，杀掉进程killport脚本如下（文件名killport）
```shell
# !/bin/bash  
# Description: kill process by port  
# Usage:       killport port  
# example:     killport 8080
pid=`netstat -tlnp | grep "$1" | awk '{print $7}' | awk -F '/' '{print $1}'`
kill -9 $pid
```
将脚本文件killport放到/etc/init.d/文件夹下，也可以是其他的，脚本文件添加执行权限：
```shell
chmod +x /etc/init.d/killport
```
1. 创建软连接
```shell
cd /usr/bin     
ln -s /etc/init.d/killport
```
调用方式：killport 20002  
中间可能会出现的错误：1、arguments must be process or job IDs 错误
```shell
下面代码 = 后面 是 ` ，这个字符是键盘上tab键上面的那个按键打出来的，如果不是可能会出现这个错误
pid=`netstat -tlnp | grep "$1" | awk '{print $7}' | awk -F '/' '{print $1}'`
```
2. 执行脚本出现No such file or directory错误出现这个错误的原因可能是文件格式的问题，因为在windows系统编写的文件格式是dos格式，linux系统需要使用unix格式1)、修改和查看文件格式命令用vim打开killport文件，执行查看文件格式命令：
```shell
:set ff 
```
回车，显示fileformat=dos，需要重新设置文件格式，重新设置下文件格式命令：
```shell
:set ff=unix
```
保存并退出:
```shell
:wq
```

