/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const formatDate = (date: any) => {
  if (!date) return ''
  const dt = new Date(date)
  const padL = (nr: any, _len = 2, chr = `0`) => `${nr}`.padStart(2, chr)
  return `${padL(dt.getMonth() + 1)}/${padL(dt.getDate())}/${dt.getFullYear()}`
}
