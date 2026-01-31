import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Register", path: "/register" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Schedule", path: "/schedule" },
    { name: "Committee", path: "/committee" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/mitadtpersonafest/?igsh=bnFlMDRweDZ0ZHp1",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/mitpersonafest",
      label: "Facebook",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/watch?v=dqMmMN8PXw8",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="section-container py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div className="space-y-4">
  <Link to="/" className="inline-block">
    <img
      src={"/logo2.png"}
      alt="Persona Fest Logo"
      className="h-14 w-auto object-contain"
    />
  </Link>

  <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
    Persona Fest is the flagship techno-cultural festival of MIT ADT University,
    bringing together culture, innovation, and academic excellence.
  </p>
</div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-display font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LOCATION & SOCIAL */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-gray-900">
              Connect With Us
            </h4>

            <div className="flex items-start gap-3 text-gray-600 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>
                MIT ADT University, Loni Kalbhor, Pune, Maharashtra 412201
              </span>
            </div>

            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © Persona Fest 2026 – MIT ADT University. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            19–21 February 2026 • Pune, India
          </p>
        </div>
        {/* MADE BY */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Made by <span className="font-medium text-gray-700">
              Technology Cluster Secretary of IMPACT Student Council – Giriraj Baheti
            </span>{" "}
            •{" "}
            <a
              href="https://www.linkedin.com/in/giriraj-baheti-899ab5211"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </div>

      </div>
  
    </footer>
  );
};

export default Footer;
