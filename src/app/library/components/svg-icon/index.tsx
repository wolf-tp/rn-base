import {SvgComponent} from '@assets/svgIcon';
import {useTheme} from '@theme';
import React, {createElement, memo} from 'react';
import isEqual from 'react-fast-compare';

import {TouchableScale} from '../touch-scale';

import {SvgIconProps} from './type';

const SvgIconComponent = ({
  source,
  color = '#000',
  size = 24,
  colorTheme,
  onPress,
}: SvgIconProps) => {
  // state
  const theme = useTheme();
  // render
  return (
    <TouchableScale disabled={typeof onPress !== 'function'} onPress={onPress}>
      {createElement(SvgComponent[source], {
        width: size,
        height: size,
        fill: colorTheme ? theme.colors[colorTheme] : color,
      })}
    </TouchableScale>
  );
};

export const SvgIcon = memo(SvgIconComponent, isEqual);
