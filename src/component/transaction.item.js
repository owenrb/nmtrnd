import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {Avatar} from 'react-native-paper'

export class TransactionRow extends Component {
  leftSwipe = (progress, dragX) => {
    return (
      <TouchableOpacity onPress={this.props.handleDelete} activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          <Text style={styles.x}>X</Text>
        </View>
      </TouchableOpacity>
    )
  }

  updateRef = ref => {
    this._swipeableRow = ref
  }
  close = () => {
    // setTimeout(() => {
    //   if (this && this._swipeableRow) this._swipeableRow.close()
    // }, 2000)
  }

  render() {
    const {children} = this.props
    return (
      <Swipeable
        ref={this.updateRef}
        renderLeftActions={this.leftSwipe}
        onSwipeableWillOpen={this.close}>
        {children}
      </Swipeable>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 5,
    marginTop: 1,
    marginBottom: 1,
  },
  amountColumn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  currencyContainer: {
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  amount: {
    fontSize: 18,
  },
  dateDivider: {
    backgroundColor: 'white',
    paddingTop: 8,
    //marginTop: 3,
    marginBottom: 2,
  },
  editBox: {
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    borderRadius: 5,
    paddingLeft: 2,
  },
  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    borderRadius: 5,
    //paddingLeft: 2,
    marginVertical: 10,
    height: 25,
    width: 25,
  },
  descriptionContainer: {
    width: '35%',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  description: {
    fontStyle: 'italic',
    color: 'darkgray',
  },

  rectButton: {
    flex: 1,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  separator: {
    backgroundColor: 'rgb(200, 199, 204)',
    height: StyleSheet.hairlineWidth,
  },
  fromText: {
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  messageText: {
    color: '#999',
    backgroundColor: 'transparent',
  },
  dateText: {
    color: '#777',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  x: {
    color: 'white',
    fontWeight: 'bold',
  },
})
