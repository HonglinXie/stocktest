## 环境搭建

```bash
# 克隆项目
git clone https://gitee.com/y_project/RuoYi-Vue

# 进入项目目录
cd ruoyi-ui

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 http://localhost:80

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```
##开发新页面说明
```bash
前端使用ruoyi框架，后端使用springboo+mysql，框架已系统管理基本功能，可以通过代码生成前端所需代码，进入如下操作后使用。

1、代码生成

2、生成的前端代码放在src->views->sddm,sddm可自行再创建文件夹

3、在src->router下index.js添加所需的route

4、在src->api->sddm index里面添加新的api

5、src->store->moudules->sddmstore 添加state, mutations, actions对应的内容

```