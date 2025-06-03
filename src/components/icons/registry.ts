import { IconRegistry } from './types';
import * as SocialIcons from './social';
import * as GeneralIcons from './general';

export const iconRegistry: IconRegistry = {
  ...SocialIcons,
  ...GeneralIcons,
};

export type IconName = keyof typeof iconRegistry & string;