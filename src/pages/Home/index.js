import React from 'react';
import { FlatList } from 'react-native';

import api from '../../services/api';
import {
  Container,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
} from './styles';

export default class Home extends React.Component {
  state = { products: [] };

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({ products: response.data });
  }

  renderProduct = ({ item: product }) => (
    <ProductCard key={product.id.toString()}>
      <ProductImage source={{ uri: product.image }} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>{product.price}</ProductPrice>
    </ProductCard>
  );

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          keyExtractor={product => product.id.toString()}
          renderItem={this.renderProduct}
          showsHorizontalScrollIndicator={false}
        />
      </Container>
    );
  }
}

Home.navigationOptions = {
  title: 'SHOESE',
};
