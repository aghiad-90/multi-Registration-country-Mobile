import React from 'react';
import {Text as RNText} from 'react-native';

const Text = (props: any): JSX.Element => {
  const {children, style, ...rest} = props;
  return (
    <RNText style={[style, {fontSize : 20}]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
