import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('/tiles-gallery.png')] h-[50vh] sm:h-[60vh] md:h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">

      <div className="w-full h-full rounded-lg bg-black/50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Discover Your Perfect Aesthetic
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Transform your ideas into high-quality tile designs with simple text prompts.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link href="/all-tiles">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                Browse Now
              </Button>
            </Link>

            <Link href="/pricing">
              <Button variant="outline" className="text-white">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;