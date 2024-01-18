import * as React from 'react';
import {StyleSheet, View, Button, Modal} from 'react-native';
// import {Button, Dialog} from 'react-native-paper';
import {useTranslation} from '../../hooks';
import {Text, Container} from '../';

const Test = (props: any) => {
  const {visible, setVisible, alertContent, dissmasable, primaryAction} = props;
  console.log('aledasdasdsrt', props);
  const {t} = useTranslation();
  const hideDialog = () => setVisible(false);

  return (
    <View testID="alertContent">
      {visible && (
        <Modal visible={visible} onDismiss={hideDialog} testID={'modal'}>
          {alertContent && (
            <Dialog.Content>
              <Text testID={'testText'} variant="bodyMedium">
                {alertContent}
              </Text>
            </Dialog.Content>
          )}
          <Container>
            <Button
              labelStyle={styles.button}
              title={'test'}
              onPress={primaryAction ? primaryAction : hideDialog}>
              {t('global.ok')}
            </Button>
            {dissmasable && (
              <Button
                title={'test'}
                labelStyle={styles.button}
                onPress={hideDialog}>
                {t('global.no')}
              </Button>
            )}
          </Container>
        </Modal>
      )}
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  button: {
    fontSize: 18,
  },
});
