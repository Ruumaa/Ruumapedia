import Image from 'next/image';
import { getImages } from '../lib/fetch';
import { urlFor } from '../lib/sanity';
import Link from 'next/link';
import Newest from './Newest';
import { HeroImage } from '../interface';
import CategoriesSection from './CategoriesSection';

type Props = {};

export default async function Hero({}: Props) {
  const images: HeroImage = await getImages();
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-8xl">
            Top Fashion for a top price!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            Welcome to Ruuma<span className="text-primary">pedia</span>!
            Discover diverse products and enjoy secure payments with fast
            shipping.
          </p>
        </div>
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              alt="First Hero Photo"
              priority
              width={500}
              height={500}
              src={urlFor(images.image1).url()}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(images.image2).url()}
              priority
              alt="Second Hero Photo"
              width={500}
              height={500}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg  border dark:border-primary dark:divide-primary ">
          <Link
            href="/Men"
            className="flex w-1/3 items-center justify-center text-gray-500 dark:text-white transition duration-200 hover:bg-gray-100 dark:hover:text-primary hover:font-medium dark:hover:bg-white active:bg-gray-200"
          >
            Men
          </Link>
          <Link
            href="/Women"
            className="flex w-1/3 items-center justify-center text-gray-500 dark:text-white transition duration-200 hover:bg-gray-100 dark:hover:text-primary hover:font-medium dark:hover:bg-white active:bg-gray-200"
          >
            Women
          </Link>
          <Link
            href="/Teens"
            className="flex w-1/3 items-center justify-center text-gray-500 dark:text-white transition duration-200 hover:bg-gray-100 dark:hover:text-primary hover:font-medium dark:hover:bg-white active:bg-gray-200"
          >
            Teens
          </Link>
          {/* <Newest /> */}
        </div>
      </div>
    </section>
  );
}
