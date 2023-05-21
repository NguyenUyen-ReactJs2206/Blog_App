import axios, { AxiosError, isAxiosError } from 'axios'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'

const removeSpecialCharacter = (str: string) =>
  // eslint-disable-next-line no-useless-escape
  str.replace(/@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '')
export const generateNameId = (name: string) => {
  //replace(/\s/g, '-') -- chuyen dau cach thanh dau -
  return removeSpecialCharacter(name).replace(/\s/g, '-')
}

//Loi 422
export function isAxiosErrorFunc<T>(error: unknown): error is AxiosError<T> {
  // eslint-disable-next-line import/no-named-as-default-member
  return axios.isAxiosError(error)
}

export function isAxiosUnprocessableEntityError<FormError>(error: unknown): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}
