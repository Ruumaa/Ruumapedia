import Image from 'next/image';
import { SimplifiedProduct } from '../interface';
import { getProductsBycategory } from '../lib/fetch';
import Link from 'next/link';
import { rupiahDisplay } from '../lib/functions';

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const data: SimplifiedProduct[] = await getProductsBycategory(
    params.category
  );
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-16 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our {params.category}&apos;s Products
          </h2>
        </div>

        {/* newest product grid */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageUrl}
                  alt="Product Image"
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                  width={300}
                  height={300}
                />
              </div>

              <div className="flex mt-4 justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.categoryName}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {rupiahDisplay(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
