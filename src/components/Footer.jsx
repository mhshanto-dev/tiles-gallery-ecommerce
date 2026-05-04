import Link from "next/link";
import { Input, Label } from "react-aria-components";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Button, TextField } from '@heroui/react';

const Footer = () => {
  return (
    <footer className="relative mt-24 dark:border-white/10 container mx-auto bg-slate-50 border-t border-slate-200 py-12">
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-black dark:text-white">
              Contact Us
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm">
              Have questions or feedback? Reach out to us anytime.
            </p>

            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>Email:mhshanto.8989.t@gmail.com</p>
              <p>Phone: +880 1516504272</p>
            </div>

            <Link
              href="/contact"
              className="inline-block mt-2 text-sm font-medium text-black dark:text-white hover:underline"
            >
              Go to Contact Page →
            </Link>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-black dark:text-white">
              Follow Us
            </h2>

            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/mehedi.hasan.shanto.dev"
                className="p-3 rounded-full bg-gray-100 dark:bg-white/10 hover:scale-110  text-slate-600 hover:text-blue-600 transition-colors"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="https://x.com/mhshanto8989"
                className="p-3 rounded-full bg-gray-100 dark:bg-white/10 hover:scale-110 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <FaTwitter />
              </Link>

              <Link
                href="https://github.com/mhshanto-dev"
                className="p-3 rounded-full bg-gray-100 dark:bg-white/10 hover:scale-110 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <FaGithub />
              </Link>

              <Link
                href="https://www.linkedin.com/in/mehedi-hasan-shanto-dev/"
                className="p-3 rounded-full bg-gray-100 dark:bg-white/10 hover:scale-110 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <FaLinkedinIn />
              </Link>
            </div>
           <div className="flex flex-col gap-4">
  <h2 className="text-xl font-bold">Join Community</h2>
  <p className="text-gray-400">Get updates on new patterns.</p>
  
  <div className="flex w-full max-w-sm items-center space-x-2">
    <Input 
      name="email" 
      type="email" 
      placeholder="Email" 
      className="rounded-lg bg-[#1a1f2e] border-gray-700" 
    />
    <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 rounded-lg">
      Join
    </Button>
  </div>
</div>

          </div>
        </div>

        <div className="mt-12 text-center text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Tilers Gallery. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;