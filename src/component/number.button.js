import React, {useState, useCallback, useEffect} from 'react'
import {Button} from 'react-native-paper'

const ToggleNumber = ({num, updateStatus}) => {
  const [selected, setSelected] = useState(false)
  return (
    <Button
      mode={selected ? 'contained' : 'outlined'}
      onPress={() => {
        setSelected(!selected)
        updateStatus(num, !selected)
      }}>
      {num}
    </Button>
  )
}

export default ToggleNumber
