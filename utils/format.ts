import dayjs from "dayjs"
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
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * 格式化日期时间
 * @param {string} date
 * @returns {string}
 */
export function formatDate(date: string, format = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(date).format(format)
}
