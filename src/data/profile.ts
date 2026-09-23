/**
 * ============================================================================
 *  这是你更新网站时【唯一需要修改】的文件。
 *
 *  改这里的内容 -> 提交到 GitHub -> 网站自动更新。不需要碰任何布局代码。
 *
 *  下面每个字段都有中文注释说明用途。想加实习/科研/竞赛经历，照抄
 *  `experiences` 里现成那条的格式，加到数组最前面即可。
 * ============================================================================
 */

/** 一个联系方式或外部链接。 */
export interface Link {
  label: string;
  /** 目标地址。留空字符串 '' 则渲染为不可点击的标签（例如微信号）。 */
  url: string;
  /** 鼠标悬停 / 键盘聚焦时显示的具体内容：邮箱地址、GitHub 主页、微信号等。 */
  hint?: string;
}

/** 一个项目。 */
export interface Project {
  /** 项目名 */
  name: string;
  /** 一句话说明它是什么（不超过 ~80 字符，会显示在标题下方） */
  tagline: string;
  /**
   * 你做了什么。写"解决什么问题 + 你的关键决策 + 结果"，不要罗列技术名词。
   * 2~3 句话最佳。招聘方只读这一段。
   */
  description: string;
  /** 技术栈标签，3~6 个即可，不要堆砌 */
  tech: string[];
  /** 相关链接，可以只留 GitHub */
  links: Link[];
  /** 年份，用于排序和显示 */
  year: string;
  /** 设为 true 会排在前面；建议只标记 2~3 个最重要的项目 */
  featured?: boolean;
}

/** 经历类型，决定时间线上的标签颜色 */
export type ExperienceKind =
  | 'work'         // 实习 / 工作
  | 'research'     // 科研 / 实验室
  | 'competition'  // 竞赛
  | 'award'        // 奖学金 / 荣誉
  | 'education';   // 教育背景

export interface Experience {
  kind: ExperienceKind;
  /** 职位 / 角色 / 奖项名 */
  title: string;
  /** 公司 / 学校 / 组织 */
  org: string;
  /** 时间，例如 "Jun 2025 – Sep 2025" 或 "2024 – Present" */
  period: string;
  /** 你做了什么、产出了什么。1~3 句。 */
  description: string;
  /** 可选的关键词标签 */
  tags?: string[];
  /** 可选的相关链接，例如那段时间留下的博客或作品 */
  links?: Link[];
}

/** 一项技能。可以只写名字，也可以带一个补充说明。 */
export interface Skill {
  name: string;
  /** 补充说明，会以更淡的颜色显示在同一个标签里 */
  note?: string;
}

export interface SkillGroup {
  label: string;
  /** 字符串写法等价于 { name: '...' }，只写名字时用它更省事。 */
  items: (string | Skill)[];
}

/* ==========================================================================
   1. 基本信息
   ========================================================================== */

/** 首屏信息卡：一个「类别 -> 内容」对。 */
export interface Fact {
  /** 类别标签，例如 "Studying" */
  label: string;
  /** 内容，例如 "BSc in Artificial Intelligence" */
  value: string;
}

export const profile = {
  /** 显示为页面主标题 */
  name: 'Richard Wang',
  /** 中文名，显示在主标题旁边的小字；不需要就设为 '' */
  nameLocal: '汪宏睿',

  /** 个性签名，显示在姓名正下方 */
  signature: 'But I still think they are flowers',

  /** 签名出处。留空则不显示。 */
  signatureSource: 'Flower Dance, DJ Okawari',

  /**
   * 头像路径。图片放在 public/ 目录里，这里写以 / 开头的路径。
   * 留空字符串则不显示头像。建议先把图片缩到 256×256 再放进来，
   * 否则一张大图会拖垮整个站点的加载体积。
   */
  avatar: '/avatar.jpg',

  /** 你的"一句话价值主张"——全站最重要的一句。 */
  subheadline:
    'First-year AI student in Beijing, building small dependency-free web tools while I work out where in AI to go deep.',

  /**
   * 首屏右侧的分类信息卡。每项是「类别 -> 内容」。
   * 增删卡片只改这个数组即可，布局会自动适应：
   * 宽屏时排在右侧一列，窄屏时堆到内容下方。
   */
  facts: [
    { label: 'Studying', value: 'BSc in Artificial Intelligence' },
    { label: 'At', value: 'Renmin University of China' },
    { label: 'Based in', value: 'Beijing, China' },
    { label: 'Interested in', value: 'Algorithms and AI' },
  ],

  /**
   * 状态提示。留空则不显示；填了会在首屏联系方式上方显示一个绿点 + 文字，
   * 例如 'Open to Summer 2027 internships'
   */
  status: '',

  email: 'hongrui_w@outlook.com',

  /** 页脚版权年份起点 */
  since: 2026,

  /**
   * 页脚显示的"最后更新"日期。改完内容顺手改一下这里——访客据此判断
   * 这个站点是否还活着。手动维护比自动取构建时间更有意义。
   */
  lastUpdated: 'September 2026',

  /** 联系板块的引导语。1~2 句，说明你希望收到什么样的联系。 */
  contactNote:
    "I'm happy to hear about internships, research opportunities, or just to compare notes on a project. Email is the fastest way to reach me.",
};

/* ==========================================================================
   2. 关于我 + 技能
   ========================================================================== */

/**
 * 自我介绍。好的版本只需要回答三件事：你是谁、你在做什么、你为什么在意它。
 */
export const about: string[] = [
  `I'm a first-year student at the Gaoling School of Artificial Intelligence,
   Renmin University of China. Most of what I've built so far started as something
   I simply wanted to exist — a place to keep half-formed ideas, a card that says
   who I am without a framework doing the talking.`,

  `Lately I'm spending more time on the AI side of my degree, looking for the problem
   I want to stay with.`,
];

/**
 * 技能分组。按熟练度排序；写了就要经得起追问。
 * Algorithms 一组来自算法竞赛训练——写的是广度而不是奖项，因为
 * "会哪些算法"比"拿过什么奖"更能说明问题，也更经得起追问。
 */
export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: [{ name: 'C++', note: 'primary' }, 'Python'],
  },
  {
    label: 'Algorithms',
    items: [
      'Data structures',
      'Graph theory',
      'Dynamic programming',
      'Strings',
      'Number theory',
      'Combinatorics',
      'Computational geometry',
    ],
  },
  {
    label: 'Web (no frameworks)',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
];

/** 一项兴趣爱好。 */
export interface Interest {
  /** 兴趣名，例如 "Gym" */
  name: string;
  /** 补充说明，会以更淡的颜色显示在同一个标签里；不需要就省略 */
  note?: string;
}

/**
 * 兴趣爱好，显示在技能下方，用一条分隔线隔开——技能是"我会什么"，
 * 兴趣是"我是什么样的人"，两类信息不该混在一起。
 *
 * 写具体比写宽泛更有价值：具体的东西别人才接得上话。
 */
export const interests: Interest[] = [
  { name: 'Gym', note: 'still a beginner' },
  { name: 'Football', note: 'Real Madrid' },
];

/** 「我在用什么」的一行。 */
export interface UseItem {
  label: string;
  value: string;
}

/**
 * 工具清单。很常见的个人站栏目，成本极低但对同专业的人信息量很大，
 * 也特别容易成为别人搭话的由头。不用的东西就别列。
 */
export const uses: UseItem[] = [
  { label: 'Editor', value: 'VS Code' },
  { label: 'Note-taking', value: 'OneNote, handwritten on a Gaoman tablet' },
];

/* ==========================================================================
   3. 最近在做什么（Now）
   --------------------------------------------------------------------------
   参考 nownownow.com 的惯例：一小段"我最近在推进什么"。对经历还不多的人
   特别合适——它把"经历少"变成"正在长"。更新成本也低，改一两句话就行。
   改完记得同步更新上面的 lastUpdated。
   ========================================================================== */

export const now = {
  /** 这段内容的更新时间。改内容时顺手改这里。 */
  updated: 'September 2026',

  /** 一两段短文，说清你最近在忙什么。 */
  body: [
    `I've been moving my coursework into the cloud — notes, slides, past papers —
     nothing on paper if I can help it. The point isn't tidiness so much as making
     the material still findable years from now, by me and by whoever else needs it.`,

    `The collection is public on GitHub, and it gets more useful as it grows.
     Corrections, extra material and better organisation are all welcome — open an
     issue on the repository, or send a pull request if you'd rather just add it.`,
  ],

  /** 相关链接。不需要就设为空数组 []。 */
  links: [
    {
      label: 'Course-Resources on GitHub',
      url: 'https://github.com/Richard1037/Course-Resources',
    },
  ],
};

/* ==========================================================================
   4. 项目作品集
   --------------------------------------------------------------------------
   三个项目均取自你的 GitHub 仓库，描述由我依据各仓库 README 改写。
   建议自己核对一遍技术细节——描述里的每句话你都应该能展开讲。
   ========================================================================== */

export const projects: Project[] = [
  {
    name: 'Idea Card Wall',
    tagline: 'A conveyor-belt wall for keeping and revisiting half-formed ideas.',
    description: `Note apps bury ideas in folders, so I built something that keeps them
      moving instead: a horizontally auto-scrolling wall you can pause by hovering,
      drag through, and search with highlighted matches. The deliberate constraint was
      no backend — every card lives in localStorage, so the whole tool is a single HTML
      file you can open by double-clicking. Search, multi-tag filtering and per-card
      gradients are all plain JavaScript, with a WebGL scanline background that degrades
      gracefully when WebGL is unavailable.`,
    tech: ['JavaScript', 'HTML5', 'CSS3', 'WebGL (OGL)', 'localStorage'],
    links: [{ label: 'GitHub', url: 'https://github.com/Richard1037/Idea-Card-Wall' }],
    year: '2026',
    featured: true,
  },
  {
    name: 'Personal Card',
    tagline: 'A single-file profile card where the visual detail is the point.',
    description: `I wanted a calling card that felt crafted rather than generated, so I
      built one with no framework and no build step — one HTML file plus a CDN icon set.
      It has day/night themes that remember your choice, a perspective grid that tilts
      with the cursor, floating blurred light blobs, and one-click email copying. Most of
      the effort went into the unglamorous parts: keeping the animation smooth, respecting
      prefers-reduced-motion, and labelling every control for screen readers.`,
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Iconify'],
    links: [{ label: 'GitHub', url: 'https://github.com/Richard1037/personal-card' }],
    year: '2026',
    featured: true,
  },
  {
    name: 'This site',
    tagline: 'A static homepage that costs nothing to run and can change hosts in minutes.',
    description: `I wanted a homepage that would still work in five years, so I deliberately
      avoided everything that rots: no client-side JavaScript, no CSS framework, no external
      fonts. Content lives in one data file, fully separate from layout. Astro renders it to
      plain HTML at build time and Cloudflare Workers serves it, with every push to main
      deploying automatically. The entire built site is under 20 KB.`,
    tech: ['Astro', 'TypeScript', 'CSS', 'Cloudflare Workers'],
    links: [{ label: 'GitHub', url: 'https://github.com/Richard1037/personal-site' }],
    year: '2026',
  },
];

/* ==========================================================================
   5. 经历时间线
   --------------------------------------------------------------------------
   你说经历暂无，所以这里只放了教育背景和算法竞赛背景（都是事实，不是编的）。
   之后有实习 / 科研，往数组最前面添加即可，格式照抄现成那条。
   ========================================================================== */

export const experiences: Experience[] = [
  {
    kind: 'education',
    title: 'BSc in Artificial Intelligence',
    org: 'Gaoling School of Artificial Intelligence, Renmin University of China',
    period: '2026 – 2030 (expected)',
    description: `Coursework in mathematics, programming and the foundations of machine
      learning, alongside self-directed work on web tools.`,
    tags: ['Beijing'],
  },
  {
    // 三个奖项合并成了一条：你想表达的是"有算法底子"，而不是陈列荣誉。
    // 想恢复成三条独立奖项，照抄这条的格式拆开即可。
    kind: 'competition',
    title: 'Competitive programming',
    org: 'NOIP · WC · NOI',
    period: '2024 – 2025',
    description: `Two-time NOIP first prize, plus bronze at the national winter camp and
      the national finals. I don't compete any more — what I kept from it is a working
      knowledge of the algorithms and data structures on the NOI syllabus, everything
      except link-cut trees, which I never got round to.`,
    tags: ['Algorithms', 'C++'],
    links: [
      {
        label: 'Contest write-ups on my blog',
        url: 'https://www.cnblogs.com/Richardwhr',
      },
    ],
  },
];

/* ==========================================================================
   6. 联系方式
   ========================================================================== */

export const contactLinks: Link[] = [
  { label: 'Email', url: 'mailto:hongrui_w@outlook.com', hint: 'hongrui_w@outlook.com' },
  // 微信号，没有可跳转的地址，鼠标悬停显示 ID
  { label: 'WeChat', url: '', hint: 'Richard_1037' },
  { label: 'GitHub', url: 'https://github.com/Richard1037', hint: 'github.com/Richard1037' },
  // 首屏只显示前 3 个，所以 Blog 出现在底部的 Contact 区
  { label: 'Blog', url: 'https://www.cnblogs.com/Richardwhr', hint: 'cnblogs.com/Richardwhr' },
];

/** 用于 <title> 和分享卡片的副标题（不显示在页面上）。 */
export const seoHeadline =
  'BSc in Artificial Intelligence · Renmin University of China';

/** 搜索引擎和社交平台分享时显示的描述。 */
export const siteDescription =
  'Personal site of Richard Wang — first-year AI student at Renmin University of China, building dependency-free web tools.';
