'use client';
import { ReactNode } from 'react';
import { CartProvider as USCProvider } from 'use-shopping-cart';

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      cancelUrl="http://localhost:3000/error"
      successUrl="http://localhost:3000/success"
      currency="IDR"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
};

export default CartProvider;
