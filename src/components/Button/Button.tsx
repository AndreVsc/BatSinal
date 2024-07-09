import React from 'react';
import { Text , Pressable } from 'react-native';

import { styles } from './ButtonStyles';

interface propsButton{
    handleButton:VoidFunction;
    text:String;
}

export function Button(props:propsButton) {
  return (
        <Pressable style={styles.button} onPress={props.handleButton}>
            <Text style={styles.textButton}>{props.text}</Text>
        </Pressable>
  );
}