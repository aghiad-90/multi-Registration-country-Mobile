import React from 'react';
import {View as Wrapper} from 'react-native';

const Container = (props: any) => {
  const {children, style , ...rest} = props;
  return <Wrapper style = {style} {...rest}>{children}</Wrapper>;
};

export default Container;
