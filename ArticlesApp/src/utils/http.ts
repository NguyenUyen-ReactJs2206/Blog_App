/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosError, AxiosInstance } from 'axios'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { toast } from 'react-toastify'
class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api.realworld.io/api/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    //Muon xu ly loi tra ve thi su dung response, con xu ly loi gui len thi dung request
    this.instance.interceptors.response.use(
      function (response) {
        return response
      },
      function (error: AxiosError) {
        //Difference Error 422
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
