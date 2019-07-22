import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View``;

export const ProductCard = styled.View`
  background: #f6f6fa;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #3e4d58;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: #045488;
  border-radius: 4px;
  margin-top: auto;
`;

export const Amount = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: ${darken(0.03, '#045488')};
`;

export const AmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
  text-transform: uppercase;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
