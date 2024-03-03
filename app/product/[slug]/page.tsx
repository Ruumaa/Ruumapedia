import AddToBag from '@/app/components/AddToBag';
import CheckoutNow from '@/app/components/CheckoutNow';
import ImageGallery from '@/app/components/ImageGallery';
import { SlugData } from '@/app/interface';
import { getDataProduct } from '@/app/lib/fetch';
import { rupiahDisplay } from '@/app/lib/functions';
import { Button } from '@/components/ui/button';
import { Star, Truck } from 'lucide-react';

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  //   console.log(params.slug);
  const data: SlugData = await getDataProduct(params.slug);
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-scren-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>

            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <Star className="h-5 w-5" />
                <span className="text-sm">4.2</span>
              </Button>
              <span className="text-sm text-gray-500 transition duration-100">
                56 Ratings
              </span>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  {rupiahDisplay(data.price)}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  {rupiahDisplay(data.price + 40000)}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                Incl. Tax plus shipping
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="w-6 h-6" />
              <span className="text-sm">2-4 day shipping</span>
            </div>

            <div className="flex gap-2.5 font-medium">
              <AddToBag
                currency="IDR"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
              {/* <Button>Add To Bag</Button> */}
              <CheckoutNow
                currency="IDR"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
            </div>

            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
