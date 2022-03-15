import React, {memo, useMemo} from 'react';
import equals from 'react-fast-compare';
import {Dimensions, useWindowDimensions, View, ViewStyle} from 'react-native';

import {Img} from '../img';

import {styles} from './styles';
import {WallpaperProps} from './type';

const deviceH = Dimensions.get('window').height;

const WallpaperComponent = ({
  backgroundImage = 'bg_wallpaper',
}: WallpaperProps) => {
  // state
  const {width} = useWindowDimensions();
  const containerStyle = useMemo<ViewStyle>(
    () => ({width, height: deviceH}),
    [width],
  );

  // render
  return (
    <View pointerEvents={'none'} style={[styles.container, containerStyle]}>
      <Img source={backgroundImage} resizeMode={'stretch'} />
    </View>
  );
};
export const Wallpaper = memo(WallpaperComponent, equals);
