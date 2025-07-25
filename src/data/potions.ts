export interface Potion {
  id: string;
  name: string;
  nameZh: string;
  type: 'healing' | 'transformation' | 'enhancement' | 'poison' | 'utility';
  typeZh: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  brewTime: number;
  effect: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}

export const POTIONS: Potion[] = [
  {
    id: 'healing-potion',
    name: 'Healing Potion',
    nameZh: '治疗药水',
    type: 'healing',
    typeZh: '治疗类',
    difficulty: 'intermediate',
    brewTime: 30,
    effect: '治疗轻微伤口和疾病',
    description: '一种基础的治疗药水，能够快速愈合小伤口并缓解轻微的疾病症状。',
    ingredients: [
      '独角兽毛 3根',
      '月长石粉末 1茶匙',
      '薄荷叶 5片（新鲜采摘）',
      '纯净水 500毫升'
    ],
    instructions: [
      '将纯净水倒入坩埚中，用中火加热',
      '水开始冒泡时加入月长石粉末，搅拌3次',
      '逐一加入薄荷叶，每片间隔10秒',
      '最后加入独角兽毛，顺时针搅拌7次',
      '煮沸5分钟后熄火，静置冷却'
    ]
  },
  {
    id: 'polyjuice-potion',
    name: 'Polyjuice Potion',
    nameZh: '复方汤剂',
    type: 'transformation',
    typeZh: '变形类',
    difficulty: 'expert',
    brewTime: 43200,
    effect: '变成另一个人的外貌',
    description: '极其复杂的变形药水，能让服用者在一小时内完全变成另一个人的外貌。',
    ingredients: [
      '水蛭汁 3盎司',
      '草蛉虫 21只（炖煮21天）',
      '双角兽角粉 1盎司',
      '结草 1束（满月时采摘）',
      '非洲树蛇皮丝 1盎司',
      '目标人物的一部分（头发、指甲等）'
    ],
    instructions: [
      '将水蛭汁倒入坩埚，用小火加热',
      '加入炖煮好的草蛉虫，搅拌至溶解',
      '撒入双角兽角粉，逆时针搅拌',
      '加入结草，继续搅拌直到药水变成泥浆状',
      '加入非洲树蛇皮丝，药水会发出嘶嘶声',
      '最后加入目标人物的一部分，药水会改变颜色'
    ]
  },
  {
    id: 'felix-felicis',
    name: 'Felix Felicis',
    nameZh: '福灵剂',
    type: 'enhancement',
    typeZh: '增强类',
    difficulty: 'expert',
    brewTime: 259200,
    effect: '带来好运',
    description: '传说中的幸运药水，能让服用者在短时间内拥有极好的运气。',
    ingredients: [
      '阿什温德蛋 1个',
      '鼠尾草 1束',
      '松节油 3滴',
      '月亮石 1颗（磨成粉末）',
      '独角兽尾毛 1根'
    ],
    instructions: [
      '在新月之夜开始制作',
      '将阿什温德蛋打散，倒入银制坩埚',
      '加入鼠尾草，用魔法火焰慢慢加热',
      '每隔一周加入一滴松节油',
      '满月时加入月亮石粉末',
      '最后加入独角兽尾毛，搅拌至金黄色'
    ]
  },
  {
    id: 'sleeping-draught',
    name: 'Sleeping Draught',
    nameZh: '安眠药水',
    type: 'utility',
    typeZh: '实用类',
    difficulty: 'beginner',
    brewTime: 15,
    effect: '诱发深度睡眠',
    description: '一种温和的安眠药水，能够帮助失眠者获得安稳的睡眠。',
    ingredients: [
      '薰衣草 10朵',
      '缬草根 2根（切碎）',
      '蜂蜜 2汤匙',
      '温水 300毫升'
    ],
    instructions: [
      '将温水倒入坩埚，保持微温',
      '加入切碎的缬草根，浸泡5分钟',
      '加入薰衣草，轻柔搅拌',
      '最后加入蜂蜜调味',
      '过滤后即可服用'
    ]
  },
  {
    id: 'pepperup-potion',
    name: 'Pepperup Potion',
    nameZh: '胡椒提神剂',
    type: 'healing',
    typeZh: '治疗类',
    difficulty: 'intermediate',
    brewTime: 45,
    effect: '治疗感冒',
    description: '专门用于治疗感冒的药水，服用后会从耳朵里冒出蒸汽。',
    ingredients: [
      '胡椒粉 1茶匙',
      '生姜 3片',
      '柠檬汁 2汤匙',
      '蜂蜜 1汤匙',
      '热水 400毫升'
    ],
    instructions: [
      '将热水倒入坩埚加热',
      '加入生姜片，煮沸10分钟',
      '加入胡椒粉，搅拌均匀',
      '离火后加入柠檬汁和蜂蜜',
      '趁热服用效果最佳'
    ]
  },
  {
    id: 'veritaserum',
    name: 'Veritaserum',
    nameZh: '吐真剂',
    type: 'utility',
    typeZh: '实用类',
    difficulty: 'expert',
    brewTime: 2160,
    effect: '强制说真话',
    description: '最强力的吐真药水，三滴就能让任何人说出最深藏的秘密。制作极其困难，需要满月周期。',
    ingredients: [
      '曼德拉草根 1根（成熟）',
      '月光石粉末 3茶匙',
      '银独角兽血 5滴',
      '真理之花花瓣 7片',
      '纯净山泉水 1升'
    ],
    instructions: [
      '在满月之夜开始制作',
      '将曼德拉草根切成薄片，浸泡在山泉水中',
      '每天在月光下搅拌一次，持续一个月',
      '最后一夜加入月光石粉末',
      '滴入银独角兽血，药水会发出银光',
      '最后加入真理之花花瓣，逐片加入'
    ]
  },
  {
    id: 'wolfsbane-potion',
    name: 'Wolfsbane Potion',
    nameZh: '狼毒药剂',
    type: 'utility',
    typeZh: '实用类',
    difficulty: 'expert',
    brewTime: 168,
    effect: '控制狼人变身',
    description: '极其复杂的药剂，能让狼人在满月时保持理智，不会失去人类意识。',
    ingredients: [
      '狼毒草 1束（新月采摘）',
      '银粉 2茶匙',
      '月见草油 10滴',
      '狼血 1盎司（自愿给予）',
      '圣水 500毫升'
    ],
    instructions: [
      '必须在满月前一周开始制作',
      '将狼毒草在圣水中浸泡三天',
      '第四天加入银粉，小心搅拌',
      '每天滴入2滴月见草油',
      '最后一天加入狼血',
      '必须在满月当晚服用'
    ]
  },
  {
    id: 'amortentia',
    name: 'Amortentia',
    nameZh: '迷情剂',
    type: 'enhancement',
    typeZh: '增强类',
    difficulty: 'advanced',
    brewTime: 720,
    effect: '产生强烈迷恋',
    description: '世界上最强力的迷情药水，会散发出每个人最喜爱的气味。不能产生真爱，只能制造迷恋。',
    ingredients: [
      '玫瑰花瓣 100片（日出时采摘）',
      '珍珠粉 1茶匙',
      '独角兽鬃毛 3根',
      '爱情鸟羽毛 1根',
      '月光水 300毫升'
    ],
    instructions: [
      '在情人节当天开始制作',
      '将玫瑰花瓣在月光水中浸泡',
      '每小时搅拌一次，持续12小时',
      '加入珍珠粉，药水会发出珍珠光泽',
      '加入独角兽鬃毛，逐根加入',
      '最后加入爱情鸟羽毛，药水会散发香气'
    ]
  },
  {
    id: 'aging-potion',
    name: 'Aging Potion',
    nameZh: '增龄剂',
    type: 'transformation',
    typeZh: '变形类',
    difficulty: 'advanced',
    brewTime: 180,
    effect: '暂时增加年龄',
    description: '能够暂时增加服用者的年龄，效果持续数小时。过量服用会导致快速衰老。',
    ingredients: [
      '时间沙 1小瓶',
      '老人胡须苔 5克',
      '岁月之花 3朵',
      '古树树皮 1片',
      '智慧泉水 400毫升'
    ],
    instructions: [
      '将智慧泉水加热至微沸',
      '加入古树树皮，煮沸30分钟',
      '加入老人胡须苔，搅拌至溶解',
      '逐朵加入岁月之花',
      '最后撒入时间沙，药水会变成金色'
    ]
  },
  {
    id: 'shrinking-solution',
    name: 'Shrinking Solution',
    nameZh: '缩身药水',
    type: 'transformation',
    typeZh: '变形类',
    difficulty: 'intermediate',
    brewTime: 90,
    effect: '缩小物体或生物',
    description: '能够将物体或生物缩小到原来的一半大小，效果可逆。',
    ingredients: [
      '缩水无花果 5个',
      '蚯蚓汁 2汤匙',
      '水仙根 1根（切碎）',
      '鼠尾草 1束',
      '纯净水 500毫升'
    ],
    instructions: [
      '将缩水无花果压成汁',
      '与纯净水混合，加热',
      '加入切碎的水仙根',
      '加入蚯蚓汁，搅拌均匀',
      '最后加入鼠尾草调味'
    ]
  },
  {
    id: 'swelling-solution',
    name: 'Swelling Solution',
    nameZh: '肿胀药水',
    type: 'transformation',
    typeZh: '变形类',
    difficulty: 'intermediate',
    brewTime: 75,
    effect: '使物体膨胀',
    description: '与缩身药水相反的效果，能够使物体或身体部位膨胀变大。',
    ingredients: [
      '膨胀豆 10颗',
      '河豚眼睛 2个',
      '气球花汁液 3滴',
      '发酵蜘蛛眼 1个',
      '温水 400毫升'
    ],
    instructions: [
      '将膨胀豆磨成粉末',
      '与温水混合，搅拌至溶解',
      '加入河豚眼睛，煮沸15分钟',
      '加入发酵蜘蛛眼',
      '最后滴入气球花汁液'
    ]
  },
  {
    id: 'draught-of-peace',
    name: 'Draught of Peace',
    nameZh: '平静药剂',
    type: 'healing',
    typeZh: '治疗类',
    difficulty: 'advanced',
    brewTime: 120,
    effect: '缓解焦虑和恐惧',
    description: '能够平息焦虑、恐惧和愤怒情绪，带来内心的平静。过量服用会导致昏睡。',
    ingredients: [
      '月见草 1束',
      '缬草根 3根',
      '薰衣草精油 5滴',
      '宁静水 300毫升',
      '银粉 1撮'
    ],
    instructions: [
      '将宁静水轻柔加热',
      '加入切碎的缬草根',
      '浸泡30分钟后过滤',
      '加入月见草，继续加热',
      '离火后加入薰衣草精油和银粉'
    ]
  },
  {
    id: 'strengthening-solution',
    name: 'Strengthening Solution',
    nameZh: '强力药剂',
    type: 'enhancement',
    typeZh: '增强类',
    difficulty: 'intermediate',
    brewTime: 60,
    effect: '增强体力和力量',
    description: '能够暂时大幅增强服用者的体力和力量，持续数小时。',
    ingredients: [
      '巨人血 3滴',
      '龙心弦粉末 1茶匙',
      '力量草 1束',
      '雄鹰羽毛 2根',
      '山泉水 400毫升'
    ],
    instructions: [
      '将山泉水煮沸',
      '加入力量草，煮沸20分钟',
      '加入龙心弦粉末，搅拌至溶解',
      '滴入巨人血，药水会变红',
      '最后加入雄鹰羽毛'
    ]
  },
  {
    id: 'wit-sharpening-potion',
    name: 'Wit-Sharpening Potion',
    nameZh: '智慧药水',
    type: 'enhancement',
    typeZh: '增强类',
    difficulty: 'intermediate',
    brewTime: 90,
    effect: '增强智力和记忆',
    description: '能够暂时提高思维敏捷度、记忆力和学习能力，考试前的热门药水。',
    ingredients: [
      '智慧果 3个',
      '猫头鹰羽毛 1根',
      '记忆草 1束',
      '水晶粉末 1茶匙',
      '清泉水 350毫升'
    ],
    instructions: [
      '将智慧果榨汁',
      '与清泉水混合加热',
      '加入记忆草，浸泡45分钟',
      '加入水晶粉末，搅拌至透明',
      '最后加入猫头鹰羽毛'
    ]
  },
  {
    id: 'invisibility-potion',
    name: 'Invisibility Potion',
    nameZh: '隐身药水',
    type: 'utility',
    typeZh: '实用类',
    difficulty: 'expert',
    brewTime: 300,
    effect: '使服用者隐身',
    description: '能够使服用者完全隐身，效果持续1小时。制作困难，材料稀有。',
    ingredients: [
      '隐身兽毛 5根',
      '幻影花瓣 10片',
      '透明水晶 1颗（磨成粉）',
      '月光露水 100毫升',
      '虚无草汁 3滴'
    ],
    instructions: [
      '在新月之夜制作',
      '将月光露水在银制坩埚中加热',
      '加入透明水晶粉末',
      '逐片加入幻影花瓣',
      '加入隐身兽毛，药水会变透明',
      '最后滴入虚无草汁'
    ]
  }
];

export const getPotionsByType = (type: string): Potion[] => {
  return POTIONS.filter(potion => potion.type === type);
};

export const searchPotions = (query: string): Potion[] => {
  const lowercaseQuery = query.toLowerCase();
  return POTIONS.filter(potion => 
    potion.name.toLowerCase().includes(lowercaseQuery) ||
    potion.nameZh.includes(lowercaseQuery) ||
    potion.effect.toLowerCase().includes(lowercaseQuery)
  );
};

export const getPotionById = (id: string): Potion | undefined => {
  return POTIONS.find(potion => potion.id === id);
};

export const getPotionTypes = (): string[] => {
  return [...new Set(POTIONS.map(potion => potion.type))];
};

export const getPotionTypeLabels = (): Record<string, string> => {
  return {
    healing: '治疗类',
    transformation: '变形类',
    enhancement: '增强类',
    poison: '毒药类',
    utility: '实用类'
  };
};

export const getPotionTypesWithLabels = (): { value: string; label: string }[] => {
  const types = getPotionTypes();
  const typeLabels = getPotionTypeLabels();
  
  return types.map(type => ({
    value: type,
    label: typeLabels[type] || type
  }));
};