'use client';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useShoppingCart } from 'use-shopping-cart';

type Props = {};

const links = [
  { name: 'Home', href: '/' },
  { name: 'Men', href: '/Men' },
  { name: 'Women', href: '/Women' },
  { name: 'Teens', href: '/Teens' },
];

export default function Navbar({}: Props) {
  //hook
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-2-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="">
          <h1 className="text-2xl md:text-4xl font-bold">
            Ruuma<span className="text-primary">pedia</span>
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, index) => (
            <div key={index}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className="text-primary text-lg font-semibold cursor-pointer"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-gray-600 text-lg font-semibold transition duration-100 hover:text-primary cursor-pointer"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant="outline"
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden sm:block font-semibold text-gray-500">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
