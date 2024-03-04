'use client';
import { Button } from '@/components/ui/button';
import { CheckCheck } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

const SuccessStripe = () => {
  // const { clearCart, cartDetails } = useShoppingCart();
  // useEffect(() => {
  //   clearCart();
  // }, []);

  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="mb-48 px-6 md:px-0 md:max-w-[50vw] mx-auto">
        <CheckCheck className="text-green-500 w-16 h-1/6 mx-auto my-6" />
        <div className="text-center ">
          <h3 className="md:text-2xl text-base text-gray-900 dark:text-white font-semibold text-center">
            Payment Done!
          </h3>{' '}
          <p className="text-gray-600 my-2 dark:text-gray-400">
            Thank you for your purchase! We hope you enjoy it
          </p>
          <Button asChild className="mt-4 cursor-pointer">
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStripe;
