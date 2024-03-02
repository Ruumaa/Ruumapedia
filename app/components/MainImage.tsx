'use client';

import { useState } from 'react';
import { imageGallery } from '../interface';
import Image from 'next/image';
import { urlFor } from '../lib/sanity';

const MainImage = ({ images }: imageGallery) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const handleSmallImageClick = (image: any) => {
    setMainImage(image);
  };
  return (
    <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
      <Image
        src={urlFor(mainImage).url()}
        alt="Main Image"
        width={500}
        height={500}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default MainImage;
