'use client';
import { ReactNode } from 'react';
import { CartProvider as USCProvider } from 'use-shopping-cart';

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      cancelUrl="http://localhost:3000/stripe/error"
      successUrl="http://localhost:3000/stripe/success"
      currency="IDR"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
};

export default CartProvider;
