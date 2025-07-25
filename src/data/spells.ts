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
  },
  {
    id: 'avada-kedavra',
    name: 'Avada Kedavra',
    nameZh: '阿瓦达索命',
    incantation: 'uh-VAH-də kə-DAV-rə',
    type: 'attack',
    typeZh: '不可饶恕咒',
    effect: '立即杀死目标',
    wandMovement: '强有力的向前指',
    difficulty: 'expert',
    description: '三大不可饶恕咒之一，能够立即杀死任何生物。使用此咒将面临终身监禁。',
    usage: ['禁止使用']
  },
  {
    id: 'crucio',
    name: 'Crucio',
    nameZh: '钻心剜骨',
    incantation: 'KROO-see-oh',
    type: 'attack',
    typeZh: '不可饶恕咒',
    effect: '造成极度痛苦',
    wandMovement: '指向目标',
    difficulty: 'expert',
    description: '三大不可饶恕咒之一，能够对目标造成极度的痛苦而不留下任何外伤。',
    usage: ['禁止使用']
  },
  {
    id: 'imperio',
    name: 'Imperio',
    nameZh: '夺魂咒',
    incantation: 'im-PEER-ee-oh',
    type: 'attack',
    typeZh: '不可饶恕咒',
    effect: '完全控制目标',
    wandMovement: '指向目标头部',
    difficulty: 'expert',
    description: '三大不可饶恕咒之一，能够完全控制目标的意志和行动。',
    usage: ['禁止使用']
  },
  {
    id: 'accio',
    name: 'Accio',
    nameZh: '飞来咒',
    incantation: 'AH-see-oh',
    type: 'utility',
    typeZh: '魅惑咒',
    effect: '召唤物品',
    wandMovement: '向自己挥动',
    difficulty: 'intermediate',
    description: '召唤咒能够将远处的物品召唤到施咒者手中，距离越远越难控制。',
    usage: ['取回物品', '紧急情况', '便利生活']
  },
  {
    id: 'reducto',
    name: 'Reducto',
    nameZh: '粉身碎骨',
    incantation: 're-DUK-toh',
    type: 'attack',
    typeZh: '恶咒',
    effect: '爆破物体',
    wandMovement: '猛烈向前指',
    difficulty: 'advanced',
    description: '爆破咒能够将固体物质炸成碎片，威力强大但难以控制。',
    usage: ['破坏障碍', '战斗', '拆除']
  },
  {
    id: 'petrificus-totalus',
    name: 'Petrificus Totalus',
    nameZh: '全身束缚咒',
    incantation: 'pe-TRIF-i-kus to-TAH-lus',
    type: 'attack',
    typeZh: '恶咒',
    effect: '全身僵硬',
    wandMovement: '从头到脚挥动',
    difficulty: 'intermediate',
    description: '石化咒能够使目标全身僵硬无法动弹，但意识仍然清醒。',
    usage: ['制服敌人', '恶作剧', '自卫']
  },
  {
    id: 'finite-incantatem',
    name: 'Finite Incantatem',
    nameZh: '咒立停',
    incantation: 'fi-NEE-tay in-can-TAH-tem',
    type: 'utility',
    typeZh: '魅惑咒',
    effect: '终止咒语效果',
    wandMovement: '向上挥动',
    difficulty: 'intermediate',
    description: '通用的反咒，能够终止大多数正在进行的咒语效果。',
    usage: ['解除咒语', '紧急情况', '魔法事故']
  },
  {
    id: 'obliviate',
    name: 'Obliviate',
    nameZh: '一忘皆空',
    incantation: 'oh-BLIV-ee-ate',
    type: 'utility',
    typeZh: '魅惑咒',
    effect: '删除记忆',
    wandMovement: '复杂的圆形动作',
    difficulty: 'expert',
    description: '遗忘咒能够选择性地删除目标的特定记忆，需要极高的技巧。',
    usage: ['保护魔法世界秘密', '治疗创伤', '执法']
  },
  {
    id: 'riddikulus',
    name: 'Riddikulus',
    nameZh: '滑稽滑稽',
    incantation: 'ri-di-KU-lus',
    type: 'defense',
    typeZh: '魅惑咒',
    effect: '对付博格特',
    wandMovement: '轻快的挥动',
    difficulty: 'intermediate',
    description: '专门用来对付博格特的咒语，通过想象滑稽的场景来削弱博格特的力量。',
    usage: ['对抗博格特', '克服恐惧']
  },
  {
    id: 'episkey',
    name: 'Episkey',
    nameZh: '愈合如初',
    incantation: 'eh-PIS-key',
    type: 'healing',
    typeZh: '治疗咒',
    effect: '治疗轻伤',
    wandMovement: '轻触伤口',
    difficulty: 'intermediate',
    description: '基础的治疗咒语，能够愈合轻微的外伤如割伤和擦伤。',
    usage: ['治疗外伤', '急救', '日常护理']
  },
  {
    id: 'vulnera-sanentur',
    name: 'Vulnera Sanentur',
    nameZh: '愈合咒',
    incantation: 'vul-NER-ah sah-NEN-tur',
    type: 'healing',
    typeZh: '治疗咒',
    effect: '治疗严重伤口',
    wandMovement: '在伤口上方画十字',
    difficulty: 'expert',
    description: '强力的治疗咒语，能够愈合由黑魔法造成的严重伤口。',
    usage: ['治疗重伤', '黑魔法伤害', '紧急医疗']
  },
  {
    id: 'sectumsempra',
    name: 'Sectumsempra',
    nameZh: '神锋无影',
    incantation: 'sec-tum-SEM-pra',
    type: 'attack',
    typeZh: '恶咒',
    effect: '造成深度切割伤',
    wandMovement: '如挥剑般斜劈',
    difficulty: 'expert',
    description: '极其危险的黑魔法咒语，能够在目标身上造成深度的切割伤，如同被无形的剑刃攻击。',
    usage: ['战斗', '决斗', '危险情况']
  },
  {
    id: 'confundo',
    name: 'Confundo',
    nameZh: '混淆咒',
    incantation: 'con-FUN-do',
    type: 'utility',
    typeZh: '魅惑咒',
    effect: '使目标混乱',
    wandMovement: '螺旋形挥动',
    difficulty: 'intermediate',
    description: '混淆咒能够使目标的思维变得混乱，无法正确判断情况。',
    usage: ['干扰敌人', '逃脱', '恶作剧']
  },
  {
    id: 'imperio-minor',
    name: 'Imperius Minor',
    nameZh: '轻度迷魂咒',
    incantation: 'im-PEER-ee-us MY-nor',
    type: 'utility',
    typeZh: '魅惑咒',
    effect: '轻度影响意志',
    wandMovement: '轻柔指向',
    difficulty: 'advanced',
    description: '夺魂咒的弱化版本，能够轻微影响目标的判断，但不会完全控制。',
    usage: ['说服', '谈判', '影响决定']
  },
  {
    id: 'mobiliarbus',
    name: 'Mobiliarbus',
    nameZh: '树木移动咒',
    incantation: 'mo-bil-ee-AR-bus',
    type: 'transfiguration',
    typeZh: '变形术',
    effect: '使树木移动',
    wandMovement: '向树挥动',
    difficulty: 'advanced',
    description: '能够使树木和其他植物按照施咒者的意愿移动和攻击。',
    usage: ['植物控制', '环境改造', '战斗辅助']
  },
  {
    id: 'densaugeo',
    name: 'Densaugeo',
    nameZh: '门牙赛大棒',
    incantation: 'den-SAW-jee-oh',
    type: 'transfiguration',
    typeZh: '变形术',
    effect: '使牙齿快速生长',
    wandMovement: '指向目标嘴部',
    difficulty: 'intermediate',
    description: '恶作剧咒语，能够使目标的门牙快速生长到异常大小。',
    usage: ['恶作剧', '羞辱敌人']
  },
  {
    id: 'furnunculus',
    name: 'Furnunculus',
    nameZh: '火疖子咒',
    incantation: 'fur-NUN-ku-lus',
    type: 'attack',
    typeZh: '恶咒',
    effect: '使皮肤长疖子',
    wandMovement: '快速点击',
    difficulty: 'intermediate',
    description: '能够在目标皮肤上产生痛苦的疖子，虽然不致命但极其难受。',
    usage: ['惩罚', '恶作剧', '非致命攻击']
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