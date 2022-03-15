import {View, Button, Screen, Text, Wallpaper} from '@components';
import {goBack} from '@navigation/navigation-service';
import React, {memo} from 'react';
import isEqual from 'react-fast-compare';

const RegisterComponent = () => {
  // render
  return (
    <View block>
      <Wallpaper />
      <Screen>
        <View block justifyContent={'center'} middle>
          <Button
            onPress={() => {
              goBack();
            }}>
            <Text color={'red'}>Back</Text>
          </Button>
        </View>
      </Screen>
    </View>
  );
};
export const Register = memo(RegisterComponent, isEqual);
