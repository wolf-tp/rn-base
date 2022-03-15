import Loupe from './source/loupe.svg';
import Plush from './source/plus.svg';
import ArrowDown from './source/arrow-down.svg';
import ArrowUp from './source/arrow-up.svg';
import HorizontalDots from './source/horizontal-dots.svg';
import Google from './source/google.svg';
import Apple from './source/apple.svg';

export const SvgComponent = {
  loupe: Loupe,
  plus: Plush,
  arrowUp: ArrowDown,
  arrowDown: ArrowUp,
  horizontalDots: HorizontalDots,
  google: Google,
  apple: Apple,
};
export type SvgIconTypes = keyof typeof SvgComponent;
