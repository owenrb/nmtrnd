import {authenticate} from '../api/auth.api'
import {add, list, remove, sorttop} from '../api/trend.api'

export const loginUser = value => {
  const isAuth = authenticate(value)
  const error = isAuth ? null : 'Invalid passcode'
  return {
    type: 'auth/loginUser',
    payload: {
      isAuth,
      error,
    },
  }
}

export const getEntries = async (x, y) => {
  const entries = await list(x, y)
  const top = sorttop(entries)

  return {
    type: 'trend/getEntries',
    payload: {
      x,
      y,
      entries,
      top,
    },
  }
}

export const addEntry = async (date, x, y, selection) => {
  const entries = await add(date, x, y, selection)
  const top = sorttop(entries)

  return {
    type: 'trend/addEntry',
    payload: {
      x,
      y,
      entries,
      top,
    },
  }
}

export const deleteEntry = async (x, y, id) => {
  const entries = await remove(x, y, id)
  const top = sorttop(entries)

  return {
    type: 'trend/getEntries',
    payload: {
      x,
      y,
      entries,
      top,
    },
  }
}
