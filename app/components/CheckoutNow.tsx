'use client';
import { Button } from '@/components/ui/button';
import { useShoppingCart } from 'use-shopping-cart';
import { ProductCart } from '../interface';
import { urlFor } from '../lib/sanity';

const CheckoutNow = ({
  name,
  description,
  currency,
  price,
  image,
  price_id,
}: ProductCart) => {
  const { checkoutSingleItem } = useShoppingCart();

  const buyNow = (priceId: string) => {
    checkoutSingleItem(priceId);
  };
  const product = {
    name,
    description,
    currency,
    price,
    image: urlFor(image).url(),
    price_id,
  };
  return (
    <Button
      onClick={() => {
        buyNow(product.price_id);
      }}
    >
      Add To Cart
    </Button>
  );
};

export default CheckoutNow;
