import * as React from 'react'
import {Button} from 'react-native-paper'
import {FlatList, View, StyleSheet} from 'react-native'
import ToggleButton from '../component/number.button'
import moment from 'moment'
import DatePicker from 'react-native-date-picker'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {addEntry} from '../store/action'
import {useDispatch} from 'react-redux'

const AddScreen = ({route, navigation}) => {
  const {params} = route
  const {x, y} = params

  const arr = new Array()
  for (k = 1; k <= y; k++) {
    arr.push(k)
  }

  const [selection, setSelection] = React.useState(new Array())
  const updateStatus = (num, selected) => {
    if (selected) {
      selection.push(num)
      setSelection(selection.filter(item => item !== 'a'))
    } else {
      setSelection(selection.filter(item => item !== num))
    }

    // console.log({x, selection})
  }

  const [date, setDate] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)

  const dispatch = useDispatch()
  const saveEntry = async (date, selection) => {
    console.log({date, selection})
    dispatch(await addEntry(date, x, y, selection))
    navigation.goBack(null)
  }

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.top}>
        <Button onPress={() => setOpen(true)} style={styles.button}>
          {moment(date, 'YYYY-MM-DD').toDate().toDateString()}
        </Button>

        <DatePicker
          modal={true}
          mode="date"
          open={open}
          date={moment(date, 'YYYY-MM-DD').toDate()}
          onConfirm={date1 => {
            setOpen(false)
            setDate(date1)
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />
      </View>
      <View styles={styles.middle}>
        <FlatList
          style={styles.list}
          data={arr}
          renderItem={({item, index}) => (
            <ToggleButton num={item} updateStatus={updateStatus}></ToggleButton>
          )}
          numColumns="5"
          keyExtractor={(item, index) => `message ${index}`}
        />
      </View>
      <View style={styles.space} />
      <View styles={styles.bottom}>
        <Button
          style={styles.button}
          mode="contained"
          disabled={selection.length + '' !== x}
          onPress={() => {
            saveEntry(date, selection)
          }}>
          Save
        </Button>
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  top: {height: 70},
  middle: {flex: 1, justifyContent: 'center', alignContent: 'center'},
  bottom: {height: 100},
  button: {
    marginVertical: 15,
    marginHorizontal: 25,
  },
  list: {
    marginHorizontal: 25,
  },
  space: {
    height: 25,
  },
})

export default AddScreen
