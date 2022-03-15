import {FormLoginType} from '@model/login';
import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {Text, TouchableScale, View} from '@components';
import {InputOutline} from '@library/components/text-field/components/out-line';
import {margin} from '@theme';
import {useTranslate} from '@common';

interface FormLoginProps {
  onSubmit?: (data: FormLoginType) => void;
}

const FormLoginComponent = (_: FormLoginProps) => {
  const translate = useTranslate();
  return (
    <View marginRight={margin.massive}>
      <Text marginBottom={margin.mediumPlus} type="bigHeader" primary bold>
        {translate('Login:loginTitle')}
      </Text>
      <InputOutline labelTx={translate('Login:username')} />
      <View height={margin.small} />
      <InputOutline labelTx={translate('Login:password')} />
      <TouchableScale style={{alignSelf: 'flex-end'}}>
        <Text
          marginTop={margin.small}
          type="label"
          primary
          textAlign="right"
          bold>
          {translate('Login:forgotPassword')}
        </Text>
      </TouchableScale>
    </View>
  );
};

export const FormLogin = memo(FormLoginComponent, isEqual);
