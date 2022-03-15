import {dimensions, padding} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: padding.small,
    borderWidth: dimensions.borderLine,
    borderRadius: 5,
    borderColor: 'gray',
    justifyContent: 'center',
  },
  input: {
    color: '#000',
    padding: 0,
    borderBottomColor: 'transparent',
  },
  text: {
    alignSelf: 'flex-start',
    zIndex: 4,
    left: 5,
  },
  wrapLabel: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  wrapPlaceHolder: {
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingLeft: padding.tiny,
  },
  flex: {
    flex: 1,
    paddingHorizontal: 5,
  },
});
