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
    ],

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
    ],

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
    ],

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
    ],

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
    ],

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