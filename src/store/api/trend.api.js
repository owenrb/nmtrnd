import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'
import uuid from 'react-uuid'

export const add = async (date, x, y, selection) => {
  const label = '@trend-' + x + '-' + y

  const data = {
    date: moment(date).format('YYYY-MM-DD'),
    id: uuid(),
    selection: selection.sort((a, b) => a - b),
  }

  const value = (await AsyncStorage.getItem(label)) || JSON.stringify([])

  const obj = JSON.parse(value)

  obj.push(data)

  const updated = JSON.stringify(obj)

  await AsyncStorage.setItem(label, updated)

  return obj
}

export const list = async (x, y) => {
  const label = '@trend-' + x + '-' + y
  const value = (await AsyncStorage.getItem(label)) || JSON.stringify([])

  return JSON.parse(value)
}

export const remove = async (x, y, id) => {
  const l = await list(x, y)
  const filtered = l.filter(item => item.id !== id)
  const updated = JSON.stringify(filtered)

  const label = '@trend-' + x + '-' + y
  await AsyncStorage.setItem(label, updated)

  return filtered
}

export const sorttop = entries => {
  const map = {}

  entries.forEach(arr => {
    const {selection} = arr
    selection.forEach(item => {
      if (item in map) {
        map[item]++
      } else {
        map[item] = 1
      }
    })
  })

  const sorted = Object.keys(map)
    .map(key => [Number(key), map[key]])
    .sort((a, b) => b[1] - a[1])

  return sorted
}
