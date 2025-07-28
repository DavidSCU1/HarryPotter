export interface MagicalItem {
  id: string;
  name: string;
  nameZh: string;
  type: 'weapon' | 'protection' | 'utility' | 'transportation' | 'communication' | 'storage' | 'divination' | 'entertainment' | 'dark' | 'healing';
  typeZh: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary' | 'artifact';
  origin: string;
  description: string;
  usage: string[];
  effects: string[];
  warnings: string[];
  history: string;
  location?: string;
  creator?: string;
  materials?: string[];
}

export const MAGICAL_ITEMS: MagicalItem[] = [
  {
    id: 'elder-wand',
    name: 'Elder Wand',
    nameZh: '老魔杖',
    type: 'weapon',
    typeZh: '武器类',
    rarity: 'artifact',
    origin: '死神圣器之一',
    description: '传说中最强大的魔杖，由死神亲手制作，拥有无与伦比的魔法力量。',
    usage: [
      '握持魔杖进行施法',
      '魔杖会自动选择最强大的巫师作为主人',
      '只有通过决斗击败前任主人才能真正掌控',
      '可以修复其他被损坏的魔杖'
    ],
    effects: [
      '大幅增强所有咒语的威力',
      '能够施展其他魔杖无法完成的魔法',
      '可以修复任何魔法损伤',
      '拥有自主选择主人的能力'
    ],
    warnings: [
      '极其危险，容易引起争夺和杀戮',
      '只忠诚于最强大的巫师',
      '使用不当可能造成毁灭性后果',
      '会吸引黑巫师的觊觎'
    ],
    history: '由死神制作，历代主人包括安提俄克·佩弗利尔、格林德沃、邓布利多等著名巫师。',
    creator: '死神',
    materials: ['接骨木木材', '夜骐尾毛']
  },
  {
    id: 'invisibility-cloak',
    name: 'Invisibility Cloak',
    nameZh: '隐身衣',
    type: 'protection',
    typeZh: '防护类',
    rarity: 'artifact',
    origin: '死神圣器之一',
    description: '真正的隐身衣，能够完美隐藏穿戴者，不受任何魔法探测。',
    usage: [
      '披在身上即可隐身',
      '可以覆盖多人同时隐身',
      '需要小心不要露出身体部位',
      '移动时要避免发出声音'
    ],
    effects: [
      '完全隐身，无法被肉眼看见',
      '不受魔法探测影响',
      '永久有效，不会失效',
      '可以遗传给后代'
    ],
    warnings: [
      '不能隐藏声音和气味',
      '疯眼汉穆迪的魔眼可以看穿',
      '摄魂怪可以感知到隐身者',
      '需要妥善保管，避免丢失'
    ],
    history: '由死神赐予伊格诺图斯·佩弗利尔，世代传承于波特家族。',
    creator: '死神',
    materials: ['死神织物']
  },
  {
    id: 'resurrection-stone',
    name: 'Resurrection Stone',
    nameZh: '复活石',
    type: 'divination',
    typeZh: '占卜类',
    rarity: 'artifact',
    origin: '死神圣器之一',
    description: '能够召回死者灵魂的神秘宝石，但召回的只是影像，非真正复活。',
    usage: [
      '在手中转动三次',
      '专注想念逝去的人',
      '死者的影像会出现',
      '使用后应立即放下'
    ],
    effects: [
      '召唤死者的灵魂影像',
      '可以与逝者对话',
      '提供心理慰藉',
      '帮助解决未了心愿'
    ],
    warnings: [
      '召回的不是真正的死者',
      '长期使用会沉迷其中',
      '可能导致精神崩溃',
      '死者并不真正属于人间'
    ],
    history: '由死神赐予卡德马斯·佩弗利尔，后被制成冈特家族的戒指。',
    creator: '死神',
    materials: ['神秘黑石']
  },
  {
    id: 'sorting-hat',
    name: 'Sorting Hat',
    nameZh: '分院帽',
    type: 'divination',
    typeZh: '占卜类',
    rarity: 'legendary',
    origin: '霍格沃茨创始人遗物',
    description: '霍格沃茨的神奇帽子，能够读取学生的内心并将其分配到合适的学院。',
    usage: [
      '戴在头上',
      '保持内心平静',
      '诚实面对自己的内心',
      '听从帽子的判断'
    ],
    effects: [
      '读取佩戴者的思想和性格',
      '分析个人品质和潜力',
      '做出学院分配决定',
      '偶尔提供预言和建议'
    ],
    warnings: [
      '会读取内心最深处的秘密',
      '分院决定通常不可更改',
      '只在特殊情况下才会重新考虑',
      '需要尊重帽子的智慧'
    ],
    history: '由戈德里克·格兰芬多制作，融入了四位创始人的智慧。',
    creator: '戈德里克·格兰芬多',
    materials: ['格兰芬多的帽子', '四位创始人的魔法']
  },
  {
    id: 'marauders-map',
    name: 'Marauder\'s Map',
    nameZh: '活点地图',
    type: 'utility',
    typeZh: '实用类',
    rarity: 'rare',
    origin: '掠夺者制作',
    description: '显示霍格沃茨城堡详细地图的魔法羊皮纸，包括所有人员位置和秘密通道。',
    usage: [
      '用魔杖点击地图说"我庄严宣誓我没干好事"',
      '观察地图上的人员移动',
      '寻找秘密通道和隐藏房间',
      '使用完毕说"恶作剧完毕"清空地图'
    ],
    effects: [
      '显示霍格沃茨完整地图',
      '实时显示所有人员位置',
      '标注秘密通道和密室',
      '识别变形者的真实身份'
    ],
    warnings: [
      '可能被其他人发现',
      '不要在教授面前使用',
      '某些区域可能无法显示',
      '需要妥善保管避免丢失'
    ],
    history: '由詹姆·波特、小天狼星布莱克、莱姆斯·卢平和彼得·佩迪鲁制作。',
    creator: '掠夺者四人组',
    materials: ['魔法羊皮纸', '复杂的魔法咒语']
  },
  {
    id: 'time-turner',
    name: 'Time-Turner',
    nameZh: '时间转换器',
    type: 'utility',
    typeZh: '实用类',
    rarity: 'rare',
    origin: '魔法部制造',
    description: '能够让使用者回到过去的神奇装置，但有严格的使用限制。',
    usage: [
      '戴在脖子上',
      '转动沙漏决定回到过去的时间',
      '每转一圈回到一小时前',
      '必须在指定时间内返回'
    ],
    effects: [
      '时间旅行到过去',
      '最多可回到5小时前',
      '创造时间循环',
      '改变历史进程'
    ],
    warnings: [
      '严禁改变重大历史事件',
      '不能被过去的自己看见',
      '可能造成时间悖论',
      '需要魔法部许可才能使用'
    ],
    history: '魔法部时间司制造，用于特殊任务和紧急情况。',
    creator: '魔法部时间司',
    materials: ['魔法沙漏', '时间魔法', '金属链条']
  },
  {
    id: 'pensieve',
    name: 'Pensieve',
    nameZh: '冥想盆',
    type: 'utility',
    typeZh: '实用类',
    rarity: 'rare',
    origin: '古代魔法器具',
    description: '能够储存和回放记忆的石盆，让使用者重新体验过去的事件。',
    usage: [
      '用魔杖提取记忆',
      '将记忆丝放入盆中',
      '将脸靠近盆面进入记忆',
      '在记忆中观察但不能改变'
    ],
    effects: [
      '储存和回放记忆',
      '多人可同时观看记忆',
      '从不同角度观察事件',
      '发现被忽略的细节'
    ],
    warnings: [
      '不能改变记忆内容',
      '记忆可能不完全准确',
      '长时间使用可能迷失',
      '需要小心处理记忆丝'
    ],
    history: '古代巫师发明，邓布利多拥有一个著名的冥想盆。',
    creator: '古代巫师',
    materials: ['魔法石材', '记忆魔法']
  },
  {
    id: 'deluminator',
    name: 'Deluminator',
    nameZh: '熄灯器',
    type: 'utility',
    typeZh: '实用类',
    rarity: 'rare',
    origin: '邓布利多发明',
    description: '能够吸收和释放光线的神奇装置，也具有指引方向的能力。',
    usage: [
      '点击按钮吸收附近光源',
      '再次点击释放储存的光线',
      '在黑暗中提供照明',
      '跟随内心的声音寻找方向'
    ],
    effects: [
      '吸收和控制光线',
      '创造完全黑暗环境',
      '提供移动光源',
      '指引迷失者找到归路'
    ],
    warnings: [
      '可能引起麻瓜注意',
      '不要在危险环境中使用',
      '需要相信内心的指引',
      '光线储存有限制'
    ],
    history: '阿不思·邓布利多发明，遗赠给罗恩·韦斯莱。',
    creator: '阿不思·邓布利多',
    materials: ['魔法金属', '光线魔法']
  },
  {
    id: 'howler',
    name: 'Howler',
    nameZh: '吼叫信',
    type: 'communication',
    typeZh: '通讯类',
    rarity: 'common',
    origin: '巫师邮政系统',
    description: '会大声吼叫的魔法信件，用于表达强烈愤怒或不满。',
    usage: [
      '写下愤怒的信息',
      '用特殊魔法封印',
      '通过猫头鹰邮递',
      '收件人打开时会大声吼叫'
    ],
    effects: [
      '大声传达愤怒信息',
      '无法忽视或静音',
      '在公共场合造成尴尬',
      '表达强烈情感'
    ],
    warnings: [
      '如果不及时打开会自燃',
      '会在公共场合造成尴尬',
      '声音极大，难以控制',
      '可能损害人际关系'
    ],
    history: '巫师家庭常用的惩罚和表达愤怒的方式。',
    creator: '巫师邮政系统',
    materials: ['特殊红色信纸', '愤怒魔法']
  },
  {
    id: 'sneakoscope',
    name: 'Sneakoscope',
    nameZh: '窥镜',
    type: 'protection',
    typeZh: '防护类',
    rarity: 'uncommon',
    origin: '魔法探测器',
    description: '能够探测附近欺骗和不可信行为的魔法装置。',
    usage: [
      '放置在需要监控的区域',
      '当探测到欺骗时会发光和鸣叫',
      '定期检查装置状态',
      '根据警报采取相应行动'
    ],
    effects: [
      '探测谎言和欺骗',
      '发现隐藏的敌意',
      '警告潜在危险',
      '识别不可信的人'
    ],
    warnings: [
      '可能出现误报',
      '无法区分善意谎言',
      '在学校等地方经常误报',
      '需要正确解读警报'
    ],
    history: '魔法部和傲罗常用的探测装置。',
    creator: '魔法探测器制造商',
    materials: ['魔法水晶', '探测魔法']
  },
  {
    id: 'remembrall',
    name: 'Remembrall',
    nameZh: '记忆球',
    type: 'utility',
    typeZh: '实用类',
    rarity: 'common',
    origin: '魔法辅助工具',
    description: '当持有者忘记某事时会变红的玻璃球，但不会告诉你忘记了什么。',
    usage: [
      '握在手中',
      '观察球体颜色变化',
      '如果变红说明忘记了什么',
      '努力回忆遗忘的事情'
    ],
    effects: [
      '提醒有事情被遗忘',
      '帮助改善记忆习惯',
      '减少重要事项遗漏',
      '培养注意力'
    ],
    warnings: [
      '不会告诉你具体忘记了什么',
      '可能因小事而频繁变红',
      '不能依赖它记住所有事情',
      '容易破碎需小心保管'
    ],
    history: '常见的魔法辅助工具，学生和老年巫师常用。',
    creator: '魔法工具制造商',
    materials: ['魔法玻璃', '记忆探测魔法']
  },
  {
    id: 'extendable-ears',
    name: 'Extendable Ears',
    nameZh: '伸缩耳',
    type: 'utility',
    typeZh: '实用类',
    rarity: 'uncommon',
    origin: '韦斯莱魔法把戏坊',
    description: '能够延伸到远处偷听对话的魔法耳朵，韦斯莱双胞胎的发明。',
    usage: [
      '将一端放在耳朵上',
      '将另一端延伸到目标位置',
      '小心避免被发现',
      '使用后妥善收回'
    ],
    effects: [
      '远距离偷听对话',
      '穿过门缝和小孔',
      '传输清晰音频',
      '隐蔽性较好'
    ],
    warnings: [
      '可能被反窃听咒语阻挡',
      '被发现会造成尴尬',
      '不要用于恶意目的',
      '容易被切断或损坏'
    ],
    history: '弗雷德和乔治·韦斯莱发明的恶作剧产品。',
    creator: '韦斯莱双胞胎',
    materials: ['魔法橡胶', '声音传导魔法']
  },
  {
    id: 'omnioculars',
    name: 'Omnioculars',
    nameZh: '全景望远镜',
    type: 'utility',
    typeZh: '实用类',
    rarity: 'uncommon',
    origin: '魔法光学设备',
    description: '具有多种功能的魔法望远镜，能够回放、慢动作和X光透视。',
    usage: [
      '调节焦距观察远处',
      '使用回放功能重看精彩瞬间',
      '启用慢动作分析细节',
      '按需使用X光透视功能'
    ],
    effects: [
      '远距离清晰观察',
      '录制和回放功能',
      '慢动作分析',
      'X光透视能力'
    ],
    warnings: [
      'X光功能可能侵犯隐私',
      '长时间使用可能眼疲劳',
      '需要定期充能',
      '价格昂贵需小心保管'
    ],
    history: '魁地奇世界杯等重大赛事的热门观赛工具。',
    creator: '魔法光学制造商',
    materials: ['魔法镜片', '记录魔法', '透视魔法']
  },
  {
    id: 'foe-glass',
    name: 'Foe-Glass',
    nameZh: '敌镜',
    type: 'protection',
    typeZh: '防护类',
    rarity: 'rare',
    origin: '防御魔法器具',
    description: '能够显示敌人接近的魔法镜子，敌人越近显示越清晰。',
    usage: [
      '悬挂在需要监控的位置',
      '定期观察镜面变化',
      '当出现人影时保持警惕',
      '根据清晰度判断威胁程度'
    ],
    effects: [
      '探测接近的敌人',
      '显示威胁等级',
      '提供早期警报',
      '识别隐藏的敌意'
    ],
    warnings: [
      '无法区分朋友和敌人',
      '可能被反探测魔法欺骗',
      '需要正确解读信号',
      '不能完全依赖其判断'
    ],
    history: '傲罗和安全专家常用的防御工具。',
    creator: '防御魔法专家',
    materials: ['魔法镜面', '敌意探测魔法']
  },
  {
    id: 'secrecy-sensor',
    name: 'Secrecy Sensor',
    nameZh: '隐秘探测器',
    type: 'protection',
    typeZh: '防护类',
    rarity: 'rare',
    origin: '安全魔法设备',
    description: '能够探测隐藏物品和秘密的高级魔法装置。',
    usage: [
      '激活探测模式',
      '扫描可疑区域',
      '分析探测结果',
      '采取相应安全措施'
    ],
    effects: [
      '探测隐藏物品',
      '发现秘密通道',
      '识别伪装魔法',
      '检测危险物质'
    ],
    warnings: [
      '可能被高级隐藏魔法欺骗',
      '需要专业操作技能',
      '误报可能造成恐慌',
      '定期校准确保准确性'
    ],
    history: '魔法部和古灵阁等重要机构使用的安全设备。',
    creator: '安全魔法专家',
    materials: ['高级魔法水晶', '探测魔法阵列']
  },
  {
    id: 'portkey',
    name: 'Portkey',
    nameZh: '门钥匙',
    type: 'transportation',
    typeZh: '交通类',
    rarity: 'uncommon',
    origin: '魔法部交通司',
    description: '能够瞬间传送到指定地点的魔法物品，通常是普通物品施加魔法。',
    usage: [
      '在指定时间触摸门钥匙',
      '紧握不放直到传送完成',
      '准备好着陆冲击',
      '确认到达正确目的地'
    ],
    effects: [
      '瞬间长距离传送',
      '可以传送多人',
      '绕过反幻影移形保护',
      '精确到达目的地'
    ],
    warnings: [
      '传送时间固定不可更改',
      '着陆可能不够平稳',
      '需要魔法部授权制作',
      '可能被拦截或改向'
    ],
    history: '魔法部控制的官方传送方式，用于大型活动和紧急情况。',
    creator: '魔法部交通司',
    materials: ['普通物品', '传送魔法']
  },
  {
    id: 'flying-carpet',
    name: 'Flying Carpet',
    nameZh: '飞毯',
    type: 'transportation',
    typeZh: '交通类',
    rarity: 'rare',
    origin: '东方魔法传统',
    description: '能够载人飞行的魔法地毯，在某些国家是合法的交通工具。',
    usage: [
      '坐在地毯上保持平衡',
      '用魔杖或手势控制方向',
      '调节飞行高度和速度',
      '小心避开麻瓜视线'
    ],
    effects: [
      '载人飞行',
      '相对舒适的飞行体验',
      '可以载运货物',
      '飞行距离较远'
    ],
    warnings: [
      '在英国等地被禁止使用',
      '容易被麻瓜发现',
      '需要良好的平衡能力',
      '恶劣天气下危险'
    ],
    history: '东方国家的传统飞行工具，在英国被归类为麻瓜人工制品。',
    creator: '东方魔法师',
    materials: ['魔法地毯', '飞行魔法']
  },
  {
    id: 'vanishing-cabinet',
    name: 'Vanishing Cabinet',
    nameZh: '消失柜',
    type: 'transportation',
    typeZh: '交通类',
    rarity: 'rare',
    origin: '古代传送魔法',
    description: '成对出现的魔法柜子，能够在两个柜子之间传送物品和人员。',
    usage: [
      '进入其中一个柜子',
      '关闭柜门激活传送',
      '在另一个柜子中出现',
      '确保两个柜子都完好无损'
    ],
    effects: [
      '两点间瞬间传送',
      '可以传送大型物品',
      '绕过大部分防护魔法',
      '隐蔽性极高'
    ],
    warnings: [
      '如果一个柜子损坏会被困其中',
      '可能被敌人利用入侵',
      '需要定期维护保养',
      '传送过程中不能中断'
    ],
    history: '博金-博克商店曾有一对，德拉科·马尔福利用它们帮助食死徒入侵霍格沃茨。',
    creator: '古代魔法师',
    materials: ['魔法木材', '空间传送魔法']
  },
  {
    id: 'mirror-of-erised',
    name: 'Mirror of Erised',
    nameZh: '厄里斯魔镜',
    type: 'divination',
    typeZh: '占卜类',
    rarity: 'artifact',
    origin: '古代魔法镜子',
    description: '能够显示观看者内心最深切渴望的魔法镜子。',
    usage: [
      '站在镜子前观看',
      '镜子会显示内心渴望',
      '不要长时间凝视',
      '理解所见只是幻象'
    ],
    effects: [
      '显示内心最深的渴望',
      '反映真实的内心需求',
      '帮助自我认知',
      '提供心理洞察'
    ],
    warnings: [
      '容易沉迷其中无法自拔',
      '显示的是渴望而非现实',
      '可能导致绝望和痛苦',
      '不能改变现实状况'
    ],
    history: '古老的魔法镜子，邓布利多曾用它保护魔法石。',
    creator: '未知古代魔法师',
    materials: ['魔法镜面', '心灵探测魔法']
  },
  {
    id: 'crystal-ball',
    name: 'Crystal Ball',
    nameZh: '水晶球',
    type: 'divination',
    typeZh: '占卜类',
    rarity: 'uncommon',
    origin: '占卜工具',
    description: '用于占卜和预测未来的透明水晶球，需要天赋才能使用。',
    usage: [
      '放置在平稳表面',
      '凝视球体内部',
      '放空心灵接受幻象',
      '解读看到的图像'
    ],
    effects: [
      '预测未来事件',
      '显示远方景象',
      '揭示隐藏真相',
      '提供神秘洞察'
    ],
    warnings: [
      '需要真正的占卜天赋',
      '预测可能不准确',
      '容易被主观意识影响',
      '不能强求看到特定内容'
    ],
    history: '占卜学的经典工具，特里劳妮教授经常使用。',
    creator: '占卜师',
    materials: ['纯净水晶', '占卜魔法']
  },
  {
    id: 'wizard-chess-set',
    name: 'Wizard Chess Set',
    nameZh: '巫师棋',
    type: 'entertainment',
    typeZh: '娱乐类',
    rarity: 'common',
    origin: '巫师娱乐',
    description: '棋子会自己移动和战斗的魔法国际象棋，比麻瓜象棋更加激烈。',
    usage: [
      '摆放棋盘和棋子',
      '口头指挥棋子移动',
      '观看棋子间的战斗',
      '遵循国际象棋规则'
    ],
    effects: [
      '棋子自主移动和战斗',
      '增加游戏的戏剧性',
      '锻炼战略思维',
      '提供娱乐和竞技'
    ],
    warnings: [
      '棋子战斗可能激烈',
      '被吃掉的棋子会受伤',
      '需要明确的指令',
      '游戏可能持续很久'
    ],
    history: '巫师家庭常见的娱乐游戏，罗恩·韦斯莱是高手。',
    creator: '巫师游戏制造商',
    materials: ['魔法棋子', '自主移动魔法']
  },
  {
    id: 'quidditch-snitch',
    name: 'Golden Snitch',
    nameZh: '金色飞贼',
    type: 'entertainment',
    typeZh: '娱乐类',
    rarity: 'uncommon',
    origin: '魁地奇运动',
    description: '魁地奇比赛中的关键球类，抓住它可以获得150分并结束比赛。',
    usage: [
      '在魁地奇比赛中释放',
      '找球手追逐并抓住',
      '抓住后比赛结束',
      '妥善保管避免损坏'
    ],
    effects: [
      '高速飞行和躲避',
      '记忆触摸者身份',
      '增加比赛悬念',
      '决定比赛胜负'
    ],
    warnings: [
      '飞行速度极快难以抓住',
      '可能飞出比赛场地',
      '需要专业找球手',
      '价格昂贵需小心保护'
    ],
    history: '魁地奇运动的核心元素，哈利·波特是著名的找球手。',
    creator: '魁地奇器材制造商',
    materials: ['魔法金属', '飞行魔法', '记忆魔法']
  },
  {
    id: 'horcrux',
    name: 'Horcrux',
    nameZh: '魂器',
    type: 'dark',
    typeZh: '黑魔法类',
    rarity: 'artifact',
    origin: '黑魔法',
    description: '储存灵魂碎片的黑魔法物品，能够让制作者获得不死之身。',
    usage: [
      '通过杀戮分裂灵魂',
      '将灵魂碎片封入物品',
      '隐藏魂器避免被发现',
      '只有特殊方法才能摧毁'
    ],
    effects: [
      '储存灵魂碎片',
      '提供不死保护',
      '维持制作者生命',
      '影响周围环境和人员'
    ],
    warnings: [
      '制作过程极其邪恶',
      '会分裂和损害灵魂',
      '散发负面能量',
      '摧毁时极其危险'
    ],
    history: '伏地魔制作了七个魂器来获得永生，最终被哈利等人摧毁。',
    creator: '黑巫师',
    materials: ['任何物品', '分裂的灵魂', '杀戮魔法']
  },
  {
    id: 'hand-of-glory',
    name: 'Hand of Glory',
    nameZh: '光荣之手',
    type: 'dark',
    typeZh: '黑魔法类',
    rarity: 'rare',
    origin: '黑魔法物品',
    description: '用绞刑犯的手制作的黑魔法蜡烛台，只为持有者提供光明。',
    usage: [
      '点燃手指上的蜡烛',
      '只有持有者能看到光明',
      '用于秘密行动',
      '小心避免被发现'
    ],
    effects: [
      '只为持有者照明',
      '其他人看不到光线',
      '便于秘密行动',
      '穿透某些黑暗魔法'
    ],
    warnings: [
      '制作过程极其邪恶',
      '属于黑魔法物品',
      '可能被法律禁止',
      '使用时要小心谨慎'
    ],
    history: '博金-博克商店等黑魔法商店有售，德拉科曾试图使用。',
    creator: '黑魔法师',
    materials: ['绞刑犯的手', '特殊蜡烛', '黑魔法']
  },
  {
    id: 'healing-potion-kit',
    name: 'Healing Potion Kit',
    nameZh: '治疗药剂包',
    type: 'healing',
    typeZh: '治疗类',
    rarity: 'common',
    origin: '医疗魔法',
    description: '包含各种基础治疗药剂的便携医疗包。',
    usage: [
      '根据伤势选择合适药剂',
      '按照说明正确使用',
      '观察治疗效果',
      '必要时寻求专业帮助'
    ],
    effects: [
      '治疗各种轻微伤势',
      '缓解疼痛和不适',
      '加速伤口愈合',
      '预防感染'
    ],
    warnings: [
      '不能治疗严重伤势',
      '某些药剂有副作用',
      '过期药剂可能有害',
      '不能替代专业医疗'
    ],
    history: '巫师家庭和冒险者常备的医疗用品。',
    creator: '魔法医疗师',
    materials: ['各种治疗药剂', '便携包装']
  },
  {
    id: 'protective-amulet',
    name: 'Protective Amulet',
    nameZh: '护身符',
    type: 'protection',
    typeZh: '防护类',
    rarity: 'common',
    origin: '防护魔法',
    description: '提供基础魔法防护的护身符，能够抵御轻微的黑魔法攻击。',
    usage: [
      '佩戴在身上',
      '保持护身符清洁',
      '定期为其充能',
      '在危险时紧握护身符'
    ],
    effects: [
      '抵御轻微黑魔法',
      '减少负面能量影响',
      '提供心理安慰',
      '增强个人防护'
    ],
    warnings: [
      '不能抵御强力攻击',
      '需要定期维护',
      '可能被强力魔法破坏',
      '不能完全依赖其保护'
    ],
    history: '巫师常用的基础防护用品，特别是学生和普通巫师。',
    creator: '防护魔法师',
    materials: ['魔法金属或宝石', '防护魔法']
  }
];

export const getItemsByType = (type: string): MagicalItem[] => {
  return MAGICAL_ITEMS.filter(item => item.type === type);
};

export const searchItems = (query: string): MagicalItem[] => {
  const lowercaseQuery = query.toLowerCase();
  return MAGICAL_ITEMS.filter(item => 
    item.name.toLowerCase().includes(lowercaseQuery) ||
    item.nameZh.includes(lowercaseQuery) ||
    item.description.toLowerCase().includes(lowercaseQuery)
  );
};

export const getItemById = (id: string): MagicalItem | undefined => {
  return MAGICAL_ITEMS.find(item => item.id === id);
};

export const getItemTypes = (): string[] => {
  return [...new Set(MAGICAL_ITEMS.map(item => item.type))];
};

export const getItemTypeLabels = (): Record<string, string> => {
  return {
    weapon: '武器类',
    protection: '防护类',
    utility: '实用类',
    transportation: '交通类',
    communication: '通讯类',
    storage: '储存类',
    divination: '占卜类',
    entertainment: '娱乐类',
    dark: '黑魔法类',
    healing: '治疗类'
  };
};

export const getItemTypesWithLabels = (): { value: string; label: string }[] => {
  const types = getItemTypes();
  const typeLabels = getItemTypeLabels();
  
  return types.map(type => ({
    value: type,
    label: typeLabels[type] || type
  }));
};

export const getRarityLabel = (rarity: string): string => {
  const rarityLabels: Record<string, string> = {
    common: '常见',
    uncommon: '罕见',
    rare: '稀有',
    legendary: '传奇',
    artifact: '神器'
  };
  return rarityLabels[rarity] || rarity;
};

export const getRarityColor = (rarity: string): string => {
  const rarityColors: Record<string, string> = {
    common: 'text-gray-600',
    uncommon: 'text-green-600',
    rare: 'text-blue-600',
    legendary: 'text-purple-600',
    artifact: 'text-yellow-600'
  };
  return rarityColors[rarity] || 'text-gray-600';
};