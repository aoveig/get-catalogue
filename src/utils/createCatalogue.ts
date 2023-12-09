import catalogueType from "../types/index";

export default function createCatalogue(el: HTMLElement): catalogueType[] {
  const catalogue: catalogueType[] = [];

  // 循环传入el的所有子元素
  el.childNodes.forEach(item => {
    // 将标签拆分成数组，以便区分h标签，以及对h标签进行分级
    const splitTagArr = (item as HTMLElement).tagName?.split("");
    if (splitTagArr && splitTagArr[0] === "H") {
      catalogue.push({
        title: item.textContent,
        rank: Number(splitTagArr[1]),
        top: (item as HTMLElement).getBoundingClientRect().top + window.scrollY,
        child: []
      });
    }
  });

  return catalogue;
}
