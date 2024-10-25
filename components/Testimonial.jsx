import Image from 'next/image';
import Link from 'next/link';

const TestimonialsSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto">
      <h1 className='sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 text-center'>Testimonials</h1>
      <div className='h-1 w-20 bg-indigo-500 rounded mx-auto mb-20'></div>
        <div className="flex flex-wrap -m-4">
          {[
            {
              name: 'HOLDEN CAULFIELD',
              role: 'Senior Product Designer',
              testimonial: 'Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90\'s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
              imgSrc: '/ceo.jpg',
            },
            {
              name: 'ALPER KAMU',
              role: 'UI Developer',
              testimonial: 'Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90\'s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
              imgSrc: '/chris.png',
            },
            {
              name: 'HENRY LETHAM',
              role: 'CTO',
              testimonial: 'Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90\'s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
              imgSrc: '/steve.jpg',
            },
          ].map(({ name, role, testimonial, imgSrc }, index) => (
            <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <Image
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={imgSrc}
                  width={80}  // Width of the image
                  height={80} // Height of the image
                />
                <p className="leading-relaxed">{testimonial}</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{name}</h2>
                <p className="text-gray-500">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
