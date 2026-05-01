import Link from "next/link";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-gray-200 dark:border-white/10">
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
              href="/signup"
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
                className="p-3 rounded-full bg-gray-100 dark:bg-white/10 hover:scale-110 transition"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="https://x.com/mhshanto8989"
                className="p-3 rounded-full bg-gray-100 dark:bg-white/10 hover:scale-110 transition"
              >
                <FaTwitter />
              </Link>

              <Link
                href="https://github.com/mhshanto-dev"
                className="p-3 rounded-full bg-gray-100 dark:bg-white/10 hover:scale-110 transition"
              >
                <FaGithub />
              </Link>

              <Link
                href="https://www.linkedin.com/in/mehedi-hasan-shanto-dev/"
                className="p-3 rounded-full bg-gray-100 dark:bg-white/10 hover:scale-110 transition"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 text-center text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Tilers Gallery. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;