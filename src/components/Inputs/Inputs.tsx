import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import CheckBox from 'react-native-check-box';

import { styles } from './InputsStyles';

export interface InputsProps {
  username: string;
  setUsername: (username: string) => void;
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  location: string;
  setLocation: (location: string) => void;
  observation: string;
  setObservation: (observation: string) => void;
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}

export function Inputs(props:InputsProps) {

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize='words'
          autoCorrect={false}
          keyboardType='default'
          value={props.username}
          onChangeText={props.setUsername}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder='Phone'
          keyboardType='phone-pad'
          value={props.phoneNumber}
          onChangeText={props.setPhoneNumber}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          placeholder='Location'
          autoCapitalize='words'
          autoCorrect={false}
          value={props.location}
          onChangeText={props.setLocation}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Observation</Text>
        <TextInput
          style={[styles.input, styles.inputObs]}
          placeholder='Observation'
          multiline
          value={props.observation}
          onChangeText={props.setObservation}
        />
      </View>
      <View style={styles.termsContainer}>
        <CheckBox
          style={styles.checkbox}
          isChecked={props.isChecked}
          onClick={() => props.setIsChecked(!props.isChecked)}
        />
        <Text style={styles.termsText}>
          I agree with the terms and conditions
        </Text>
      </View>
    </View>
  );
}
