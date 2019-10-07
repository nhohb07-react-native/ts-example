import React from 'react';
import { Text } from 'react-native';

import { NameProvider } from 'src/utils/providers';
import { lazyInject } from 'src/utils/ioc';

export class Hello extends React.Component {
  @lazyInject("testName") private readonly nameProvider: NameProvider;

  render() {
    console.log(this.nameProvider);

    return <Text>Hello !</Text>;
  }
}