# 安装&启动
## 安装GCC
```shell
yum -y install  gcc-c++
```

## 编译安装，进入redis目录下执行
```shell
# 编译
make
# 安装
make install
```

将redis文件夹中的redis.conf文件复制一份到/usr/local/bin下，方便运行redis服务端
进入/usr/local/bin，
```shell
1.将myredis.conf中的daemonize设置为yes（默认为no），redis就将会在后台运行  
2.将bind 127.0.0.1 或是 bind 127.0.0.1 -::1 注释掉。此处 表示允许连接该Redis实例的地址。默认是只允许本地连接，注释后表示允许外网访问。
3.requirepass foobared 此处表示登录该Redis示例所需要的密码
4.protected-mode  此处表示是否开启保护模式，（默认为yes[开启]）设置成no，表示关闭
```

## 启动
```shell
# 启动服务
./redis-server redis.conf
# 后台启动
./redis-server redis.conf &
# 进入客户端
./redis-cli -p 6379
# 进入客户端后验证身份
auth 密码
```


