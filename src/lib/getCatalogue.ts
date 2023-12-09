import catalogueType from "../types/index";
import createCatalogue from "../utils/createCatalogue";
import createTree from "../utils/createTree";

/**
 * 根据页面中的h标签生成目录
 *
 * @param {HTMLElement} el - 包含h标签的dom
 * @returns {Object} - 树形结构的目录
 * @property {string} title - 目录标题
 * @property {number} rank - 目录级别
 * @property {number} top - 距离顶部的距离，可以使用此属性进行滚动到当前目录
 * @property {Array} child - 子级目录
 */
export default function useGetCatalogue(el: HTMLElement): catalogueType[] {
  return createTree<catalogueType>(createCatalogue(el));
}
