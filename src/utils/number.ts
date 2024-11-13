// TODO: 重构函数，支持保留位数 + 默认保留两位
// 换算成百分比后小数点后保留两位
export const normalizePercentage = (digit: number): number => {
  return Math.round(digit * 10000) / 100;
};

export const getRandomIndex = (max: number): number => {
  return Math.floor(Math.random() * max);
};
