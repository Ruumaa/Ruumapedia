import { client } from './sanity';

export const getImages = async () => {
  const query = "*[_type=='heroImage'][0]";
  try {
    const images = await client.fetch(query);
    return images;
  } catch (error) {
    console.error('Error at getImages', error);
    throw error;
  }
};

export const getDataProducts = async () => {
  const query = `*[_type=="product"][0...4] | order(_createdAt desc){
    _id,
      price,
      name,
      "slug": slug.current,
      "categoryName": category->category,
      "imageUrl": images[0].asset->url
  }`;
  try {
    const dataProducts = await client.fetch(query);
    return dataProducts;
  } catch (error) {
    console.error('Error at getDataProducts ', error);
    throw error;
  }
};

export const getDataProduct = async (slug: string) => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
    _id,
      images,
      price,
      name,
      description,
      "slug": slug.current,
      "categoryName": category->category,
      price_id
      
  }`;
  try {
    const dataProduct = await client.fetch(query);
    return dataProduct;
  } catch (error) {
    console.error('Error at getDataProduct', error);
    throw error;
  }
};

export const getProductsBycategory = async (category: string) => {
  try {
    let query;
    if (category == 'All') {
      query = `*[_type == "product"] {
        _id,
        price,
        name,
        "imageUrl": images[0].asset->url,
        "slug": slug.current,
        "categoryName": category->category
      }`;
    } else {
      query = `*[_type == "product" && category->category == "${category}"] {
        _id,
        price,
        name,
        "imageUrl": images[0].asset->url,
        "slug": slug.current,
        "categoryName": category->category
      }`;
    }
    const dataProducts = await client.fetch(query);
    return dataProducts;
  } catch (error) {
    console.error('Error at getProductsBycategory', error);
    throw error;
  }
};
