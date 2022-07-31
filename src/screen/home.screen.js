import React from 'react'
import {StyleSheet, SafeAreaView} from 'react-native'
import {Button} from 'react-native-paper'
import {useDispatch} from 'react-redux'
import {getEntries} from '../store/action'

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch()

  const navigate = async (x, y) => {
    dispatch(await getEntries(x, y))
    navigation.navigate('Trend', {draw: x + '/' + y})
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button
        mode="contained"
        style={styles.child}
        onPress={() => navigate(6, 49)}>
        6 / 49
      </Button>
      <Button
        mode="contained"
        style={styles.child}
        onPress={() => navigate(6, 55)}>
        6 / 55
      </Button>
      <Button
        mode="contained"
        style={styles.child}
        onPress={() => navigate(6, 58)}>
        6 / 58
      </Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  child: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
})

export default HomeScreen
