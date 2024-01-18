import * as React from 'react';
import {Pressable, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme, ActivityIndicator} from 'react-native-paper';
import {Container} from '..';
import {ButtonProps, ButtonMode} from '../../types';

const Button = (props: ButtonProps) => {
  const {
    icon,
    mode = ButtonMode.CONTAINED,
    onPress = () => {},
    label = '',
    loading,
    style,
    ...rest
  } = props;
  const theme = useTheme();
  const styles = getStyles(theme);

  return mode == ButtonMode.TEXT ? (
    <TouchableOpacity onPress={onPress}>
      <Text testID={'label'} style={styles.actionText}>
        {label}
      </Text>
    </TouchableOpacity>
  ) : (
    <Pressable
      style={[styles.button, style]}
      mode={mode}
      onPress={onPress}
      loading={loading}
      testID="button"
      {...rest}>
      <Container style={styles.buttonContainer}>
        {loading && <ActivityIndicator style = {{marginRight : 10}} color="#fff" />}
        <Text testID={'label'} style={styles.label}>
          {label}
        </Text>
      </Container>
    </Pressable>
  );
};

export default Button;

const getStyles = theme =>
  StyleSheet.create({
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      fontSize: 18,
      paddingLeft: 10,
      backgroundColor: theme.colors.secondary,
    },
    label: {
      color: '#fff',
      alignSelf: 'center',
    },
    actionText: {
      color: theme.colors.secondary,
      alignSelf: 'center',
      fontSize: 24,
      fontWeight: 'bold',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
