import Intl from 'intl';
import 'intl/locale-data/jsonp/en';

export const { format: formatPrice } = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'USD',
});
