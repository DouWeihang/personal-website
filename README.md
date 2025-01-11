<p align="center">
  <a href="https://devtt.com">
    <img width="72" src="https://raw.githubusercontent.com/world56/static/main/website/icon.svg">
  </a>
</p>

<h1 align="center">Website</h1>

<p align="center">快速、简约风格的个人主页</p>

![Home](https://raw.githubusercontent.com/world56/static/main/website/1.png)


## ✨ 主要技术栈
- 🍔 **Next.JS**  <span style="font-size: 13px;color: gray;">(App Router)</span>
- 🥪 **TypeScript**
- 🧑‍🎨 **Tailwind CSS**  <span style="font-size: 13px;color: gray;">(shadcn/ui)</span>
- 🍟 **Prisma**  <span style="font-size: 13px;color: gray;">(MySQL)</span>

## 🧙 项目特点

- 🥯 **增量渲染**  
采用SSG、ISR渲染，加载速度极快

- 📷 **资源压缩**  
上传的图片资源进行压缩，提升加载速度，减少空间占用

- 🐳 **Docker**  
支持docker国内镜像源，一键部署，没有任何心智负担

- 🧑‍🎨 **富文本**  
支持不限于：上传资源、外链、音频插件、视频插件、iframe、表格、17种编程语言代码示例

- 🙋‍♂️ **后台管理**  
  - 网站信息、备案信息、个人信息编辑  
  - 生活、成果、笔记内容编辑管理
  - 联系（留言）消息管理  
  - 静态资源管理  
  - 访问日志管理  
 
## 👮 环境变量 Environment

```bash
# MYSQL地址，可自行指定数据库名，这里用的是website
DATABASE_URL = mysql://root:xxx@@localhost:3306/website

# 系统密钥（必填）
SECRET = xxx
```

## 👷 本地开发 Development

```bash
# 注：npx prisma 相关命令仅需执行一次即可，它的作用是生成Prisma客户端以及创建、关联数据库表
$ git clone https://github.com/world56/website.git
$ cd website
$ npm install
$ npx prisma generate
$ npx prisma db push
$ npm run dev
```

## 🧑‍💼 生产部署 Production

### 🐳 Docker
#### 1.拉取镜像

```bash
# 官方源
$ docker pull world56/website
# 阿里云源
$ docker pull registry.cn-hangzhou.aliyuncs.com/world56/website
```

#### 2.启动容器

```bash
# 静态资源托管在/app/resource目录，请绑定数据卷（-v），防止资源丢失。
$ docker run -d -p 8001:3000 -e DATABASE_URL=mysql://root:mysql:3306/website -e SECRET=your_key -v ~/app/website/resource:/app/resource world56/website
```


### 🕷️PM2

<p><a href='https://github.com/Unitech/pm2'>PM2</a>是NodeJS应用生产环境进程管理器，可在生产环境中管理并维持Node应用运行。</p>

<p><b>构建准备</b>：NodeJS版本号<b>v20.9.0</b>，配置<b>.env</b>相关变量，全局安装 <a href='https://github.com/Unitech/pm2'><b>PM2</b></a>。</p>

<p><b>警告‼️</b>：resource 目录用于托管静态资源，<b>构建时，会先删除之前的build目录，在生成新的build目录，这会导致build目录下的resource目录重新生成</b>。若您要坚持自己手动部署，可先在本地构建，然后在上传服务器部署。更建议您使用 Docker 部署，可免除构建、安装和运维的一系列繁琐操作。</p>

```bash
# 1.生成 Prisma Client（仅需执行一次）
$ npx prisma generate

# 2.创建、关联数据库表（仅需执行一次）
$ npx prisma db push

# 3.编译构建
$ npm run build

# 4.打开build文件夹（编译后的输出文件）
$ cd build

# 5.通过pm2启动并托管
$ pm2 start pm2.json

# 6.查看pm2托管应用存活状态
$ pm2 ls
```


### 🙋‍♂️关于Nginx
<p>若使用 Nginx 进行代理，请<b>务必添加下列参数</b>。</p>

```bash

server {
 ...
 location / {
  proxy_set_header X-Real-IP $remote_addr; # “访问日志”功能
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; # “访问日志”功能
  proxy_pass http://127.0.0.1:8001;  # website服务端口
 }

 location /api/auth/upload {
  client_max_body_size 32M; # “上传资源”功能
  proxy_pass http://127.0.0.1:8001; # website服务端口
 }
}

```

## 🔍 访问地址（例）
<p>普通访客：<a href="http://127.0.0.1:3000">http://127.0.0.1:3000</a></p>
<p>后台管理：<a href="http://127.0.0.1:3000/signin">http://127.0.0.1:3000/signin</a>  (首次使用需要注册管理员) </p>


## 📷 效果图预览
[更多细节图，点击查看](https://github.com/world56/static/tree/main/website)


## 🙏 特别鸣谢 Special Thanks

本项目 UI 灵感来源于[@codewithsadee](https://github.com/codewithsadee)，和他优秀的开源项目 [vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio)，感谢他的付出与开源精神。  
The UI inspiration for this project come from [@codewithsadee](https://github.com/codewithsadee) and his outstanding open-source project [vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio). Grateful for his dedication and open-source spirit.