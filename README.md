# 一 项目目录结构和文件说明

* **src**  项目主目录
* **src/common**  项目公共包，存放axios，base function等；
* **src/component**  公共组件，非业务耦合，以便将来脚手架开源
* **src/page**  项目页面，主业务
* **src/static**  静态资源模块，公共image，lib等 
* **src/util**  工具类
* **product**  商品模块
* **index.html**  SPA的模板文件，如果项目做成多入口，则模板文件可另外灵活处理
* **index.js** 入口文件，同模版文件，多人口时候另外处理
* **webpack.config.*.js** webpack的配置文件

# 二 项目启动和编译命令

 拉取项目代码之后
* **yarn install **  安装依赖
* **npm run build:dev** 开发环境编译
* **npm run build:prod**  生产环境编译
* **npm run start:dev** 开发环境启动
* **npm run start:prod**  生产环境启动