import {images} from '@assets/image';
import React, {memo} from 'react';
import equals from 'react-fast-compare';
import FastImage from 'react-native-fast-image';

import {styles} from './styles';
import {ImageProps} from './type';

const ImgComponent = ({
  style: styleOverride,
  resizeMode = 'cover',
  source,
}: ImageProps) => {
  // render
  return (
    <>
      <FastImage
        style={[styles.img, styleOverride]}
        resizeMode={resizeMode}
        source={images[source ?? 'default']}
      />
    </>
  );
};
export const Img = memo(ImgComponent, equals);
