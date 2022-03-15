import {memo} from '@common';
import {View, SvgIcon} from '@components';
import {dimensions} from '@theme';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const OtherServicesLoginComponent = (_: Props) => {
  return (
    <View row>
      <View shadow>
        <SvgIcon source="google" size={dimensions.otherLoginIcon} />
      </View>
      <View shadow>
        <SvgIcon source="apple" size={dimensions.otherLoginIcon} />
      </View>
    </View>
  );
};
export const OtherServicesLogin = memo(OtherServicesLoginComponent);
