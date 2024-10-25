import Link from "next/link";
// import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchTutorials } from "@/sanity/api"; // Ensure this path is correct

const Items = (props) => {
  return (
    <div className="py-8 w-full md:w-[80%] flex flex-wrap md:flex-nowrap bg-white my-4 px-5 rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <div className="md:w-64 flex-shrink-0 flex flex-col mb-6">
        <span className="font-semibold title-font text-gray-700">Artificial Intelligence</span>
        <span className="mt-1 text-gray-500 text-sm">{props.createdAt.slice(0, 10)}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{props.title}</h2>
        <p className="leading-relaxed mb-4">{props.description}</p>
        <Link className="text-indigo-500 inline-flex items-center mt-4" href={`/blog/${props.slug}`}>
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const Blog = async () => {
  const res = await fetchTutorials(`*[_type == "blogs"]`);

  // Create an array to store the blogs
  const blogs = res.map((val) => ({
    title: val.title,
    description: val.description,
    slug: val.slug.current,
    createdAt: val._createdAt,
    id: val._id, // Make sure you use the correct ID field
  }));

  return (
    <section className="text-gray-600 body-font overflow-hidden bg-[#f3f4f6] mb-1 shadow-2xl">
      <div className="py-10 mx-auto container px-4 md:px-6 lg:px-10">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {blogs.map((val, index) => (
            <Items
              description={val.description}
              title={val.title}
              slug={val.slug}
              createdAt={val.createdAt}
              id={val.id}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
