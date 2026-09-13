const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-20 pt-16 pb-8 border-t border-gray-100">
      <div>
        <div>
          {/* Brand block */}
          <div className="md:col-span-1">
            <div className="hidden md:flex items-center gap-2">
            <img src="/logo-text.png" alt="Dev Stack Logo" className="h-9 w-auto" />
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

          

          

          
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;