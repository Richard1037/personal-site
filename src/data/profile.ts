/**
 * ============================================================================
 *  这是你更新网站时【唯一需要修改】的文件。
 *
 *  改这里的内容 -> 提交到 GitHub -> 网站自动更新。不需要碰任何布局代码。
 *
 *  标了 TODO 的地方需要你确认或补全。标了 DRAFT 的地方是我代笔的初稿，
 *  请务必读一遍、改成你自己的话——别人写的自我描述放在你的主页上，
 *  一旦被追问细节会很难受。
 * ============================================================================
 */

/** 一个外部链接（GitHub、演示地址、论文、公司官网……）。 */
export interface Link {
  label: string;
  url: string;
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
}

export interface SkillGroup {
  label: string;
  items: string[];
}

/* ==========================================================================
   1. 基本信息
   ========================================================================== */

export const profile = {
  /** 显示为页面主标题 */
  name: 'Richard Wang',
  /** 中文名，显示在主标题旁边的小字；不需要就设为 '' */
  nameLocal: '汪宏睿',

  /**
   * TODO 确认：GSAI 既有本科也有人工智能硕士/博士。英文里最好写清楚是哪一种，
   * 招聘方很在意这个区别。改成下面二者之一：
   *   'BSc in Artificial Intelligence · Renmin University of China'
   *   'MSc in Artificial Intelligence · Renmin University of China'
   */
  headline: 'Artificial Intelligence · Renmin University of China',

  /**
   * DRAFT 你的"一句话价值主张"。我没法替你决定方向，这是我根据你的项目
   * 和"still exploring"写的版本——读一遍，不准确就自己改。
   */
  subheadline:
    'First-year AI student in Beijing, building small dependency-free web tools while I work out where in AI to go deep.',

  location: 'Beijing, China',

  /**
   * 留空则不显示。将来想开放实习机会就填，例如：
   * 'Open to Summer 2027 internships'
   */
  status: '',

  email: 'hongrui_w@outlook.com',

  /** 页脚版权年份起点 */
  since: 2026,

  /** 联系板块的引导语。1~2 句，说明你希望收到什么样的联系。 */
  contactNote:
    "I'm happy to hear about internships, research opportunities, or just to compare notes on a project. Email is the fastest way to reach me.",
};

/* ==========================================================================
   2. 关于我 + 技能
   ========================================================================== */

/**
 * DRAFT 下面两段是我根据你的信息代笔的。请务必逐句读一遍，把不像你说的话改掉。
 * 好的自我介绍只需要回答三件事：你是谁、你在做什么、你为什么在意它。
 */
export const about: string[] = [
  `I'm a first-year student at the Gaoling School of Artificial Intelligence,
   Renmin University of China. Most of what I've built so far started as something
   I simply wanted to exist — a place to keep half-formed ideas, a card that says
   who I am without a framework doing the talking.`,

  `I keep coming back to the constraint of zero dependencies: plain HTML, CSS and
   JavaScript, no build step, one file you can open by double-clicking it. It forces
   you to understand what you are actually shipping. Lately I'm spending more time on
   the AI side of my degree, looking for the problem I want to stay with.`,
];

/**
 * TODO 技能。C++ 和 Python 是你自己列的；Web 一组是依据你两个仓库实际使用的
 * 技术补的（都是原生实现，没有框架）。不确定该不该写就先删掉那一组——
 * 写了就要经得起追问。
 */
export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['C++', 'Python'],
  },
  {
    label: 'Web (no frameworks)',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
];

/* ==========================================================================
   3. 项目作品集
   --------------------------------------------------------------------------
   三个项目均取自你的 GitHub 仓库，描述由我依据各仓库 README 改写。
   建议自己核对一遍技术细节，确保每句话你都能在面试里展开讲。
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
   4. 经历时间线
   --------------------------------------------------------------------------
   你说经历暂无，所以这里只放了教育背景（这是事实，不是编的）。
   之后有实习 / 科研 / 竞赛，往数组最前面添加即可，格式照抄下面这条。
   ========================================================================== */

export const experiences: Experience[] = [
  {
    kind: 'education',
    /**
     * TODO 确认学位类型和入学年份：
     *   本科 -> 'BSc in Artificial Intelligence'，起止 '2026 – 2030 (expected)'
     *   硕士 -> 'MSc in Artificial Intelligence'，起止 '2026 – 2029 (expected)'
     */
    title: 'Artificial Intelligence',
    org: 'Gaoling School of Artificial Intelligence, Renmin University of China',
    period: '2026 – Present',
    description: `Coursework in mathematics, programming and the foundations of machine
      learning, alongside self-directed work on web tools.`,
    tags: ['Beijing'],
  },
];

/* ==========================================================================
   5. 联系方式
   ========================================================================== */

export const contactLinks: Link[] = [
  { label: 'Email', url: 'mailto:hongrui_w@outlook.com' },
  { label: 'GitHub', url: 'https://github.com/Richard1037' },
];

/** 搜索引擎和社交平台分享时显示的描述。 */
export const siteDescription =
  'Personal site of Richard Wang — first-year AI student at Renmin University of China, building dependency-free web tools.';
