import React, {useState, useEffect} from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {deleteEntry} from '../store/action'
import moment from 'moment'
import {TransactionRow} from '../component/transaction.item'
import {Button} from 'react-native-paper'

const DATE_FORMAT = 'YYYY-MM-DD'
const DATE_FORMAT_LONG = 'YYYY-MM-DD (ddd)'

const TrendScreen = ({route, navigation}) => {
  const {params} = route
  const {draw} = params
  const [x, y] = draw.split('/')

  const dispatch = useDispatch()

  const trend = useSelector(state => state.trend)
  const [entries, setEntries] = useState([])
  const [top, setTop] = useState([])

  useEffect(() => {
    const arr = []
      .concat(trend.entries)
      // sort by date
      .sort((a, b) => {
        d1 = moment(a.date, DATE_FORMAT)
        d2 = moment(b.date, DATE_FORMAT)
        return d2.isAfter(d1)
      })

    setEntries(arr)
    setTop(trend.top)
  }, trend.entries)

  const delEntry = async id => {
    dispatch(await deleteEntry(x, y, id))
  }

  const safetyCheck = (arr, first, second = 0) => {
    return arr && arr[first] && arr[first][second] ? arr[first][second] : -1
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Stat', {top})
        }}>
        <View style={styles.entry}>
          <View style={styles.topCircle}>
            <Text style={styles.topNumber}>{safetyCheck(top, 0)}</Text>
          </View>
          <View style={styles.topCircle}>
            <Text style={styles.topNumber}>{safetyCheck(top, 1)}</Text>
          </View>
          <View style={styles.topCircle}>
            <Text style={styles.topNumber}>{safetyCheck(top, 2)}</Text>
          </View>
          <View style={styles.topCircle}>
            <Text style={styles.topNumber}>{safetyCheck(top, 3)}</Text>
          </View>
          <View style={styles.topCircle}>
            <Text style={styles.topNumber}>{safetyCheck(top, 4)}</Text>
          </View>
          <View style={styles.topCircle}>
            <Text style={styles.topNumber}>{safetyCheck(top, 5)}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <FlatList
        style={styles.list}
        data={entries}
        renderItem={({item, index}) => {
          const {id, date, selection: e} = item
          return (
            <TransactionRow
              handleDelete={() => {
                delEntry(id)
              }}>
              <View style={styles.entry}>
                <View style={styles.date}>
                  <Text>
                    {moment(date, DATE_FORMAT).format(DATE_FORMAT_LONG)}
                  </Text>
                </View>
                <View style={styles.circle}>
                  <Text style={styles.number}>{e[0]}</Text>
                </View>
                <View style={styles.circle}>
                  <Text style={styles.number}>{e[1]}</Text>
                </View>
                <View style={styles.circle}>
                  <Text style={styles.number}>{e[2]}</Text>
                </View>
                <View style={styles.circle}>
                  <Text style={styles.number}>{e[3]}</Text>
                </View>
                <View style={styles.circle}>
                  <Text style={styles.number}>{e[4]}</Text>
                </View>
                <View style={styles.circle}>
                  <Text style={styles.number}>{e[5]}</Text>
                </View>
              </View>
            </TransactionRow>
          )
        }}></FlatList>
      <View style={styles.edge}>
        <Button
          mode="contained"
          style={styles.child}
          onPress={() => {
            navigation.navigate('Entry', {x, y})
          }}>
          Add
        </Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignContent: 'center',
  },
  edge: {
    height: 50,
  },

  top: {
    color: 'darkgreen',
    fontSize: 30,
  },
  list: {
    flex: 1,
  },
  entry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  date: {
    width: 100,
    height: 35,
    justifyContent: 'center',
    marginVertical: 5,
  },
  topCircle: {
    width: 45,
    height: 45,
    backgroundColor: 'green',
    justifyContent: 'center',
    borderRadius: 25,
    marginVertical: 5,
  },
  topButton: {
    borderRadius: 25,
    marginVertical: 5,
  },
  circle: {
    width: 35,
    height: 35,
    backgroundColor: 'blue',
    justifyContent: 'center',
    borderRadius: 15,
    marginVertical: 5,
  },
  child: {
    marginHorizontal: 25,
    marginVertical: 5,
  },
  topNumber: {
    color: 'gold',
    fontSize: 22,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  number: {
    color: 'white',
    alignSelf: 'center',
  },
})

export default TrendScreen
