import React,{useState} from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Logo } from '../../components/Logo/Logo';

import { Button } from '../../components/Button/Button';
import { Inputs } from '../../components/Inputs/Inputs';

import { styles } from './FormStyles';

interface propsForm{
  handleButton:()=>void
}

export function Form(props:propsForm) {

  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [observation, setObservation] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = () => {
    if (!username || !phoneNumber || !location || !isChecked) {
      Alert.alert('Error', 'Please fill out all required fields and agree to the terms and conditions.');
    } else {
      Alert.alert('Success', 'Form submitted successfully!');
      props.handleButton();
    }
  };

  return (
    <>
      <View style={[styles.logoContainerForm, styles.shadow]}>
        <Logo styleName={'formLogo'} />
      </View>

      <ScrollView style={styles.scrollContainerForm}>
        <Inputs username={username} setUsername={setUsername} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} location={location} setLocation={setLocation} observation={observation} setObservation={setObservation} isChecked={isChecked} setIsChecked={setIsChecked} />
      </ScrollView>

      <View style={[styles.buttonContainerForm, styles.shadow]}>
        <Button text={'Enviar'} handleButton={handleSubmit} />
      </View>
    </>
  );
}
