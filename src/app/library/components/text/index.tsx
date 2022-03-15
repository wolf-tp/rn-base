/* eslint-disable no-nested-ternary */
import {enhance, propsToStyle} from '@common';
import {fontSize, getColors, useTheme} from '@theme';
import {FontDefault} from '@theme/typography';
import React, {memo, useMemo} from 'react';
import equals from 'react-fast-compare';
import {useTranslation} from 'react-i18next';
import {
  StyleProp,
  StyleSheet,
  Text as ReactNativeText,
  TextStyle,
} from 'react-native';

import {TextProps} from './type';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

const TextComponent = (props: TextProps) => {
  // state
  const theme = useTheme();
  const colorThemeText = getColors(theme);
  const {
    tx,
    txOptions,
    text,
    children,
    flex,
    fontFamily = 'primary',
    color,
    center,
    textTransform,
    textAlign,
    fontStyle,
    letterSpacing,
    lineHeight,
    colorTheme = 'text',
    style: styleOverride = {},
    type = 'content',
    bold,
    whiteText,
    primary,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    ...rest
  } = props;
  const [t] = useTranslation();
  const i18nText = useMemo(() => tx && t(tx, txOptions), [tx, txOptions, t]);
  const content = useMemo(
    () => i18nText || text || children,
    [i18nText, text, children],
  );
  const textColor =
    colorThemeText[primary ? 'primary' : whiteText ? 'background' : colorTheme];
  const textSize = fontSize[`${type}TextSize`];

  const styleComponent = useMemo(
    () =>
      enhance([
        [
          flex === true && styles.flex,
          {fontSize: textSize},
          {fontFamily: FontDefault[fontFamily]},
          {
            color: textColor,
          },
          center && {textAlign: 'center'},
          propsToStyle([
            !bold && {fontWeight: 'normal'},
            {color},
            {textAlign},
            {textTransform},
            {fontStyle},
            {letterSpacing},
            {lineHeight},
            {marginTop},
            {marginBottom},
            {marginLeft},
            {marginRight},
            {paddingBottom},
            {paddingLeft},
            {paddingRight},
            {paddingTop},
          ]),
          enhance([styleOverride]),
        ] as StyleProp<TextStyle>,
      ]),
    [
      textColor,
      flex,
      textSize,
      bold,
      fontFamily,
      color,
      center,
      textAlign,
      textTransform,
      fontStyle,
      letterSpacing,
      lineHeight,
      styleOverride,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
    ],
  );
  // render
  return (
    <ReactNativeText
      allowFontScaling={false}
      {...rest}
      style={[styleComponent]}>
      {content}
    </ReactNativeText>
  );
};
export const Text = memo(TextComponent, equals);
