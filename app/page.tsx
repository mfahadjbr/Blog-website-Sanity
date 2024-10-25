import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Cards from '@/components/Cards';
import Testimonial from '@/components/Testimonial'
import client from '@/sanity/lib/client';

const fetchTutorials = async (query:any) => {
  const res = await client.fetch(query);
  return res;
}
export default async function Home() {
  const res = await fetchTutorials(`*[_type == "tutorials"]`)
  res.length = 3; //latest 3 blogs
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to Our Tech Blog
              <br className="hidden lg:inline-block"/>
              Unique Coder
            </h1>
            <p className="mb-8 leading-relaxed">
            In this blog, you can expect to find a diverse range of topics, including programming languages, web development, software engineering, data science, artificial intelligence, and much more. We believe that technology is constantly evolving, and staying up-to-date with the latest trends and advancements is essential for any aspiring coder.
            </p>
            <div className="flex justify-center">
              <Link href="/tutorials">
                <p className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Tutorials
                </p>
              </Link>
              <Link href="/blog">
                <p className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Blog
                </p>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/hero1.jpg"
              width={720}
              height={600}
              layout="responsive"
            />
          </div>
        </div>
      </section>
      <div className="popular-courses text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h3 className='text-3xl font-medium title-font text-gray-900 mb-4 text-center'>Popular Tutorials
          </h3>
          <div className="flex mt-1 justify-center" >
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
          </div>

        </div>
        <div className="container px-5 mx-auto" >
          <div className="flex flex-wrap -m-4" >

            {
              res.map((val: any, index: number) => {
                const { id, url, image, comments_no, views, description, category, title } = val
                return <Cards id={id} url={url} image={image} comments_no={comments_no} views={views}
                  description={description} category={category} title={title} key={index} />
              })
            }
          </div>
        </div>
      </div>
      <Testimonial />
    </>
  );
}
