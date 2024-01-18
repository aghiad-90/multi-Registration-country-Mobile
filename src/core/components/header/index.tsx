import React  from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import Container from '../container';
import Text from '../Text';
import Button from '../button';

import {useTranslation} from '../../hooks';

const Header = (props: any) => {
  const {onPressSignOut} = props;
  const theme = useTheme();
  const {t} = useTranslation();

  const styles = getStyles(theme);
  return (
    <SafeAreaView>
      <Container style={styles.container}>
        <Text>{t('postlogin.dashboard')}</Text>
        <Button
          label={t('postlogin.logout')}
          onPress={onPressSignOut}
          style={styles.button}
          testID = 'signOut'
        />
      </Container>
    </SafeAreaView>
  );
};

export default Header;

const getStyles = theme =>
  StyleSheet.create({
    container: {
      height: 120,
      width: '100%',
      padding: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    button: {
      height: 40,
    },
  });
