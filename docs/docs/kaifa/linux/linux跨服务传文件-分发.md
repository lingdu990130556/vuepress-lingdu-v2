# 文件分发
-r :传文件夹,如果传单个文件则不用加<br>
-P :端口<br>
../jar :本地文件夹<br>
root :另一台服务器登录用户名<br>

```shell script
 scp -r -P 22 ../jar/ root@192.168.0.153:/data/lingdu/
```



