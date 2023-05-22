/* eslint-disable @typescript-eslint/no-unused-vars */
import type { RegisterOptions } from 'react-hook-form'

export type Rules = { [key in 'email' | 'password' | 'username']?: RegisterOptions }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRules: Rules = {
  username: {
    required: {
      value: true,
      message: 'Username is required'
    },
    maxLength: {
      value: 160,
      message: 'Length from 4 - 160 characters'
    },
    minLength: {
      value: 4,
      message: 'Length from 4 - 160 characters'
    }
  },
  email: {
    required: {
      value: true,
      message: 'Email is required'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email invalidate'
    },
    maxLength: {
      value: 160,
      message: 'Length from 5 - 160 characters'
    },
    minLength: {
      value: 5,
      message: 'Length from 5 - 160 characters'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password invalidate'
    },
    maxLength: {
      value: 160,
      message: 'Length from 6 - 160 characters'
    },
    minLength: {
      value: 6,
      message: 'Length from 6 - 160 characters'
    }
  }
}
