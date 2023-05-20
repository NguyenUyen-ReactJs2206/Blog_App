const removeSpecialCharacter = (str: string) =>
  // eslint-disable-next-line no-useless-escape
  str.replace(/@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '')
export const generateNameId = (name: string) => {
  //replace(/\s/g, '-') -- chuyen dau cach thanh dau -
  return removeSpecialCharacter(name).replace(/\s/g, '-')
}
