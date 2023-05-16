/* eslint-disable @typescript-eslint/no-explicit-any */
import http from 'src/utils/http'

export type Tags = {
  tags: []
}

export const getTags = () => http.get<Tags>('tags')
