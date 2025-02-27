/**
 * @description 返回字号列表
 */
export const useFontSizeList = () => {
  const list = reactive<Array<any>>([]);
  for (let index = 8; index < 200; index += 1) {
    list.push({
      label: index,
      value: index
    });
  }
  return list;
};

/**
 * @description 返回字号列表--px
 */
export const useFontSizeListPx = () => {
  const list = reactive<Array<any>>([]);
  for (let index = 8; index < 200; index += 1) {
    list.push({
      label: index + 'px',
      value: index
    });
  }
  return list;
};
