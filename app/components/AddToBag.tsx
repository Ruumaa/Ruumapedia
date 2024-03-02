'use client';
import { Button } from '@/components/ui/button';
import { useShoppingCart } from 'use-shopping-cart';
import { ProductCart } from '../interface';
import { urlFor } from '../lib/sanity';

const AddToBag = ({
  name,
  description,
  currency,
  price,
  image,
}: ProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart();
  const product = {
    name,
    description,
    currency,
    price,
    image: urlFor(image).url(),
    id: '123',
  };
  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
};

export default AddToBag;
