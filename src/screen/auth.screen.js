import React from 'react'
import {StyleSheet, Text, SafeAreaView} from 'react-native'
import {TextInput, Button} from 'react-native-paper'
import {Formik} from 'formik'
import * as Yup from 'yup'
import {useDispatch, useSelector} from 'react-redux'
import {loginUser} from '../store/action'

const AuthScreen = () => {
  const dispatch = useDispatch()
  const error = useSelector(state => state.auth.error)

  const handleSubmit = async values => {
    dispatch(await loginUser(values))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{
          passcode: '',
        }}
        validationSchema={Yup.object({
          passcode: Yup.string().required('Passcode is required'),
        })}
        onSubmit={values => handleSubmit(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <>
            <TextInput
              style={styles.child}
              label="Passcode"
              renderErrorMessage={error}
              errorMessage={error}
              onChangeText={handleChange('passcode')}
              onBlur={handleBlur('passcode')}
              value={values.passcode}
            />
            <Text style={{...styles.child, color: 'red'}}>{error}</Text>
            <Button
              mode="contained"
              style={styles.child}
              onPress={handleSubmit}>
              Login
            </Button>
          </>
        )}
      </Formik>
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

export default AuthScreen
