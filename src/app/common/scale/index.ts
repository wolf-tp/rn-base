import {Dimensions, Platform} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';
const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];
//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
export const {width: screenWidth, height: screenHeight} =
  Dimensions.get('window');
export const isIOS = Platform.OS === 'ios';

export let areaHeight = screenHeight;

export const setRealAreaWithInsets = (insets: EdgeInsets) => {
  areaHeight = screenHeight - insets.top - insets.bottom;
};

const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;
export const sizeScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
