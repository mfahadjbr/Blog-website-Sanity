import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <header className="bg-slate-300 text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo Section */}
          <Link href={'./'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/logo.png" // Use your actual image source
              alt="Logo"
              width={80}
              height={40}
              className="rounded-full shadow p-2"
            />
            <span className="ml-3 text-xl">Tailblocks</span>
          </Link>

          {/* Navigation Section */}
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={'./'} className=" mr-5 hover:text-gray-900">Home</Link>
            <Link href={'./tutorials'} className=" mr-5 hover:text-gray-900">Tutorial</Link>
            <Link href={'./blog'} className=" mr-5 hover:text-gray-900">Blog</Link>
            <Link href={'./contact'} className=" mr-5 hover:text-gray-900">Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
