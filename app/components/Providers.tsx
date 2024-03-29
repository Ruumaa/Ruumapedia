'use client';
import { ReactNode } from 'react';
import { CartProvider as USCProvider } from 'use-shopping-cart';

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      cancelUrl="https://ruumapedia.vercel.app/stripe/error"
      successUrl="https://ruumapedia.vercel.app/stripe/success"
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
