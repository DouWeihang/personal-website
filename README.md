<p align="center">
  <a href="https://devtt.com">
    <img width="72" src="https://raw.githubusercontent.com/world56/static/main/website/icon.png">
  </a>
</p>

<h1 align="center">Website</h1>

<div align="center">
  <p>一款极简风格的个人主页</p>
  <img width="1000" style="border-radius:20px"  src="https://raw.githubusercontent.com/world56/static/main/website/cover.jpg" alt="个人主页">
</div>

## ✨ 技术栈

- 🍔 **Next.JS**（React）
- 🥯 **ISR**（On-demand Revalidation）
- 🥪 **TypeScript**
- 🍟 **Prisma**（MySQL）
- 🍣 **Docker**



## 🖥 兼容环境

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions |


## 👮 环境变量 Environment
```bash
# MYSQL
DATABASE_URL = mysql://root:xxx@@localhost:3306/website

# JWT SECRET
SECRET = xxx

# Next.js <Image/> component loading address prefix
# https://nextjs.org/docs/app/api-reference/components/image#remotepatterns
NEXT_PUBLIC_IMAGE_BASE_URL = http://127.0.0.1:3000
```

## 👷 本地开发 Development
```bash
$ git clone https://github.com/world56/website.git
$ cd website
$ npm install
$ npx prisma db push # Prisma初始化数据库表，仅需运行一次
$ npm run dev
```
打开浏览器访问 http://127.0.0.1:3000

## 🧑‍💼 打包部署 Production
- ⚠️ next.js SSG、ISG是build阶段构建，若要打包生产环境，需要提前修改.env的相关环境变量。
- ⚠️ docker run 命令需要根据实际情况自行调整 数据卷、环境变量等参数。
```bash
$ npm run build
$ docker build -t website:0.1 .
$ docker run -d -p 1000:3000 --name website -v ~/app/website/resource:/app/resource -e DATABASE_URL=mysql://root:xxx@@localhost:3306/website -e SECRET=xxx -e NEXT_PUBLIC_IMAGE_BASE_URL=http://192.168.xx.xxx website:0.1
```

## 🙏 特别鸣谢 Special Thanks
本项目UI灵感来源于[@codewithsadee](https://github.com/codewithsadee)，和他优秀的开源项目 [vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio)，感谢他的付出与开源精神。  
The UI inspiration for this project come from [@codewithsadee](https://github.com/codewithsadee) and his outstanding open-source project [vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio). Grateful for his dedication and open-source spirit.
