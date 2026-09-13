const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-20 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand block */}
          <div className="md:col-span-1">
            <div className="hidden md:flex items-center gap-2">
            <img src="./logo-text.png" alt="Dev Stack Logo" className="h-9 w-auto" />
            </div>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="flex gap-4 mt-4 text-gray-500 text-sm">
              <a href="#" className="hover:text-pink-500">GitHub</a>
              <a href="#" className="hover:text-pink-500">Twitter</a>
              <a href="#" className="hover:text-pink-500">LinkedIn</a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-gray-800 text-sm tracking-wide">
              PRODUCT
            </h4>
            <ul className="mt-4 space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-pink-500">Home</a></li>
              <li><a href="#" className="hover:text-pink-500">Technologies</a></li>
              <li><a href="#" className="hover:text-pink-500">Projects</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-800 text-sm tracking-wide">
              COMPANY
            </h4>
            <ul className="mt-4 space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-pink-500">About</a></li>
              <li><a href="#" className="hover:text-pink-500">Contact</a></li>
              <li><a href="#" className="hover:text-pink-500">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-800 text-sm tracking-wide">
              LEGAL
            </h4>
            <ul className="mt-4 space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-pink-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-500">Terms of Service</a></li>
            </ul>
          </div>
        
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-pink-500">Privacy</a>
            <a href="#" className="hover:text-pink-500">Terms</a>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;