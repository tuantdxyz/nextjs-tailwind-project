export default function Home() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-20">
      <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 w-1/2 sm:w-1/3 lg:w-1/4">
        <img src="/img1.jpg" loading="lazy" alt="img1" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
      </a>

      <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 w-1/2 sm:w-1/3 lg:w-1/4">
        <img src="/img2.jpg" loading="lazy" alt="img2" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VX</span>
      </a>

      <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 w-1/2 sm:w-1/3 lg:w-1/4">
        <img src="/img3.jpg" loading="lazy" alt="img3" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VW</span>
      </a>
    </div>
  );
}