import React from 'react'
import {StyleSheet, Text, SafeAreaView, FlatList, View} from 'react-native'

const StatisticScreen = ({route, navigation}) => {
  const {params} = route
  const {top} = params

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={top}
          numColumns="2"
          renderItem={({item, index}) => {
            return (
              <View style={styles.entry}>
                <View style={styles.circle}>
                  <Text style={styles.number}>{item[0]}</Text>
                </View>
                <View style={styles.hits}>
                  <Text>
                    {item[1]} {item[1] > 1 ? 'hits' : 'hit'}
                  </Text>
                </View>
              </View>
            )
          }}></FlatList>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    marginHorizontal: 10,
  },
  entry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    width: '40%',
  },
  circle: {
    width: 35,
    height: 35,
    backgroundColor: 'blue',
    justifyContent: 'center',
    borderRadius: 15,
    marginVertical: 5,
  },
  number: {
    color: 'white',
    alignSelf: 'center',
  },
  hits: {
    width: 100,
    height: 35,
    justifyContent: 'center',
    marginVertical: 5,
    marginLeft: 25,
  },
})

export default StatisticScreen
