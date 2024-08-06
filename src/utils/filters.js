import dayjs from 'dayjs'

const filterTimes = (val, format = 'YYYY-MM-DD') => {
  //   先檢查val是否為空 ，若不為空就轉為毫秒
  if (!isNull(val)) {
    // 從秒 => 毫秒 (所以轉為1000)
    return dayjs(val).format(format)
  } else {
    // 如果是空的返回'--'
    return '--'
  }
}
export const isNull = (date) => {
  // 檢查是不是一個空對象或是數組
  // 是否是假值包含[false,0,'',null,undefined,NaN]
  if (!date) return true
  if (JSON.stringify(date) === '{}') return true
  if (JSON.stringify(date) === '[]') return true
}
export default (app) => {
  app.config.globalProperties.$filters = {
    filterTimes
  }
}
