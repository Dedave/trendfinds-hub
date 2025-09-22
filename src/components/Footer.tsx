import Link from "next/link";
import { ShoppingBag, Youtube, Instagram, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Quick Links": [
      { name: "About Us", href: "/about" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Contact", href: "/contact" },
    ],
    "Categories": [
      { name: "Sneakers & Fashion", href: "/sneakers" },
      { name: "Tech Gadgets", href: "/tech" },
      { name: "Home Gadgets", href: "/home" },
      { name: "All Products", href: "/products" },
    ],
    "Resources": [
      { name: "Blog", href: "/blog" },
      { name: "Deal Alerts", href: "/deals" },
      { name: "Size Guide", href: "/size-guide" },
      { name: "FAQ", href: "/faq" },
    ],
  };

  const socialLinks = [
    {
      name: "YouTube",
      href: "https://youtube.com",
      icon: <Youtube className="h-5 w-5" />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: <Instagram className="h-5 w-5" />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: <Twitter className="h-5 w-5" />,
    },
  ];

  return (
    <footer className="bg-slate-50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <ShoppingBag className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold gradient-text">
                  TrendFinds Hub
                </span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md">
                Your destination for affordable lifestyle finds. We curate the best sneakers,
                tech gadgets, and home innovations at unbeatable prices.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white shadow-sm hover:shadow-md border hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold mb-4 text-foreground">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} TrendFinds Hub. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span>Made with ❤️ for bargain hunters</span>
              <Link href="/affiliate-disclosure" className="hover:text-primary transition-colors">
                Affiliate Disclosure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
