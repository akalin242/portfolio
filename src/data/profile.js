const profile = {
  name: 'あかり',
  bio: '计算机科学与技术学生 · 果壳在读 · 日本語勉強中',

  avatar: '',

  social: [
    { label: 'GitHub', url: 'https://github.com', icon: 'github' },
    { label: 'Email', url: 'mailto:1612196510@qq.com', icon: 'email' },
    { label: 'B站', url: 'https://space.bilibili.com', icon: 'bilibili' },
  ],

  about: `本科生一枚，无所事事`,

  education: {
    school: '果壳 · 计算机科学与技术 · 本科在读',
    details: ['编译原理', '操作系统', '计算机体系结构', '明日方舟', 'Battlefield', '日本語勉強中'],
  },

  interests: [
    {
      title: '游戏',
      desc: '明日方舟 / Battlefield 玩家。相信好游戏是好故事的载体。',
      emoji: '🎮',
      color: '#6366f1',
    },
    {
      title: '编程',
      desc: 'C / C++，还在学习中。正在探索编译器和计算机底层世界。',
      emoji: '💻',
      color: '#3b82f6',
    },
    {
      title: '音乐',
      desc: '码代码必备 BGM，偏好后摇、电子和 Lo-fi。',
      emoji: '🎵',
      color: '#ec4899',
    },
    {
      title: '日语',
      desc: '日本語勉強中。喜欢通过动漫和日剧学习，目标是能流畅阅读原版轻小说。',
      emoji: '📖',
      color: '#f59e0b',
    },
    {
      title: '开源探索',
      desc: '关注编译器、高性能计算领域的开源项目，用 AI 辅助学习和开发。',
      emoji: '🔧',
      color: '#10b981',
    },
    {
      title: '动漫',
      desc: '对优秀的世界观设定和美术风格没有抵抗力。追番是日常。',
      emoji: '🎬',
      color: '#8b5cf6',
    },
  ],

  skills: [
    'C', 'C++', 'Git', 'Linux', 'VS Code',
    '编译原理', 'SIMD', '多线程编程',
    '日本語 JLPT N?',
  ],

  footer: '© 2026 あかり',
};

export default profile;
