import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'lj9o63jn',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: true,
});

// to catch image Id from @sanity/image-url
const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};
