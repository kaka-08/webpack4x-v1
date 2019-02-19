# 一 项目目录结构

* **base**  基础服务，提供通用的实体类 或者 utils，不提供启动；
* **config-repo**  统一配置中心, 直接配置连接git仓库；
* **eureka-server**  服务注册中心，项目采用服务发现
* **mall-user**  商户模块
* **mgmt**  权限模块 
* **order**  订单模块
* **product**  商品模块
* **shop**  之前开发的单体应用 （包含大多数业务模块，开发时候可以参考）

# 二 项目依赖工具（软件）以及版本，推荐docker安装

* **maven**  v3.3.0+  看大家习惯，这个大家本地应该都装有maven
* **rabbitmq**  docker run -d --hostname localhost --name rabbit-management --restart=always -p 15672:15672 -p 5672:5672 rabbitmq:3-management
* **redis**  暂时还没有应用（shop应用了） 
* **eureka**  version 2.0.1.RELEASE
* **spring-cloud**  cloud和boot的版本官网有推荐。某一版本的spring-cloud对应的某一版本的spring-boot。本项目 依赖版本  Finchley.SR1
* **spring-boot**   spring-cloud为Finchley.SR1版本，对应的spring-boot版本为   2.0.4.RELEASE  版本对照表参看官网  http://projects.spring.io/spring-cloud/
* **spring-cloud-bus**   版本对照表参看官网  http://projects.spring.io/spring-cloud/
* **spring-cloud-config**  版本对照表参看官网  http://projects.spring.io/spring-cloud/
* **spring-cloud-eureka**  版本对照表参看官网  http://projects.spring.io/spring-cloud/
* **spring-cloud-stream**  版本对照表参看官网  http://projects.spring.io/spring-cloud/
* **mysql**  依赖包的版本5.1.46
* **其他**  核心依赖的大版本保持就好，其他的不限制，稳定版就可以

# 三 项目启动和编译命令

spring-boot项目，入口文件  XXXAplication.class 点击执行就好。或者mvn 命令 看个人习惯 
* **redis**  后期加入缓存之后，项目会在redis环境下运行，暂时还没用到。因此不用启动
* **rabbitmq** 项目用到了消息队列，因此依赖rabbitmq
* **eureka-server**  优先启动，所有的服务都要注册到eureka服务