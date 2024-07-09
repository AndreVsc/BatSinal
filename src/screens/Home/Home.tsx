import React from 'react';
import { View } from 'react-native';
import { styles } from './HomeStyles';

import { Logo } from '../../components/Logo/Logo';
import { Button } from '../../components/Button/Button';

interface propsHome{
  handleButton:VoidFunction;
}

export function Home(props:propsHome) {
  return (
    <>
      <View style={styles.logoContainer}>
        <Logo styleName='homeLogo'/>
      </View>

      <View style={styles.buttonContainer}>
        <Button handleButton={props.handleButton} text={'active bat signal'}/>
      </View>
    </>
  );
}