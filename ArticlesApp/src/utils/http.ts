/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosError, AxiosInstance } from 'axios'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { toast } from 'react-toastify'
import { AuthResponse } from 'src/types/auth.type'
import { clearTokenFromLs, getTokenFromLs, saveTokenToLS } from './auth'

//Tai sao lai khai bao them 1 bien token lam gi?
//Ta chi can sd gia tri token thoi thi ta co the lay tu LS,
//khi ta login thanh cong ta da luu vao LS roi thi khi dung ta chi can lay ra dung thoi
//Vay lam gi phai tao them 1 bien Private Token o tren??
//==> Khi get API lay data tu LS thi luc nao cung bi cham, vi data luu vao trong o cung thi ta doc du lieu luc nao cung bi cham hon ta doc trong ram
// Khi luu tren ram doc se nhanh hon
//Khi lam ta chi can khoi tao Token moi khi vao App
class Http {
  instance: AxiosInstance
  private token: string
  constructor() {
    this.token = getTokenFromLs()
    this.instance = axios.create({
      baseURL: 'https://api.realworld.io/api/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    //Nhung API can header token ta phai truyen len
    this.instance.interceptors.request.use(
      (config) => {
        if (this.token && config.headers) {
          config.headers.Authorization = this.token
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    //Muon xu ly loi tra ve thi su dung response, con xu ly loi gui len thi dung request
    this.instance.interceptors.response.use(
      (response) => {
        console.log(response, 'rrrrrrrrrrrrrrrrrr')

        const { url } = response.config
        console.log(url, 'uuuuuuuuuuuuuuuuuuuuuu')
        if (url === '/users/login') {
          this.token === (response.data as AuthResponse).user.token
          saveTokenToLS(this.token)
          console.log(this.token, 'ttttttttttttttt')
        }
        // else if (url === '/users/logout') {
        //   this.token = ''
        //   clearTokenFromLs()
        // }
        return response
      },
      function (error: AxiosError) {
        //Difference Error 422 and 403
        if (
          error.response?.status !== HttpStatusCode.UnprocessableEntity &&
          error.response?.status !== HttpStatusCode.Forbidden
        ) {
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
          toast.error(message)
        }
        return Promise.reject(error)
      }
    )
  }
}
const http = new Http().instance
export default http
