import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Clock } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "בית", path: "/" },
    { name: "תפריט", path: "/menu" },
    { name: "הזמנת מקום", path: "/reservations" },
    { name: "אודותינו", path: "/about" },
    { name: "גלריה", path: "/gallery" },
    { name: "צור קשר", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary font-serif">מסעדת טעמים</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(item.path) ? "text-accent" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse text-sm text-muted-foreground">
            <div className="flex items-center space-x-1 space-x-reverse">
              <Phone className="h-4 w-4" />
              <span>03-5184689</span>
            </div>
            <div className="flex items-center space-x-1 space-x-reverse">
              <Clock className="h-4 w-4" />
              <span>ראשון-חמישי: 18:00-23:00</span>
            </div>
          </div>

          {/* Reservation Button - Desktop */}
          <div className="hidden md:block">
            <Link to="/reservations">
              <Button variant="hero" size="sm">
                הזמנת מקום
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-accent/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 border-t border-border mt-4">
                <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground mb-2">
                  <Phone className="h-4 w-4" />
                  <span>03-1234567</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground mb-4">
                  <Clock className="h-4 w-4" />
                  <span>ראשון-חמישי: 18:00-23:00</span>
                </div>
                <Link to="/reservations" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="hero" className="w-full">
                    הזמנת מקום
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;