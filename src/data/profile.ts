/**
 * ============================================================================
 *  这是你更新网站时【唯一需要修改】的文件。
 *
 *  改这里的内容 -> 提交到 GitHub -> 网站自动更新。不需要碰任何布局代码。
 *  所有以 TODO 开头的注释都是需要你替换成真实信息的占位说明。
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
  /** 设为 true 会加大卡片并排在前面；建议只标记 2~3 个最重要的项目 */
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
  /** 你做了什么、产出了什么。1~3 句。没有具体产出就写你学到了什么可迁移的能力。 */
  description: string;
  /** 可选的关键词标签 */
  tags?: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

/* ==========================================================================
   1. 基本信息 —— TODO: 全部替换成你的真实信息
   ========================================================================== */

export const profile = {
  /** 英文名或拼音，显示为页面主标题 */
  name: 'Zhang San',
  /** 中文名（可选，显示在主标题旁边的小字；不需要就设为空字符串 ''） */
  nameLocal: '张三',

  /** 一句话身份，例如 'BSc Computer Science, Zhejiang University' */
  headline: 'BSc Computer Science · Zhejiang University',

  /**
   * 你的"一句话价值主张"。这是全站最重要的一句话。
   * 好例子：'I build tools that make research data easier to trust.'
   * 坏例子：'A passionate developer who loves coding and learning new things.'
   */
  subheadline:
    'I build small, focused web tools that make study and research workflows less painful.',

  /** 所在城市 */
  location: 'Hangzhou, China',

  /** 当前状态，招聘方很在意。不需要就设为 '' */
  status: 'Open to Summer 2026 internships',

  /** 联系邮箱 */
  email: 'you@example.com',

  /** 页脚版权署名用的年份起点（自动显示为 2025–当前年份） */
  since: 2025,

  /** 联系板块的引导语。1~2 句，说明你希望收到什么样的联系。 */
  contactNote:
    "I'm always happy to hear about internships, research collaborations, or just to compare notes on a project. Email is the fastest way to reach me.",
};

/* ==========================================================================
   2. 关于我 + 技能 —— TODO: 替换
   ========================================================================== */

/** 2~3 段短文，每段 2~3 句。第一段讲你是谁、在做什么；后面讲你的兴趣方向或做事方式。 */
export const about: string[] = [
  `I'm an undergraduate in computer science at Zhejiang University. Most of what I
   build starts as a small annoyance in my own workflow — a script that got out of
   hand, or a tool I wished existed while writing a lab report.`,

  `Right now I'm most interested in the unglamorous end of software: data pipelines,
   developer tooling, and the interfaces that make messy information legible. I care
   more about whether something is still maintainable in two years than about whether
   it uses the newest framework.`,
];

/** 技能分组。3~4 组、每组 4~8 项最合适。不要写"精通"，写了就要能被追问。 */
export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'TypeScript', 'C++', 'SQL'],
  },
  {
    label: 'Web & Frameworks',
    items: ['React', 'Node.js', 'FastAPI', 'PostgreSQL'],
  },
  {
    label: 'Tools & Practices',
    items: ['Git', 'Docker', 'Linux', 'Pytest', 'CI/CD'],
  },
];

/* ==========================================================================
   3. 项目作品集 —— TODO: 换成你自己的 3~5 个项目
   --------------------------------------------------------------------------
   找不到"项目"？课程作业、竞赛作品、给社团做的小工具、自己写的脚本都算。
   宁可有 3 个写清楚的真实项目，也不要 10 个只有名字的仓库链接。
   ========================================================================== */

export const projects: Project[] = [
  {
    name: 'LabNote',
    tagline: 'Turns scattered lab notes into a searchable, citable archive.',
    description: `My lab kept results in a folder of inconsistently named spreadsheets, and
      finding last semester's measurements took longer than re-running the experiment.
      I built a small ingestion pipeline plus a full-text search interface; the hard part
      was not search but designing a minimal required schema that people would actually
      fill in. Twelve lab members now use it weekly.`,
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'React'],
    links: [
      { label: 'GitHub', url: 'https://github.com/your-username/labnote' },
      { label: 'Live demo', url: 'https://labnote.example.com' },
    ],
    year: '2025',
    featured: true,
  },
  {
    name: 'CourseGraph',
    tagline: 'A prerequisite graph that helps students plan a four-year course path.',
    description: `Course prerequisites were only published as prose in the handbook, so
      planning a semester meant manually cross-referencing dozens of pages. I scraped and
      normalised the data into a directed graph and rendered it interactively. The
      interesting problem was handling circular and deprecated prerequisites that the
      official data silently contained.`,
    tech: ['TypeScript', 'D3.js', 'Vite'],
    links: [{ label: 'GitHub', url: 'https://github.com/your-username/coursegraph' }],
    year: '2024',
    featured: true,
  },
  {
    name: 'arXiv Digest Bot',
    tagline: 'A weekly email digest ranked by how close a paper is to your own work.',
    description: `Reading lists were drowning me. This bot embeds abstracts, compares them
      against a short description of my research interests, and emails the top five each
      Monday. Roughly 200 lines of Python with no LLM API — TF-IDF was good enough and
      costs nothing to run.`,
    tech: ['Python', 'scikit-learn', 'GitHub Actions'],
    links: [{ label: 'GitHub', url: 'https://github.com/your-username/arxiv-digest' }],
    year: '2024',
  },
];

/* ==========================================================================
   4. 经历时间线 —— TODO: 替换。没有的就删掉，宁缺毋滥。
   --------------------------------------------------------------------------
   建议顺序：实习 > 科研 > 竞赛获奖 > 奖学金 > 教育背景。按时间倒序排列。
   ========================================================================== */

export const experiences: Experience[] = [
  {
    kind: 'work',
    title: 'Software Engineering Intern',
    org: 'Some Technology Co., Ltd.',
    period: 'Jul 2025 – Sep 2025',
    description: `Worked on an internal data-quality dashboard used by the operations team.
      I replaced a manual CSV reconciliation step with a scheduled validator, which cut the
      weekly reporting cycle from about four hours to under twenty minutes.`,
    tags: ['Python', 'Airflow', 'Internal tools'],
  },
  {
    kind: 'research',
    title: 'Undergraduate Research Assistant',
    org: 'Human-Computer Interaction Lab',
    period: 'Mar 2025 – Present',
    description: `Assist with the data collection and analysis pipeline for a study on how
      students navigate academic search interfaces. I maintain the logging infrastructure
      and wrote the preprocessing scripts used in the first paper submission.`,
    tags: ['Research', 'Data pipelines'],
  },
  {
    kind: 'competition',
    title: 'Second Prize, National Collegiate Programming Contest',
    org: 'Regional Round',
    period: 'Nov 2024',
    description: `Solved 7 of 11 problems as part of a three-person team; responsible for the
      graph and dynamic-programming problems.`,
    tags: ['Algorithms', 'C++'],
  },
  {
    kind: 'award',
    title: 'First-Class Academic Scholarship',
    org: 'Zhejiang University',
    period: '2024',
    description: `Awarded to the top 5% of the cohort by GPA.`,
  },
  {
    kind: 'education',
    title: 'BSc in Computer Science',
    org: 'Zhejiang University',
    period: '2023 – 2027 (expected)',
    description: `GPA 3.8/4.0. Relevant coursework: Data Structures, Databases, Operating
      Systems, Machine Learning, Software Engineering.`,
  },
];

/* ==========================================================================
   5. 页面底部的联系方式按钮 —— TODO: 替换链接
   ========================================================================== */

export const contactLinks: Link[] = [
  { label: 'Email', url: 'mailto:you@example.com' },
  { label: 'GitHub', url: 'https://github.com/your-username' },
  // 按需添加，不需要就删掉这一行：
  // { label: 'LinkedIn', url: 'https://www.linkedin.com/in/your-username' },
  // { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=XXXX' },
];

/** 搜索引擎和社交平台分享时显示的描述。1~2 句。 */
export const siteDescription =
  'Personal site of Zhang San — computer science undergraduate building tools for research and study workflows.';
