export interface SortingQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    house: 'gryffindor' | 'slytherin' | 'ravenclaw' | 'hufflepuff';
    weight: number;
  }[];
}

export const SORTING_QUESTIONS: SortingQuestion[] = [
  {
    id: 1,
    question: '你最希望在历史上以什么而闻名？',
    options: [
      { text: '智慧', house: 'ravenclaw', weight: 2 },
      { text: '勇敢', house: 'gryffindor', weight: 2 },
      { text: '权力', house: 'slytherin', weight: 2 },
      { text: '善良', house: 'hufflepuff', weight: 2 }
    ]
  },
  {
    id: 2,
    question: '你最害怕什么？',
    options: [
      { text: '无知', house: 'ravenclaw', weight: 2 },
      { text: '懦弱', house: 'gryffindor', weight: 2 },
      { text: '被忽视', house: 'slytherin', weight: 2 },
      { text: '孤独', house: 'hufflepuff', weight: 2 }
    ]
  },
  {
    id: 3,
    question: '在一个安静的夜晚，你更愿意做什么？',
    options: [
      { text: '阅读一本有趣的书', house: 'ravenclaw', weight: 2 },
      { text: '计划一次冒险', house: 'gryffindor', weight: 2 },
      { text: '制定明天的计划', house: 'slytherin', weight: 2 },
      { text: '和朋友聊天', house: 'hufflepuff', weight: 2 }
    ]
  },
  {
    id: 4,
    question: '你认为什么品质最重要？',
    options: [
      { text: '创造力', house: 'ravenclaw', weight: 2 },
      { text: '勇气', house: 'gryffindor', weight: 2 },
      { text: '野心', house: 'slytherin', weight: 2 },
      { text: '忠诚', house: 'hufflepuff', weight: 2 }
    ]
  },
  {
    id: 5,
    question: '你更喜欢哪种魔法生物？',
    options: [
      { text: '凤凰', house: 'gryffindor', weight: 2 },
      { text: '龙', house: 'slytherin', weight: 2 },
      { text: '独角兽', house: 'hufflepuff', weight: 2 },
      { text: '鹰头马身有翼兽', house: 'ravenclaw', weight: 2 }
    ]
  },
  {
    id: 6,
    question: '你最想学习哪种魔法？',
    options: [
      { text: '变形术', house: 'ravenclaw', weight: 2 },
      { text: '黑魔法防御术', house: 'gryffindor', weight: 2 },
      { text: '魔药学', house: 'slytherin', weight: 2 },
      { text: '草药学', house: 'hufflepuff', weight: 2 }
    ]
  },
  {
    id: 7,
    question: '你理想中的职业是什么？',
    options: [
      { text: '研究员', house: 'ravenclaw', weight: 2 },
      { text: '傲罗', house: 'gryffindor', weight: 2 },
      { text: '魔法部部长', house: 'slytherin', weight: 2 },
      { text: '治疗师', house: 'hufflepuff', weight: 2 }
    ]
  },
  {
    id: 8,
    question: '你更喜欢哪种颜色？',
    options: [
      { text: '蓝色和青铜色', house: 'ravenclaw', weight: 1 },
      { text: '红色和金色', house: 'gryffindor', weight: 1 },
      { text: '绿色和银色', house: 'slytherin', weight: 1 },
      { text: '黄色和黑色', house: 'hufflepuff', weight: 1 }
    ]
  }
];

export const calculateHouseScores = (answers: number[]): Record<string, number> => {
  const scores = {
    gryffindor: 0,
    slytherin: 0,
    ravenclaw: 0,
    hufflepuff: 0
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = SORTING_QUESTIONS[questionIndex];
    const selectedOption = question.options[answerIndex];
    scores[selectedOption.house] += selectedOption.weight;
  });

  return scores;
};

export const getSortingResult = (answers: number[]): string => {
  const scores = calculateHouseScores(answers);
  const maxScore = Math.max(...Object.values(scores));
  const winningHouse = Object.keys(scores).find(house => scores[house] === maxScore);
  return winningHouse || 'gryffindor';
};