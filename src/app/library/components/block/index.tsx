import {enhance, propsToStyle} from '@common';
import {getColors, useTheme} from '@theme';
import React, {forwardRef, memo, useMemo} from 'react';
import isEquals from 'react-fast-compare';
import {StyleProp, StyleSheet, View as ViewRN, ViewStyle} from 'react-native';

import {BlockProps} from './type';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

const BlockComponent = forwardRef(
  (props: BlockProps, ref: React.ForwardedRef<ViewRN>) => {
    // state
    const theme = useTheme();
    const colors = getColors(theme);
    const {
      block,
      margin,
      marginLeft,
      alignItems,
      alignSelf,
      marginRight,
      marginTop,
      marginBottom,
      direction: flexDirection,
      padding,
      paddingHorizontal,
      paddingVertical,
      width,
      height,
      border,
      borderWidth,
      borderColor,
      color: backgroundColor,
      justifyContent,
      middle,
      paddingRight,
      paddingBottom,
      paddingLeft,
      paddingTop,
      borderRadius,
      shadow,
      flex,
      shadowConfig,
      position,
      flexWrap,
      left,
      right,
      bottom,
      top,
      zIndex,
      overflow,
      borderBottomWidth,
      borderLeftWidth,
      borderRightWidth,
      borderTopWidth,
      borderBottomColor,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderLeftColor,
      borderRightColor,
      borderStyle,
      borderTopColor,
      borderTopLeftRadius,
      borderTopRightRadius,
      opacity,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      style = {},
      children,
      colorTheme,
      row,
      ...rest
    } = props;

    const styleComponent = useMemo(
      () =>
        enhance([
          [
            block && styles.block,
            border && {
              borderWidth: 1,
              borderColor: colors.primary,
            },
            colorTheme && {backgroundColor: colors[colorTheme]},
            middle && {alignItems: 'center'},
            shadow && {
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              ...shadowConfig,
            },
            propsToStyle([
              {margin},
              {marginLeft},
              {marginRight},
              {marginTop},
              {marginBottom},
              {flexDirection: row ? 'row' : flexDirection},
              {padding},
              {paddingRight},
              {paddingBottom},
              {paddingLeft},
              {paddingTop},
              {paddingHorizontal},
              {paddingVertical},
              {width},
              {height},
              {maxHeight},
              {maxWidth},
              {minHeight},
              {minWidth},
              {borderWidth},
              {borderColor},
              {backgroundColor},
              {justifyContent},
              {alignItems},
              {alignSelf},
              {borderRadius},
              {flex},
              {position},
              {flexWrap},
              {left},
              {right},
              {bottom},
              {top},
              {zIndex},
              {overflow},
              {borderBottomColor},
              {borderBottomLeftRadius},
              {borderBottomRightRadius},
              {borderLeftColor},
              {borderRightColor},
              {borderStyle},
              {borderTopColor},
              {borderTopLeftRadius},
              {borderTopRightRadius},
              {opacity},
              {borderBottomWidth},
              {borderLeftWidth},
              {borderRightWidth},
              {borderTopWidth},
            ]),
            style,
          ] as StyleProp<ViewStyle>,
        ]),
      [
        colors,
        block,
        border,
        colorTheme,
        middle,
        shadow,
        shadowConfig,
        margin,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom,
        flexDirection,
        padding,
        paddingRight,
        paddingBottom,
        paddingLeft,
        paddingTop,
        paddingHorizontal,
        paddingVertical,
        width,
        height,
        maxHeight,
        maxWidth,
        minHeight,
        minWidth,
        borderWidth,
        borderColor,
        backgroundColor,
        justifyContent,
        alignItems,
        alignSelf,
        borderRadius,
        flex,
        position,
        flexWrap,
        left,
        right,
        bottom,
        top,
        zIndex,
        overflow,
        borderBottomColor,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        borderLeftColor,
        borderRightColor,
        borderStyle,
        borderTopColor,
        borderTopLeftRadius,
        borderTopRightRadius,
        opacity,
        borderBottomWidth,
        borderLeftWidth,
        borderRightWidth,
        borderTopWidth,
        style,
        row,
      ],
    );

    // render
    return (
      <ViewRN
        style={[styleComponent]}
        {...rest}
        ref={ref}
        children={children}
      />
    );
  },
);
export const View = memo(BlockComponent, isEquals);
