import * as React from 'react';
import {StyleSheet, View, Modal, Pressable} from 'react-native';
import {useTranslation} from '../../hooks';
import {Text, Container} from '../';
import {useTheme} from 'react-native-paper';

const Alert = (props: any) => {
  const {visible, setVisible, alertContent, dissmasable, primaryAction} = props;
  const {t} = useTranslation();
  const hideDialog = () => setVisible(false);
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    visible && (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        testID={'modal'}
        onDismiss={hideDialog}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {alertContent && (
              <Container>
                <Text
                  style={{marginBottom: 24}}
                  testID={'alertContent'}
                  variant="bodyMedium">
                  {alertContent}
                </Text>
                <Container
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  {dissmasable && (
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={hideDialog}
                      testID="close">
                      <Text style={styles.textStyle}> {t('global.no')}</Text>
                    </Pressable>
                  )}
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={primaryAction ? primaryAction : hideDialog}
                    testID="action">
                    <Text style={styles.textStyle}> {t('global.ok')}</Text>
                  </Pressable>
                </Container>
              </Container>
            )}
          </View>
        </View>
      </Modal>
    )
  );
};

export default Alert;

const getStyles = theme =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      fontSize: 18,
      paddingLeft: 10,
    },
    buttonOpen: {
      backgroundColor: theme.colors.primary,
    },
    buttonClose: {
      backgroundColor: theme.colors.secondary,
      paddingRight: 10,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    action: {
      fontSize: 18,
    },
  });
