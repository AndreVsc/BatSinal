import React from 'react';
import { Image } from 'react-native';
import logoImage from '../../../assets/bat-14.png';

import { styles } from './LogoStyles';

interface propsLogo{
  styleName: keyof typeof styles;
}

export function Logo(props:propsLogo) {
  return (
    <>
        <Image source={logoImage} style={styles[props.styleName]}/>
    </>
  );
}