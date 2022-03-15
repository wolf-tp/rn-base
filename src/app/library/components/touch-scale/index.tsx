import {sharedTiming} from '@animated';
import {onCheckType} from '@common';
import {dimensions, getColors, padding, useTheme} from '@theme';
import React, {memo, useCallback, useMemo} from 'react';
import equals from 'react-fast-compare';
import {
  GestureResponderEvent,
  StyleProp,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import {Text} from '../text';

import {styles} from './styles';
import {ButtonScaleProps, TouchableScaleProps} from './type';

const TouchableScaleComponent = (props: TouchableScaleProps) => {
  // props
  const {
    children,
    minScale = 0.9,
    containerStyle: overwriteContainerStyle,
    onPressIn,
    onPressOut,
    style,
    ...rest
  } = props;

  // reanimated
  const scale = useSharedValue(1);

  // function
  const _onPressIn = useCallback(
    (e: GestureResponderEvent) => {
      scale.value = sharedTiming(minScale, {duration: 150});
      if (onCheckType(onPressIn, 'function')) {
        onPressIn(e);
      }
    },
    [minScale, onPressIn, scale],
  );

  const _onPressOut = useCallback(
    (e: GestureResponderEvent) => {
      scale.value = sharedTiming(1, {duration: 150});
      if (onCheckType(onPressOut, 'function')) {
        onPressOut(e);
      }
    },
    [onPressOut, scale],
  );

  //reanimated style
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  // render
  return (
    <TouchableWithoutFeedback
      {...rest}
      onPressIn={_onPressIn}
      onPressOut={_onPressOut}>
      <Animated.View
        style={[
          styles.container,
          overwriteContainerStyle,
          containerAnimatedStyle,
          style,
        ]}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export const TouchableScale = memo(TouchableScaleComponent, equals);

const ButtonScaleComponent = ({
  outline,
  children,
  style,
  ...otherProps
}: ButtonScaleProps) => {
  const color = getColors(useTheme());
  const colorOutlineButton = color.background;

  const buttonStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      outline && {
        borderWidth: dimensions.borderLine,
        paddingVertical: padding.small,
        paddingHorizontal: padding.medium + padding.small,
        borderRadius: dimensions.borderRadius,
        borderColor: colorOutlineButton,
      },
      style,
    ],
    [outline, style, colorOutlineButton],
  );

  return (
    <TouchableScale style={buttonStyle} {...otherProps}>
      {typeof children === 'string' ? (
        <Text type="header" color={colorOutlineButton}>
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableScale>
  );
};
export const ButtonScale = memo(ButtonScaleComponent, equals);
