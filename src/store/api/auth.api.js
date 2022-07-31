import moment from 'moment'
export const authenticate = values => {
  const {passcode} = values
  const year = moment().format('YYYY')

  return passcode === year
}
