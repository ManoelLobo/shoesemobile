import React from 'react';
import { Text } from 'react-native';

import api from '../../services/api';
import { Container } from './styles';

export default class Home extends React.Component {
  state = { products: [] };

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({ products: response.data });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        {products.length > 0 ? (
          products.map(product => (
            <Text key={product.id.toString()}>{product.title}</Text>
          ))
        ) : (
          <Text>NO</Text>
        )}
      </Container>
    );
  }
}

Home.navigationOptions = {
  title: 'SHOESE',
};
