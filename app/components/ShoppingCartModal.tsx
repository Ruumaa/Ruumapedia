'use client';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import Image from 'next/image';
import { useShoppingCart } from 'use-shopping-cart';
import { rupiahDisplay } from '../lib/functions';
import { Button } from '@/components/ui/button';
import { clear } from 'console';

export default function ShoppingCartModal() {
  // handleCartClick to set shouldDisplayCart to true or false
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
    clearCart,
  } = useShoppingCart();
  // console.log(Object.values(cartDetails ?? {}).length);
  const handleCheckoutClick = async (event: any) => {
    event.preventDefault();
    try {
      await redirectToCheckout();
    } catch (error) {
      console.error('error when handleCheckoutClick', error);
    }
  };

  let cartItems = Object.values(cartDetails ?? {}).length;

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6 md:text-2xl">
                  You don&apos;t have any items
                </h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={entry.image as string}
                          alt="Product Image"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                            <h3>{entry.name}</h3>
                            <p className="ml-4">{rupiahDisplay(entry.price)}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
                            {entry.description}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500 dark:text-gray-400">
                            QTY: {entry.quantity}
                          </p>

                          <div className="flex">
                            <button
                              onClick={() => removeItem(entry.id)}
                              type="button"
                              className="font-medium text-primary hover:text-primary/80"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
              <p>Subtotal:</p>
              <p>{rupiahDisplay(totalPrice)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
              Shipping and taxes are calculated at checkout
            </p>
            <div className="mt-6 ">
              {cartItems === 0 ? (
                <Button disabled className="w-full">
                  Checkout
                </Button>
              ) : (
                <Button
                  className="w-full"
                  onClick={(event) => {
                    handleCheckoutClick(event);
                    clearCart();
                  }}
                >
                  Checkout
                </Button>
              )}
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500 dark:text-gray-400">
              <p>
                OR{' '}
                <button
                  className="font-medium text-primary hover:text-primary/80"
                  onClick={() => handleCartClick()}
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
