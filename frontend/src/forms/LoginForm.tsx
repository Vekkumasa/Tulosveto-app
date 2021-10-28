import React, { FormEvent } from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import FormikTextInput from './Input/FormikTextInput';
import Button from '../components/Button';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  fieldContainer: {
    marginBottom: 15,
  },
});

interface FormValues {
  username: string,
  password: string
}

interface Submit {
  onSubmit: (values: FormValues) => void;
}

const initialValues = {
  username: '',
  password: '',
};

const LoginForm = ({ onSubmit }: { onSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void}) => {
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="username" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="password" />
      </View>
      <Button onPress={onSubmit}>Log In</Button>
    </View>
  );
};

const LoginContainer = ({ onSubmit }:Submit) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const Login = () => {
  const onSubmit = (values: FormValues) => {
    console.log('onsubmit values', values);
  };

  return(
    <View>
      <LoginContainer onSubmit={onSubmit} />
    </View>
  );
};

export default Login;