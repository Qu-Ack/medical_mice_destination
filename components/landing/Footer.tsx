const Footer = () => {
  return (
    <footer id="footer" className="bg-neutral-900 pb-8 pt-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="mb-4 text-2xl font-bold">MediTravel</h3>
            <p className="text-gray-400">
              Making quality healthcare accessible worldwide through seamless
              medical tourism solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-blue-500"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-blue-500"
                aria-label="Twitter"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-blue-500"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#search"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Find Hospitals
                </a>
              </li>
              <li>
                <a
                  href="#featured-hospitals"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Featured Hospitals
                </a>
              </li>
              <li>
                <a
                  href="#popular-destinations"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="javascript:void(0);"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Medical Treatment
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Travel Planning
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Accommodation
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Medical Visa Support
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Interpreter Services
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Stay Updated</h4>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter for the latest medical tourism updates
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-white focus:border-transparent focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="text-sm text-gray-400">
              © 2024 MediTravel. All rights reserved.
            </div>
            <div className="flex justify-start space-x-4 text-sm text-gray-400 md:justify-end">
              <a
                href="javascript:void(0);"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="javascript:void(0);"
                className="transition-colors hover:text-white"
              >
                Terms of Service
              </a>
              <a
                href="javascript:void(0);"
                className="transition-colors hover:text-white"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
