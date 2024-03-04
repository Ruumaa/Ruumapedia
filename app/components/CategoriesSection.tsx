'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Men', href: '/Men' },
  { name: 'Women', href: '/Women' },
  { name: 'Teens', href: '/Teens' },
];

function CategoriesSection() {
  const pathname = usePathname();

  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center justify-between gap-8 my-6 sm:px-16 lg:my-0 lg:hidden  md:flex-row">
      <div className="flex h-10 w-60 divide-x divide-black border-black dark:divide-secondary dark:border-secondary overflow-hidden rounded-lg  border">
        {links.map((link, index) => (
          <div
            key={index}
            className={`flex w-1/3 items-center text-center justify-center ${
              pathname === link.href
                ? 'text-primary bg-gray-100 dark:bg-secondary/80 font-bold'
                : 'text-gray-500 transition duration-200 hover:text-primary hover:font-medium hover:bg-gray-100 dark:hover:bg-secondary/80 dark:active:bg-secondary/90  active:bg-gray-200'
            }`}
          >
            <Link href={link.href} key={index}>
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesSection;
