import React from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import {
  Container,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  AddButtonText,
  Amount,
  AmountText,
} from './styles';

export default class Home extends React.Component {
  state = { products: [] };

  async componentDidMount() {
    const response = await api.get('/products');

    const products = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({ products });
  }

  renderProduct = ({ item: product }) => (
    <ProductCard key={product.id.toString()}>
      <ProductImage source={{ uri: product.image }} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>{product.formattedPrice}</ProductPrice>
      <AddButton onPress={() => {}}>
        <Amount>
          <Icon name="add-shopping-cart" color="#f6f6fa" size={20} />
          <AmountText>3</AmountText>
        </Amount>
        <AddButtonText>Add to cart</AddButtonText>
      </AddButton>
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
