import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';


const Hadi = props => {
  const Mlenght = parseInt(props.maxLength, 10);
  const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    borderRadius: 2,
    marginTop: 10,
    padding: 5,
    width: Mlenght
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
  return (
      <View style={styles.screen}>
          <Text style={{fontSize: 18}}>{props.title}</Text>
          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback >
              <View style={[styles.button, {backgroundColor: 'blue'}]}>
                <Text style={styles.btnText}>{props.maxLength}</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback >
              <View style={[styles.button, {backgroundColor: 'red'}]}>
                <Text style={styles.btnText}>{props.firstButton}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
      </View>
  );
};




//styles.button.width = 10;

const YourApp = () => {
  return (
    <>
    <Hadi maxLength= '100' title='Khar' firstButton='One' secondButton='Two'/>
    <Hadi maxLength= '50' title='Gab' firstButton='One' secondButton='Two'/>
    </>

  );
}

export default YourApp;
