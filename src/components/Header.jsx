import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo section with image and text */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo-placeholder.png"
            alt="SoftSell Logo"
            className="w-8 h-8 rounded"
          />
          <div className="text-2xl font-bold text-blue-600 dark:text-white">
            Soft<span className="text-gray-900 dark:text-blue-400">Sell</span>
          </div>
        </div>

        <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200 font-medium">
          <a href="#how-it-works" className="hover:text-blue-500">
            How It Works
          </a>
          <a href="#why-us" className="hover:text-blue-500">
            Why Choose Us
          </a>
          <a href="#testimonials" className="hover:text-blue-500">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </nav>

        <button
          onClick={toggleDarkMode}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
}
