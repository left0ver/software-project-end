# software-project-end

此项目为 software project 的后端，使用的是 node 的 express 框架编写，配合 MySQL 数据库，具体实现了验证码注册登录，评论回复等功能，前端代码请查看[此处](https://github.com/left0ver/software-project-ui)

下载源代码至本地，或者 git clone https://github.com/left0ver/software-project-end.git

#### 下载依赖

npm install

之后在MySQL数据库中创建users数据库和如下表

![image-20220306220631702](https://leftover-md.oss-cn-guangzhou.aliyuncs.com/img-md/image-20220306220631702.png)

article表的具体字段

![image-20220306220723737](https://leftover-md.oss-cn-guangzhou.aliyuncs.com/img-md/image-20220306220723737.png)

comment表的具体字段

![image-20220306220805026](https://leftover-md.oss-cn-guangzhou.aliyuncs.com/img-md/image-20220306220805026.png)

like表的具体字段

![image-20220306220840140](https://leftover-md.oss-cn-guangzhou.aliyuncs.com/img-md/image-20220306220840140.png)

reply表的具体字段

![image-20220306221245086](https://leftover-md.oss-cn-guangzhou.aliyuncs.com/img-md/image-20220306221245086.png)

sessions表的具体字段

![image-20220306220917315](https://leftover-md.oss-cn-guangzhou.aliyuncs.com/img-md/image-20220306220917315.png)

user表的具体字段

![image-20220306220941585](https://leftover-md.oss-cn-guangzhou.aliyuncs.com/img-md/image-20220306220941585.png)

#### 启动项目

npm run start

具体的效果请访问[项目网站](http://sczh.xyz/login)

