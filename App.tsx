import React, { Fragment } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Hello } from 'src/components/Hello';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Hello />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
