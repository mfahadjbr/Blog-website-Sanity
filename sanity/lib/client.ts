import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
const client = createClient({
  projectId: 'evefb5k1',
  dataset: 'production',
  apiVersion: '2024-10-25',
  useCdn: false
})
export const fetchTutorials = async (query: string) => {
  return await client.fetch(query);
}
const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
export default client;