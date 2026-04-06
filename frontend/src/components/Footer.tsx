const Footer = () => {
  const links = [
    "Support Center",
    "Invoicing",
    "Contract",
    "Careers",
    "Blog",
    "FAQ,s"
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl font-serif font-bold text-[#484848] tracking-wide">
              FASCO
            </h2>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[#484848] hover:text-gray-900 transition-colors text-sm font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-[#484848]">
            Copyright © 2026 Xpro . All Rights Reseved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
