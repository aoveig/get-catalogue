import catalogueType from "../types/index";

export default function createTree<T extends catalogueType>(
  catalogue: T[]
): T[] {
  const tree: T[] = [];

  // 用来存放最新的目录节点，以便更好的找到父级
  const catalogueMap: {
    [propName: string]: any;
  } = {};

  catalogue.forEach((item: T) => {
    const newNode = { ...item };
    catalogueMap[item.rank] = newNode;

    if (item.rank === 1) {
      tree.push(newNode);
    } else {
      const parentRank = item.rank - 1;
      const parentNode = catalogueMap[parentRank];
      parentNode.child.push(newNode);
    }
  });

  return tree;
}
