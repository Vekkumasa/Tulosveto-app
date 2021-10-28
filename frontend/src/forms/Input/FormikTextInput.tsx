import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Customtext from '../../components/CustomText';

interface FormikTextInputProps {
  name: string
}

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: '#d73a4a',
  },
});

const FormikTextInput = ({ name, ...props }: FormikTextInputProps) => {
  const [field, meta, helpers] = useField<string>(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value: string) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Customtext style={styles.errorText}>{meta.error}</Customtext>}
    </>
  );
};
export default FormikTextInput;