export interface Spell {
  id: string;
  name: string;
  nameZh: string;
  incantation: string;
  type: 'attack' | 'defense' | 'utility' | 'healing' | 'transfiguration' | 'charm';
  typeZh: string;
  effect: string;
  wandMovement: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  description: string;
  usage: string[];
}

export const SPELLS: Spell[] = [
  {
    id: 'lumos',
    name: 'Lumos',
    nameZh: '荧光闪烁',
    incantation: 'LOO-mos',
    type: 'utility',
    typeZh: '魅惑咒',
    effect: '使魔杖尖端发出光亮',
    wandMovement: '轻点魔杖',
    difficulty: 'beginner',
    description: '这是一个基础的照明咒语，能让魔杖尖端发出明亮的光芒，在黑暗中提供照明。',
    usage: ['夜间照明', '探索黑暗区域', '阅读']
  },
  {
    id: 'nox',
    name: 'Nox',
    nameZh: '诺克斯',
    incantation: 'NOCKS',
    type: 'utility',
    typeZh: '魅惑咒',
    effect: '熄灭魔杖光亮',
    wandMovement: '轻点魔杖',
    difficulty: 'beginner',
    description: '用于熄灭荧光闪烁咒语产生的光亮，是荧光闪烁的反咒。',
    usage: ['熄灭光源', '隐蔽行动']
  },
  {
    id: 'expelliarmus',
    name: 'Expelliarmus',
    nameZh: '除你武器',
    incantation: 'ex-PEL-ee-AR-mus',
    type: 'charm',
    typeZh: '魅惑咒',
    effect: '缴械对手的武器',
    wandMovement: '向前挥动',
    difficulty: 'intermediate',
    description: '这是一个缴械咒语，能够将对手手中的武器击飞，是决斗中常用的防御性咒语。',
    usage: ['决斗', '自卫', '缴械']
  },
  {
    id: 'wingardium-leviosa',
    name: 'Wingardium Leviosa',
    nameZh: '羽加迪姆勒维奥萨',
    incantation: 'win-GAR-dee-um levi-O-sa',
    type: 'utility',
    typeZh: '魅惑咒',
    effect: '使物体漂浮',
    wandMovement: '轻柔地挥动和轻弹',
    difficulty: 'intermediate',
    description: '悬浮咒能够使物体在空中漂浮，是霍格沃兹一年级学生学习的基础咒语之一。',
    usage: ['移动物体', '清洁高处', '搬运重物']
  },
  {
    id: 'alohomora',
    name: 'Alohomora',
    nameZh: '阿拉霍洞开',
    incantation: 'ah-LOH-ho-MOR-ah',
    type: 'utility',
    typeZh: '魅惑咒',
    effect: '开锁',
    wandMovement: '指向锁孔',
    difficulty: 'intermediate',
    description: '开锁咒能够打开大多数普通的锁，但对魔法保护的锁可能无效。',
    usage: ['开门', '开箱子', '紧急情况']
  },
  {
    id: 'stupefy',
    name: 'Stupefy',
    nameZh: '昏昏倒地',
    incantation: 'STOO-puh-fye',
    type: 'attack',
    typeZh: '恶咒',
    effect: '使目标昏迷',
    wandMovement: '快速向前指',
    difficulty: 'advanced',
    description: '昏迷咒能够使目标立即失去意识，是傲罗和决斗者常用的攻击性咒语。',
    usage: ['制服敌人', '自卫', '执法']
  },
  {
    id: 'protego',
    name: 'Protego',
    nameZh: '盔甲护身',
    incantation: 'pro-TAY-go',
    type: 'defense',
    typeZh: '魅惑咒',
    effect: '创造保护屏障',
    wandMovement: '向上挥动',
    difficulty: 'advanced',
    description: '铁甲咒能够创造一个无形的屏障，反弹大多数咒语和物理攻击。',
    usage: ['防御咒语', '保护自己', '决斗防御']
  },
  {
    id: 'expecto-patronum',
    name: 'Expecto Patronum',
    nameZh: '呼神护卫',
    incantation: 'ex-PEK-toh pa-TROH-num',
    type: 'defense',
    typeZh: '魅惑咒',
    effect: '召唤守护神',
    wandMovement: '复杂的挥动',
    difficulty: 'expert',
    description: '守护神咒是最困难的防御性咒语之一，能够召唤守护神来抵御摄魂怪和其他黑暗生物。',
    usage: ['对抗摄魂怪', '传递消息', '心灵防护']
  }
];

export const getSpellsByType = (type: string): Spell[] => {
  return SPELLS.filter(spell => spell.type === type);
};

export const searchSpells = (query: string): Spell[] => {
  const lowercaseQuery = query.toLowerCase();
  return SPELLS.filter(spell => 
    spell.name.toLowerCase().includes(lowercaseQuery) ||
    spell.nameZh.includes(lowercaseQuery) ||
    spell.effect.toLowerCase().includes(lowercaseQuery)
  );
};

export const getSpellById = (id: string): Spell | undefined => {
  return SPELLS.find(spell => spell.id === id);
};