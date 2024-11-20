/**
 * 高亮deepin
 * @param text
 * @returns {*}
 */
export function highlightDeepin(text: string) {
  return text.replace(
    /deepin/gi,
    '<span class="text-[--website-font-active]">$&</span>'
  )
}

/**
 * 将数字格式化为千分位
 * @param {number} num
 * @returns {string}
 */
export function formatNumber(num: number) {
  console.log('formatNumber', num)
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
