import {areaHeight, isIOS, useTranslate} from '@common';
import {
  View,
  ButtonScale,
  Screen,
  Text,
  TouchableScale,
  Wallpaper,
} from '@components';
import {margin} from '@theme';
import {globalStyles} from '@utils';
import React, {memo} from 'react';
import isEqual from 'react-fast-compare';

import {FormLogin} from './components/form-login';
import {OtherServicesLogin} from './components/other-services-login';

const LoginComponent = () => {
  const translate = useTranslate();

  // render
  return (
    <View block paddingTop={0}>
      <Screen
        container
        bounces={false}
        contentContainerStyle={[
          globalStyles.alignBottomScroll,
          globalStyles.paddingContainer,
        ]}
        transparent
        backgroundColor={'transparent'}>
        <Wallpaper />
        <View
          justifyContent="flex-end"
          flex={1}
          style={!isIOS && {height: areaHeight}}>
          <View>
            <FormLogin />
            <OtherServicesLogin />
            <View
              row
              marginTop={margin.large}
              marginBottom={margin.tiny}
              justifyContent="space-between"
              alignItems="flex-end">
              {/* SignUp */}
              <View row>
                <Text whiteText>New Here? </Text>
                <TouchableScale>
                  <Text whiteText bold>
                    {translate('Login:register')}
                  </Text>
                </TouchableScale>
              </View>
              {/* LoginButton */}
              <ButtonScale outline>{translate('Login:loginTitle')}</ButtonScale>
            </View>
          </View>
        </View>

        {/* <View />
        <View>
          <FormLogin onSubmit={onSubmit} />
        </View> */}
      </Screen>
      {/* <FAB
        type={'group'}
        actions={[
          {icon: 'home', label: 'Icon1'},
          {icon: 'search', label: 'Icon2'},
          {icon: 'send', label: 'Icon3'},
        ]}
      /> */}
    </View>
  );
};
export const Login = memo(LoginComponent, isEqual);
