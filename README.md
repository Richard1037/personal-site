# 个人主页（Astro 静态站）

一个纯静态的个人主页，构建产物不到 20 KB。设计目标是**长期可维护**：不依赖任何框架生态、不需要服务器、不需要数据库，五年后打开依然能改、能构建、能部署。

- **技术栈**：Astro 7（仅用于把内容渲染成静态 HTML），手写 CSS，零客户端 JavaScript
- **托管**：Cloudflare Workers（静态资源），纯静态文件，可换任意托管商
- **内容与布局分离**：所有文字集中在 `src/data/profile.ts` 一个文件里

---

## 目录结构

```
personal-site/
├── astro.config.mjs          # 构建配置（上线后要改 site 为你的域名）
├── wrangler.jsonc            # Cloudflare Workers 配置
├── package.json
├── .gitattributes            # 统一换行符
├── public/
│   ├── favicon.svg           # 站点图标
│   └── robots.txt
└── src/
    ├── data/
    │   └── profile.ts        # ★ 你的所有内容都在这里
    ├── styles/
    │   └── global.css        # 全部样式（设计变量在文件顶部的 :root）
    ├── layouts/
    │   └── BaseLayout.astro  # HTML 骨架、SEO、社交分享元数据
    ├── components/
    │   ├── Header.astro      # 顶部导航
    │   ├── Hero.astro        # 首屏：姓名、一句话介绍、按钮
    │   ├── About.astro       # 关于我 + 技能
    │   ├── Projects.astro    # 项目作品集
    │   ├── Experience.astro  # 经历时间线
    │   ├── Contact.astro     # 联系方式
    │   └── Footer.astro
    └── pages/
        └── index.astro       # 唯一的页面，把上面各板块拼起来
```

**你以后 95% 的时间只会打开 `src/data/profile.ts`。**布局和样式定了就不用再动。

---

## 本地运行

需要 Node.js 22.12 或更高版本（Astro 7 的要求；你现在装的是 24，没问题）。

```bash
cd "D:\AI Project\personal-site"

npm install        # 只需第一次
npm run dev        # 启动本地预览，打开 http://localhost:4321
npm run build      # 生成静态文件到 dist/
npm run preview    # 本地预览构建产物（模拟线上效果）
```

`npm run dev` 支持热更新：改了 `profile.ts` 存盘，浏览器立刻变，不用刷新。

> 可选：Astro 默认会发送匿名使用统计。想关掉就执行一次 `npx astro telemetry disable`。

---

## 改内容

打开 `src/data/profile.ts`，里面每个字段都有中文注释。需要你替换的占位内容都标了 `TODO`：

| 字段 | 说明 |
|---|---|
| `profile.name` / `nameLocal` | 英文名 / 中文名（中文名不要就设为 `''`） |
| `profile.headline` | 一句话身份，例如学位 + 学校 |
| `profile.subheadline` | **全站最重要的一句话**，写你解决什么问题 |
| `profile.status` | 例如 "Open to Summer 2026 internships"，不要就设为 `''` |
| `about` | 2~3 段自我介绍 |
| `skills` | 技能分组，3~4 组 |
| `projects` | 项目列表，建议 3~5 个 |
| `experiences` | 经历时间线，按时间倒序 |
| `contactLinks` | 底部联系方式按钮 |

### 项目描述怎么写

这是全站唯一需要动脑的地方。**不要**写：

> 使用 React + Node.js 实现了前后端分离的 Web 应用，支持用户登录和数据管理。

**要**写「问题 → 你的决策 → 结果」：

> 实验室的结果散落在命名混乱的表格里，找上学期的数据比重做实验还慢。我写了一个数据导入管道加全文检索界面；难点不在检索，而在设计一套人们真的愿意填的最小必填字段。现在 12 个实验室成员每周都在用。

三句话，招聘方读完就知道你会不会做事。

### 增删板块

删掉 `src/pages/index.astro` 里对应的那一行，同时删掉 `src/components/Header.astro` 里 `navItems` 中的对应项。

---

## 上线到 Cloudflare Workers

### 为什么用 Workers 而不是 Pages

Cloudflare 已经在 Pages 文档顶部明确标注：**新项目请使用 Workers**（"Start new projects with Workers"）。Pages 仍在运行、仍免费，但对一个以「永久」为目标的站点，不该把地基打在官方正在劝退的平台上。

而且对纯静态站来说，Workers 的配置**更简单**：因为你的站点全部在构建时预渲染，不需要 Astro 的 Cloudflare 适配器，也不需要任何 Worker 代码——`wrangler.jsonc` 里只有 `name`、`assets.directory`、`compatibility_date` 三项。

### 1. 推到 GitHub

先在 github.com 上**新建一个空仓库**（不要勾选 README、不要选 .gitignore、不要选 license，否则 push 会冲突）。名字建议 `personal-site`。

本地仓库已经初始化并完成了首次提交，你只需要接上远程仓库并推送：

```bash
cd "D:\AI Project\personal-site"

git remote add origin https://github.com/Richard1037/personal-site.git
git push -u origin main
```

> 把 `Richard1037` 换成你真实的 GitHub 用户名。首次 push 会弹出浏览器让你登录 GitHub 授权。

### 2. 在 Cloudflare 连接仓库

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create**
2. 选择 **Connect to Git**（导入已有仓库），授权 GitHub，选中 `personal-site` 仓库
3. 分支填 `main`
4. 构建设置：

   | 设置项 | 值 |
   |---|---|
   | Build command | `npm run build` |
   | Deploy command | `npx wrangler deploy`（默认值，不用改） |
   | Preview command | 保持默认 |

5. 保存并部署

几十秒后你会拿到一个免费地址：

```
https://personal-site.<你的-workers-子域>.workers.dev
```

**到这里网站就已经上线了，全程没有花一分钱，也不需要域名。**先确认它能正常打开。

> 想换掉 `personal-site` 这个前缀？改 `wrangler.jsonc` 的 `name` 字段，提交推送即可。

### 3. 之后再买域名

域名是唯一需要花钱的部分，而且**可以最后再做**。去 Cloudflare 的 **Domain Registration** 买（`.com` 约 $10.46/年，注册价和续费价相同，没有次年涨价）。

购买时注意四件事：

- **必须用你长期能收信的邮箱**。ICANN 要求验证域名注册人邮箱，**如果你没点验证链接，域名会被暂停，域名服务器会被替换成停放页**——这是新手最常踩的坑。用你的 Outlook 邮箱即可，不要用学校邮箱。
- **联系人信息只能用 ASCII 字符**，姓名至少两个字母，电话要选国家区号
- **付款方式**：Cloudflare Registrar 需要国际信用卡或 PayPal。如果你只有支付宝/微信支付，会卡在这一步。替代方案见下方「没有国际信用卡怎么办」
- 用 Cloudflare Registrar 注册的域名**必须使用 Cloudflare 的域名服务器**，不能换成别家的 DNS

### 4. 绑定域名到 Worker

1. 进入你的 Worker → **Settings** → **Domains & Routes** → **Add** → **Custom Domain**
2. 输入你的域名（如 `yourname.com`），确认
3. 因为域名就在同一个 Cloudflare 账号下，DNS 会自动配置，等几十秒生效

**最后一步别忘了**：把 `astro.config.mjs` 里的 `site` 改成你的真实域名并推送：

```js
site: 'https://your-real-domain.com',
```

这一步影响 SEO 的规范链接（canonical）和微信/LinkedIn 的分享卡片，值得改。

### 没有国际信用卡怎么办

Cloudflare Registrar 只收国际信用卡 / PayPal。如果这一步卡住，可选：

| 方案 | 成本 | 代价 |
|---|---|---|
| GitHub 学生包领 Namecheap 免费 `.me` | 首年 ¥0 | 仍需绑一张卡（不扣费）；续费约 $4.88/年 |
| 阿里云 / 腾讯云买 `.com` | ¥70~90/年 | 需**实名认证**；DNS 要手动改到 Cloudflare |
| Porkbun / Spaceship | 约 $11/年 | 同样需要国际卡 |

注意：**如果你在意国内访问速度而把域名解析到国内服务器，就需要 ICP 备案**。但如果只是把域名指向 Cloudflare Workers（境外节点），**不需要备案**。

---

## 日常更新流程

```bash
# 1. 改 src/data/profile.ts
# 2. 本地看一眼
npm run dev

# 3. 发布
git add .
git commit -m "Update projects"
git push
```

推送后 Cloudflare 自动构建并上线，约一分钟。**你的电脑关机、重装、换新电脑，都不影响网站运行**——这就是「永久且和电脑状态无关」的实现方式。

---

## 长期维护清单

设个每年一次的日历提醒，做这几件事：

- [ ] **检查域名到期日**，提前续费。域名过期 30 天后会进入高价赎回期，甚至被人抢注。稳妥做法是一次续 3~5 年
- [ ] **留意 ICANN 注册人邮箱验证邮件**，收到就立刻点。漏点会导致域名被暂停
- [ ] **确认托管账号还能登录**（GitHub + Cloudflare），2FA 恢复码还在
- [ ] **本地留一份源码备份**：`git clone` 到网盘或移动硬盘。GitHub 是你的主副本，但不该是唯一副本

另外建议在 [web.archive.org](https://web.archive.org/) 给首页存一个快照。这是内容层面的兜底，和托管商无关。

---

## 设计说明：为什么这么写

这些选择都是为了「五年后还能用」：

- **零客户端 JavaScript**：没有水合、没有运行时依赖，加载瞬间完成，也不会因为依赖升级而崩
- **深色模式用 `prefers-color-scheme`**：跟随系统设置，不需要 JS 切换；想加手动切换按钮再说
- **系统字体栈**：不加载任何外部字体。没有 Google Fonts 请求，既快又不会因为第三方服务变动而失效
- **手写 CSS + `:root` 变量**：不依赖 Tailwind 这类会持续演进的工具。想换配色，改 `global.css` 顶部几个变量即可
- **内容集中在单个数据文件**：改文字永远不碰布局，布局永远不碰文字
- **纯静态 HTML 产物**：任何托管商都能跑。Cloudflare 哪天不合适了，换一家 5 分钟的事
- **`compatibility_date` 固定**：Cloudflare 运行时的行为被钉在某个日期，平台无法在你不知情的情况下改变你站点的行为

---

## 常见问题

**改了内容但网页没变？**
`npm run dev` 下应该会热更新。线上则构建需要一分钟左右，去 Workers 的构建日志看进度。浏览器强刷 `Ctrl+Shift+R`。

**构建失败提示 Node 版本？**
Astro 7 需要 Node 22.12+。Workers Builds 的默认 Node 版本已满足要求；如果手动改过，去 **Settings** → **Build** → **Build variables** 里设 `NODE_VERSION` = `22`。

**想从本地直接部署（不走 GitHub）？**
```bash
npm run build
npx wrangler@latest deploy
```
首次运行会打开浏览器让你登录 Cloudflare 授权。但这需要你的电脑在线，所以推荐用上面的 Git 自动部署。

**想换配色？**
`src/styles/global.css` 顶部的 `:root` 里有 `--accent`（主色）、`--bg`、`--text` 等。深色模式在下面的 `@media (prefers-color-scheme: dark)` 块里。

**想加博客或简历下载页？**
在 `src/pages/` 下新建 `.astro` 文件即可，例如 `src/pages/blog.astro` 会生成 `/blog`。内容多的话可以把 `profile.ts` 拆成 `src/data/projects.ts`、`src/data/posts.ts` 等。
