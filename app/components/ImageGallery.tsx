'use client';
import Image from 'next/image';
import { urlFor } from '../lib/sanity';
import { useState } from 'react';

const ImageGallery = ({ images }: any) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const handleSmallImageClick = (image: any) => {
    setMainImage(image);
  };
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, index: any) => (
          <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="photo"
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>
      {/* Main image */}
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(mainImage).url()}
          alt="Main Image"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />
        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 font-medium px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          SALE
        </span>
      </div>
    </div>
  );
};

export default ImageGallery;
