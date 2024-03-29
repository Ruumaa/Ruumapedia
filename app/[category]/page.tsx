import Image from 'next/image';
import { SimplifiedProduct } from '../interface';
import { getProductsBycategory } from '../lib/fetch';
import Link from 'next/link';
import { rupiahDisplay } from '../lib/functions';
import CategoriesSection from '../components/CategoriesSection';

export const dynamic = 'force-dynamic';

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const data: SimplifiedProduct[] = await getProductsBycategory(
    params.category
  );
  return (
    <div className="mb-10">
      <CategoriesSection />
      <div className="mx-auto max-w-2xl px-4 sm:px-16 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {params.category == 'All'
              ? 'Our Products for Everyone'
              : `Our ${params.category}'s Products`}
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

              <div className="flex mt-4 justify-between ">
                <div>
                  <h3 className="text-sm text-gray-700 dark:text-stone-300 dark:hover:text-primary hover:text-primary">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.categoryName}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
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
