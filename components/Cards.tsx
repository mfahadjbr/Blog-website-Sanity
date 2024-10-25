import { CardProps } from "@/sanity/lib/model";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const Cards = (props: CardProps) => {
  const { id, image, description, category, title } = props;

  return (
    <div className="p-4 md:w-1/3" key={id}>
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
        <Image
          className="w-full object-cover object-center rounded-t-2xl"
          src={urlFor(image).url()}
          alt="blog"
          width={400}
          height={300}
          layout="responsive"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {category}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3">{description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Cards;
