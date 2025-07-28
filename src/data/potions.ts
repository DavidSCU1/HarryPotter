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
  },
  {
    id: 'skele-gro',
    name: 'Skele-Gro',
    nameZh: '生骨灵',
    type: 'healing',
    typeZh: '治疗类',
    difficulty: 'expert',
    brewTime: 480,
    effect: '重新生长骨骼',
    description: '能够重新生长缺失或严重受损的骨骼，过程极其痛苦但效果显著。',
    ingredients: [
      '龙骨粉 2茶匙',
      '独角兽角屑 1茶匙',
      '再生草根 3根',
      '钙质水晶 5颗',
      '治疗泉水 600毫升',
      '凤凰羽毛灰 1撮'
    ],
    instructions: [
      '将治疗泉水煮沸',
      '加入龙骨粉，搅拌至完全溶解',
      '加入再生草根，煮沸2小时',
      '研磨钙质水晶成粉末加入',
      '加入独角兽角屑，药水变成乳白色',
      '最后撒入凤凰羽毛灰，静置冷却'
    ]
  },
  {
    id: 'mandrake-restorative-draught',
    name: 'Mandrake Restorative Draught',
    nameZh: '曼德拉草复活药剂',
    type: 'healing',
    typeZh: '治疗类',
    difficulty: 'expert',
    brewTime: 1440,
    effect: '治愈石化状态',
    description: '专门用于治疗被蛇怪石化的受害者，需要成熟的曼德拉草制作。',
    ingredients: [
      '成熟曼德拉草 3株（完整）',
      '生命之水 500毫升',
      '复活石粉末 1茶匙',
      '太阳花精华 10滴',
      '纯银粉 1撮'
    ],
    instructions: [
      '将曼德拉草切碎（戴好耳塞）',
      '在生命之水中浸泡12小时',
      '用小火慢慢加热24小时',
      '加入复活石粉末，搅拌均匀',
      '滴入太阳花精华，药水发出金光',
      '最后撒入纯银粉，立即服用'
    ]
  },
  {
    id: 'blood-replenishing-potion',
    name: 'Blood-Replenishing Potion',
    nameZh: '补血药剂',
    type: 'healing',
    typeZh: '治疗类',
    difficulty: 'advanced',
    brewTime: 180,
    effect: '补充失血',
    description: '能够快速补充因失血过多而虚弱的身体，恢复血液循环。',
    ingredients: [
      '铁草叶 10片',
      '红宝石粉末 1茶匙',
      '牛血 100毫升（新鲜）',
      '生命力药草 1束',
      '纯净水 400毫升'
    ],
    instructions: [
      '将纯净水加热至微沸',
      '加入铁草叶，煮沸30分钟',
      '过滤后加入牛血',
      '加入红宝石粉末，药水变红',
      '最后加入生命力药草调味'
    ]
  },
  {
    id: 'antidote-to-common-poisons',
    name: 'Antidote to Common Poisons',
    nameZh: '通用解毒剂',
    type: 'healing',
    typeZh: '治疗类',
    difficulty: 'intermediate',
    brewTime: 90,
    effect: '解除常见毒素',
    description: '能够中和大部分常见的毒素和毒药，是医疗箱的必备药剂。',
    ingredients: [
      '牛黄 1颗',
      '独角兽毛 2根',
      '解毒草 1束',
      '活性炭粉 1茶匙',
      '圣水 300毫升'
    ],
    instructions: [
      '将牛黄研磨成细粉',
      '与圣水混合，加热',
      '加入解毒草，煮沸15分钟',
      '加入活性炭粉，搅拌至黑色',
      '最后加入独角兽毛，过滤服用'
    ]
  },
  {
    id: 'baruffios-brain-elixir',
    name: "Baruffio's Brain Elixir",
    nameZh: '巴拉菲奥的脑力激发药',
    type: 'enhancement',
    typeZh: '增强类',
    difficulty: 'advanced',
    brewTime: 240,
    effect: '增强记忆和专注力',
    description: '能够显著提高记忆力和专注力，考试期间的热门药剂。',
    ingredients: [
      '智慧果汁 200毫升',
      '猫头鹰脑髓 1茶匙',
      '记忆水晶 3颗（磨粉）',
      '专注草 1束',
      '清泉水 300毫升'
    ],
    instructions: [
      '将智慧果汁与清泉水混合',
      '加入猫头鹰脑髓，小心搅拌',
      '加入记忆水晶粉末',
      '加入专注草，煮沸1小时',
      '过滤后趁热服用'
    ]
  },
  {
    id: 'confusing-concoction',
    name: 'Confusing Concoction',
    nameZh: '迷糊药剂',
    type: 'utility',
    typeZh: '实用类',
    difficulty: 'intermediate',
    brewTime: 120,
    effect: '使人迷糊困惑',
    description: '能够让服用者或接触者产生迷糊和困惑的状态，思维变得混乱。',
    ingredients: [
      '迷糊菇 5个',
      '混乱花粉 1茶匙',
      '糊涂草汁 3滴',
      '雾水 250毫升',
      '蜘蛛网丝 1根'
    ],
    instructions: [
      '将迷糊菇切片晾干',
      '与雾水一起煮沸',
      '加入混乱花粉，搅拌成糊状',
      '滴入糊涂草汁',
      '最后加入蜘蛛网丝'
    ]
  },
  {
    id: 'elixir-of-life',
    name: 'Elixir of Life',
    nameZh: '长生不老药',
    type: 'enhancement',
    typeZh: '增强类',
    difficulty: 'expert',
    brewTime: 525600,
    effect: '延长生命',
    description: '传说中的药剂，需要魔法石制作，能够延长生命并保持青春。',
    ingredients: [
      '魔法石精华 1滴',
      '凤凰眼泪 3滴',
      '时间沙 1小瓶',
      '永恒之花 1朵',
      '生命之水 100毫升'
    ],
    instructions: [
      '此药剂制作极其复杂',
      '需要一年时间慢慢熬制',
      '每个月圆之夜加入一种材料',
      '最后加入魔法石精华',
      '只有尼可·勒梅掌握完整配方'
    ]
  },
  {
    id: 'hiccoughing-solution',
    name: 'Hiccoughing Solution',
    nameZh: '打嗝药水',
    type: 'utility',
    typeZh: '实用类',
    difficulty: 'beginner',
    brewTime: 30,
    effect: '引起打嗝',
    description: '恶作剧药水，能够让服用者不停打嗝，通常用于恶作剧。',
    ingredients: [
      '打嗝豆 10颗',
      '气泡草 1束',
      '碳酸水 200毫升',
      '薄荷叶 3片'
    ],
    instructions: [
      '将打嗝豆压碎',
      '与碳酸水混合',
      '加入气泡草，轻柔搅拌',
      '最后加入薄荷叶调味'
    ]
  },
  {
    id: 'laughing-potion',
    name: 'Laughing Potion',
    nameZh: '狂笑药水',
    type: 'utility',
    typeZh: '实用类',
    difficulty: 'beginner',
    brewTime: 45,
    effect: '引起狂笑',
    description: '另一种恶作剧药水，能够让服用者控制不住地大笑。',
    ingredients: [
      '笑花花瓣 20片',
      '快乐草汁 5滴',
      '气球鱼鳔 1个',
      '甜水 300毫升'
    ],
    instructions: [
      '将笑花花瓣在甜水中浸泡',
      '加热至微沸',
      '加入气球鱼鳔，煮沸20分钟',
      '最后滴入快乐草汁'
    ]
  },
  {
    id: 'draught-of-living-death',
    name: 'Draught of Living Death',
    nameZh: '生死水',
    type: 'poison',
    typeZh: '毒药类',
    difficulty: 'expert',
    brewTime: 480,
    effect: '使人陷入死亡般的沉睡',
    description: '极其危险的药水，能够使服用者陷入如死亡般的深度昏迷状态，几乎无法唤醒。',
    ingredients: [
      '水仙根 1根（切成薄片）',
      '苦艾汁 13滴',
      '睡莲根 1根（磨成粉末）',
      '死亡帽蘑菇 3个',
      '月光石粉末 1茶匙',
      '纯净水 500毫升'
    ],
    instructions: [
      '将水仙根切成最薄的薄片',
      '在坩埚中加入纯净水，小火加热',
      '逐片加入水仙根，每片间隔30秒',
      '加入睡莲根粉末，搅拌至完全溶解',
      '滴入苦艾汁，药水会变成淡紫色',
      '最后加入死亡帽蘑菇和月光石粉末',
      '煮沸1小时后静置冷却'
    ]
  },
  {
    id: 'confusing-concoction-v2',
    name: 'Confusing Concoction',
    nameZh: '迷糊药水',
    type: 'utility',
    typeZh: '实用类',
    difficulty: 'intermediate',
    brewTime: 120,
    effect: '使人思维混乱',
    description: '能够使服用者的思维变得混乱，无法集中注意力或做出正确判断。',
    ingredients: [
      '迷迭香 1束',
      '混乱草 5片叶子',
      '蝙蝠翅膀 2对',
      '水银 3滴',
      '雾水 300毫升'
    ],
    instructions: [
      '将雾水在银制坩埚中加热',
      '加入迷迭香，浸泡30分钟',
      '加入混乱草叶子，逐片加入',
      '研磨蝙蝠翅膀成粉末后加入',
      '最后小心滴入水银',
      '搅拌至药水呈银灰色'
    ]
  },
  {
    id: 'forgetfulness-potion',
    name: 'Forgetfulness Potion',
    nameZh: '健忘药水',
    type: 'utility',
    typeZh: '实用类',
    difficulty: 'intermediate',
    brewTime: 90,
    effect: '导致轻微记忆丧失',
    description: '能够使服用者忘记最近发生的事情，效果比一忘皆空咒温和。',
    ingredients: [
      '遗忘草 1束',
      '河水 400毫升',
      '白鲜皮 2片',
      '薄荷叶 7片',
      '银粉 1撮'
    ],
    instructions: [
      '将河水煮沸',
      '加入遗忘草，煮沸15分钟',
      '加入白鲜皮，继续煮沸',
      '离火后加入薄荷叶',
      '最后撒入银粉调味'
    ]
  },
  {
    id: 'baruffios-brain-elixir-v2',
    name: 'Baruffio\'s Brain Elixir',
    nameZh: '巴拉菲奥的大脑兴奋剂',
    type: 'enhancement',
    typeZh: '增强类',
    difficulty: 'advanced',
    brewTime: 240,
    effect: '增强大脑功能',
    description: '能够显著提高思维能力、记忆力和学习效率，是学生们的最爱。',
    ingredients: [
      '猫头鹰羽毛 3根',
      '智慧果汁 100毫升',
      '人参根 1根',
      '银杏叶 10片',
      '纯净水 350毫升',
      '蜂蜜 2汤匙'
    ],
    instructions: [
      '将人参根切片，在纯净水中浸泡2小时',
      '加热至微沸，加入银杏叶',
      '煮沸30分钟后过滤',
      '加入智慧果汁和蜂蜜',
      '最后加入猫头鹰羽毛',
      '搅拌至药水呈金黄色'
    ]
  },
  {
    id: 'blood-replenishing-potion-v2',
    name: 'Blood-Replenishing Potion',
    nameZh: '血液补充剂',
    type: 'healing',
    typeZh: '治疗类',
    difficulty: 'advanced',
    brewTime: 180,
    effect: '补充失血',
    description: '专门用于治疗失血过多的患者，能够快速补充血液并恢复体力。',
    ingredients: [
      '红宝石粉末 1茶匙',
      '铁草 1束',
      '龙血 5滴',
      '生命之水 200毫升',
      '红珊瑚粉 1撮'
    ],
    instructions: [
      '将生命之水在红宝石坩埚中加热',
      '加入铁草，煮沸至水变红',
      '加入红宝石粉末，搅拌至溶解',
      '滴入龙血，药水会发出红光',
      '最后撒入红珊瑚粉'
    ]
  },
  {
    id: 'skele-gro-v2',
    name: 'Skele-Gro',
    nameZh: '生骨灵',
    type: 'healing',
    typeZh: '治疗类',
    difficulty: 'expert',
    brewTime: 360,
    effect: '重新生长骨骼',
    description: '能够重新生长缺失或严重受损的骨骼，过程痛苦但效果显著。',
    ingredients: [
      '龙骨粉 2茶匙',
      '独角兽角粉 1茶匙',
      '钙石 3颗（磨成粉）',
      '骨髓草 1束',
      '强化水 400毫升'
    ],
    instructions: [
      '将强化水煮沸',
      '加入骨髓草，煮沸1小时',
      '过滤后加入龙骨粉',
      '加入独角兽角粉，搅拌至粘稠',
      '最后加入钙石粉末',
      '继续煮沸直到药水呈乳白色'
    ]
  },
  {
    id: 'mandrake-restorative-draught-v2',
    name: 'Mandrake Restorative Draught',
    nameZh: '曼德拉草复活药剂',
    type: 'healing',
    typeZh: '治疗类',
    difficulty: 'expert',
    brewTime: 720,
    effect: '治愈石化状态',
    description: '专门用于治愈被石化的患者，需要使用成熟的曼德拉草制作。',
    ingredients: [
      '成熟曼德拉草 1株（完整）',
      '复活水 500毫升',
      '太阳石粉末 1茶匙',
      '生命精华 3滴',
      '纯金粉 1撮'
    ],
    instructions: [
      '在满月之夜开始制作',
      '将曼德拉草完整放入复活水中',
      '用魔法火焰慢慢加热24小时',
      '加入太阳石粉末，药水会发光',
      '滴入生命精华，每滴间隔8小时',
      '最后撒入纯金粉完成'
    ]
  },
  {
    id: 'antidote-to-common-poisons-v2',
    name: 'Antidote to Common Poisons',
    nameZh: '万能解毒剂',
    type: 'healing',
    typeZh: '治疗类',
    difficulty: 'advanced',
    brewTime: 150,
    effect: '解除常见毒素',
    description: '能够解除大多数常见毒素的通用解毒剂，是医疗必备药品。',
    ingredients: [
      '牛黄 1颗',
      '独角兽毛 5根',
      '解毒草 1束',
      '纯净水 400毫升',
      '银粉 2茶匙'
    ],
    instructions: [
      '将牛黄研磨成细粉',
      '在纯净水中加入解毒草',
      '煮沸30分钟后过滤',
      '加入牛黄粉末，搅拌至溶解',
      '加入独角兽毛，药水会变绿',
      '最后加入银粉中和毒性'
    ]
  },
  {
    id: 'courage-potion',
    name: 'Courage Potion',
    nameZh: '勇气药水',
    type: 'enhancement',
    typeZh: '增强类',
    difficulty: 'intermediate',
    brewTime: 120,
    effect: '增强勇气和胆量',
    description: '能够暂时增强服用者的勇气，减少恐惧感，提高面对危险的能力。',
    ingredients: [
      '狮心草 1束',
      '勇士之血 3滴',
      '雄鹰羽毛 2根',
      '烈火酒 50毫升',
      '山泉水 300毫升'
    ],
    instructions: [
      '将山泉水加热至微沸',
      '加入狮心草，浸泡45分钟',
      '加入烈火酒，药水会变红',
      '滴入勇士之血，搅拌均匀',
      '最后加入雄鹰羽毛'
    ]
  },
  {
    id: 'girding-potion',
    name: 'Girding Potion',
    nameZh: '坚韧药剂',
    type: 'enhancement',
    typeZh: '增强类',
    difficulty: 'advanced',
    brewTime: 200,
    effect: '增强身体韧性',
    description: '能够显著增强身体的韧性和抗打击能力，减少受到的物理伤害。',
    ingredients: [
      '龙鳞粉末 1茶匙',
      '钢铁草 1束',
      '坚石精华 5滴',
      '强化水 350毫升',
      '钻石粉 1撮'
    ],
    instructions: [
      '将强化水煮沸',
      '加入钢铁草，煮沸1小时',
      '加入龙鳞粉末，搅拌至粘稠',
      '滴入坚石精华，药水会变灰',
      '最后撒入钻石粉增强效果'
    ]
  },
  {
    id: 'fire-protection-potion',
    name: 'Fire Protection Potion',
    nameZh: '防火药水',
    type: 'utility',
    typeZh: '实用类',
    difficulty: 'advanced',
    brewTime: 180,
    effect: '抵御火焰伤害',
    description: '能够让服用者在一定时间内免受火焰伤害，对抗火龙时必备。',
    ingredients: [
      '火蜥蜴血 10滴',
      '石棉草 1束',
      '冰晶粉末 2茶匙',
      '防护水 400毫升',
      '蓝宝石粉 1撮'
    ],
    instructions: [
      '将防护水在耐火坩埚中加热',
      '加入石棉草，煮沸30分钟',
      '加入冰晶粉末降低温度',
      '滴入火蜥蜴血，药水会冒烟',
      '最后撒入蓝宝石粉稳定药效'
    ]
  },
  {
    id: 'night-vision-potion',
    name: 'Night Vision Potion',
    nameZh: '夜视药水',
    type: 'enhancement',
    typeZh: '增强类',
    difficulty: 'intermediate',
    brewTime: 90,
    effect: '增强夜间视力',
    description: '能够让服用者在黑暗中看得清楚，如同猫头鹰一般的夜视能力。',
    ingredients: [
      '猫头鹰眼睛 2个',
      '夜光菌 5个',
      '月光水 300毫升',
      '银粉 1茶匙',
      '星光草 1束'
    ],
    instructions: [
      '在新月之夜制作',
      '将月光水轻柔加热',
      '加入夜光菌，药水会发光',
      '研磨猫头鹰眼睛后加入',
      '加入星光草和银粉',
      '搅拌至药水呈淡蓝色'
    ]
  },
  {
    id: 'mind-sharpening-potion',
    name: 'Mind Sharpening Potion',
    nameZh: '心灵屏障药剂',
    type: 'utility',
    typeZh: '防御类',
    difficulty: 'expert',
    brewTime: 300,
    effect: '保护心灵不受侵犯',
    description: '能够在心灵周围建立保护屏障，抵御摄神取念等心灵攻击。',
    ingredients: [
      '心灵草 1束',
      '水晶粉末 2茶匙',
      '守护石 1颗（磨成粉）',
      '纯净水 400毫升',
      '白银丝 3根'
    ],
    instructions: [
      '将纯净水在水晶坩埚中加热',
      '加入心灵草，浸泡2小时',
      '加入水晶粉末，搅拌至透明',
      '加入守护石粉末',
      '最后加入白银丝',
      '药水会发出柔和的白光'
    ]
  },
  {
    id: 'agility-potion',
    name: 'Agility Potion',
    nameZh: '敏捷药剂',
    type: 'enhancement',
    typeZh: '增强类',
    difficulty: 'intermediate',
    brewTime: 100,
    effect: '增强敏捷性',
    description: '能够显著提高反应速度和身体敏捷性，让动作更加迅速灵活。',
    ingredients: [
      '猎豹毛 5根',
      '风精草 1束',
      '水银 2滴',
      '轻羽水 350毫升',
      '闪电石粉 1撮'
    ],
    instructions: [
      '将轻羽水快速加热',
      '加入风精草，搅拌至起泡',
      '加入猎豹毛，药水会变轻',
      '小心滴入水银',
      '最后撒入闪电石粉'
    ]
  },
  {
    id: 'antidote-to-veritaserum',
    name: 'Antidote to Veritaserum',
    nameZh: '吐真剂解药',
    type: 'utility',
    typeZh: '实用类',
    difficulty: 'expert',
    brewTime: 240,
    effect: '抵御吐真剂效果',
    description: '能够抵御吐真剂的效果，保护服用者不被迫说出真话。',
    ingredients: [
      '谎言草 1束',
      '混淆花瓣 7片',
      '迷雾水 300毫升',
      '黑曜石粉 1茶匙',
      '沉默之石 1颗'
    ],
    instructions: [
      '将迷雾水在黑色坩埚中加热',
      '加入谎言草，煮沸1小时',
      '逐片加入混淆花瓣',
      '研磨沉默之石后加入',
      '最后加入黑曜石粉',
      '药水会变成深黑色'
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