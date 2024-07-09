import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { Home } from '../../screens/Home/Home';
import { Form } from '../../screens/Form/Form';

import { styles } from './NavegadorStyles';

export function Navegador() {

    const [formShow , setFormShow] = useState<boolean>(false);

    const toggleApp = () =>{
      setFormShow(!formShow);
    }

  return (
    <View style={styles.container}>
        {formShow?<Form handleButton={toggleApp}/>:<Home handleButton={toggleApp}/>}
        <StatusBar style="auto" />
    </View>
  );
}