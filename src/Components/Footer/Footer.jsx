
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* <!-- ========== FOOTER ========== --> */}
      <footer className="mt-auto bg-gray-900 w-full">
        <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {/* Brand */}
            <div className="col-span-full lg:col-span-1">
              <a
                className="flex-none text-2xl font-bold text-white focus:outline-hidden focus:opacity-80 flex items-center gap-2"
                href="#"
                aria-label="Brand"
              >
                <span className="text-orange-500 text-3xl">🍽️</span> RecipeHub
              </a>
            </div>
            {/* End Col */}
            {/* Product Links */}
            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">Product</h4>
              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    className="text-gray-400 hover:text-orange-400 transition"
                    href="#"
                  >
                    Pricing
                  </a>
                </p>
                <p>
                  <a
                    className="text-gray-400 hover:text-orange-400 transition"
                    href="#"
                  >
                    Changelog
                  </a>
                </p>
                <p>
                  <a
                    className="text-gray-400 hover:text-orange-400 transition"
                    href="#"
                  >
                    Docs
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}
            {/* Company Links */}
            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">Company</h4>
              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    className="text-gray-400 hover:text-orange-400 transition"
                    href="#"
                  >
                    About us
                  </a>
                </p>
                <p>
                  <a
                    className="text-gray-400 hover:text-orange-400 transition"
                    href="#"
                  >
                    Blog
                  </a>
                </p>
                <p>
                  <a
                    className="text-gray-400 hover:text-orange-400 transition"
                    href="#"
                  >
                    Careers
                  </a>
                  <span className="inline-block ms-1 text-xs bg-orange-600 text-white py-1 px-2 rounded-lg">
                    We're hiring
                  </span>
                </p>
                <p>
                  <a
                    className="text-gray-400 hover:text-orange-400 transition"
                    href="#"
                  >
                    Customers
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}
            {/* Newsletter */}
            <div className="col-span-2">
              <h4 className="font-semibold text-gray-100">Stay up to date</h4>
              <form>
                <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-gray-800 rounded-lg p-2">
                  <div className="w-full">
                    <label htmlFor="hero-input" className="sr-only">
                      Subscribe
                    </label>
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      className="py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm 
                 border border-transparent 
                 focus:border-orange-500 focus:ring-orange-500 
                 bg-gray-900 text-gray-200 placeholder-gray-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <a
                    className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition"
                    href="#"
                  >
                    Subscribe
                  </a>
                </div>
                <p className="mt-3 text-sm text-gray-400">
                  Get new recipes &amp; special offers. Never spam.
                </p>
              </form>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          {/* Bottom */}
          <div className="mt-5 sm:mt-12 grid gap-y-4 sm:flex sm:justify-between sm:items-center border-t border-gray-800 pt-6">
            <div>
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()}{" "}
                <span className="text-orange-500 font-semibold">RecipeHub</span>
                . Mostafa M.Ebrahem ❤🚀
              </p>
            </div>
            {/* Social Brands */}
            <div className="flex gap-3">
              <a
                className="size-10 inline-flex justify-center items-center rounded-lg bg-gray-800 text-gray-400 hover:text-sky-400 hover:bg-gray-700 transition"
                href="#"
              >
                <FaFacebookF />
              </a>
              <a
                className="size-10 inline-flex justify-center items-center rounded-lg bg-gray-800 text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition"
                href="#"
              >
                <FaTwitter />
              </a>
              <a
                className="size-10 inline-flex justify-center items-center rounded-lg bg-gray-800 text-gray-400 hover:text-pink-400 hover:bg-gray-700 transition"
                href="#"
              >
                <FaInstagram />
              </a>
              <a
                className="size-10 inline-flex justify-center items-center rounded-lg bg-gray-800 text-gray-400 hover:text-red-400 hover:bg-gray-700 transition"
                href="#"
              >
                <FaYoutube />
              </a>
            </div>
            {/* End Social Brands */}
          </div>
        </div>
      </footer>

      {/* <!-- ========== END FOOTER ========== --> */}
    </>
  );
}
