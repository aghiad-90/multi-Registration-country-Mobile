import React from 'react';
import {TextInputProps} from '../../types';
import {TextInput as RNTextInput, useTheme} from 'react-native-paper';
import Text from '../Text';
import {Container} from '..';
import {Controller} from 'react-hook-form';

const TextInput = (props: TextInputProps) => {
  const {
    placeholder = '',
    value = '',
    showSecureText = false,
    secureTextEntry = false,
    onChangeText,
    style,
    error,
    control,
    name,
    ...rest
  } = props;
  const theme = useTheme();

  return (
    <Controller
      control={control}
      name = {name}
      render={({field : {onChange , onBlur}}) => (
        <Container style={style}>
          <RNTextInput
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            secureTextEntry={showSecureText}
            onChangeText={ value => {
              onChangeText(value);
              onChange(value)
            }}
            value={value}
            error={error}
            style={[{fontSize: 20}]}
            {...rest}
          />
          <Text style = {{color : theme.colors.error}}>{error?.message}</Text>
        </Container>
      )} 
      />
  );
};

export default TextInput;
