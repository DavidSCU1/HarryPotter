export interface House {
  id: 'gryffindor' | 'slytherin' | 'ravenclaw' | 'hufflepuff';
  name: string;
  nameZh: string;
  color: string;
  founder: string;
  traits: string[];
  description: string;
  famousMembers: string[];
  element: string;
  animal: string;
  motto: string;
}

export const HOUSES: Record<string, House> = {
  gryffindor: {
    id: 'gryffindor',
    name: 'Gryffindor',
    nameZh: '格兰芬多',
    color: '#740001',
    founder: 'Godric Gryffindor',
    traits: ['勇敢', '胆识', '骑士精神', '勇气'],
    description: '格兰芬多学院重视勇气、胆识、神经和骑士精神。',
    famousMembers: ['哈利·波特', '赫敏·格兰杰', '罗恩·韦斯莱', '阿不思·邓布利多'],
    element: '火',
    animal: '狮子',
    motto: '勇敢无畏，勇往直前'
  },
  slytherin: {
    id: 'slytherin',
    name: 'Slytherin',
    nameZh: '斯莱特林',
    color: '#1a472a',
    founder: 'Salazar Slytherin',
    traits: ['野心', '狡猾', '领导力', '足智多谋'],
    description: '斯莱特林学院重视野心、狡猾、领导力和足智多谋。',
    famousMembers: ['汤姆·里德尔', '西弗勒斯·斯内普', '德拉科·马尔福', '贝拉特里克斯·莱斯特兰奇'],
    element: '水',
    animal: '蛇',
    motto: '野心成就伟大'
  },
  ravenclaw: {
    id: 'ravenclaw',
    name: 'Ravenclaw',
    nameZh: '拉文克劳',
    color: '#0e1a40',
    founder: 'Rowena Ravenclaw',
    traits: ['智慧', '学识', '机智', '创造力'],
    description: '拉文克劳学院重视智慧、学识、机智和创造力。',
    famousMembers: ['卢娜·洛夫古德', '秋·张', '吉德罗·洛哈特', '加里克·奥利凡德'],
    element: '风',
    animal: '鹰',
    motto: '智慧超越一切'
  },
  hufflepuff: {
    id: 'hufflepuff',
    name: 'Hufflepuff',
    nameZh: '赫奇帕奇',
    color: '#ecb939',
    founder: 'Helga Hufflepuff',
    traits: ['忠诚', '公正', '耐心', '善良'],
    description: '赫奇帕奇学院重视忠诚、公正、耐心和善良。',
    famousMembers: ['纽特·斯卡曼德', '塞德里克·迪戈里', '尼法朵拉·唐克斯', '帕梅拉·斯普劳特'],
    element: '土',
    animal: '獾',
    motto: '忠诚与公正并存'
  }
};

export const getHouseById = (id: string): House | undefined => {
  return HOUSES[id];
};

export const getAllHouses = (): House[] => {
  return Object.values(HOUSES);
};