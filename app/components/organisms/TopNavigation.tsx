import { useState } from "react";
import { Link } from "@remix-run/react";
import { Logo } from "~/components/molecules/Logo";
import { motion, AnimatePresence } from "framer-motion";

export function TopNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="
      absolute
      top-0
      left-0
      right-0
      z-20
      flex
      justify-between
      items-center
      bg-white/5
      bg-gradient-to-r from-transparent
      md:bg-transparent
    ">
      {/* Logo */}
      <Logo />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 items-center">
        <Link to="/" className="text-white font-medium hover:underline">
          Home
        </Link>
        <Link to="#subscribe" className="text-white font-medium hover:underline">
          Subscribe
        </Link>
      </nav>

      {/* Mobile Menu Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1 p-2 focus:outline-none h-[35px] align-center justify-between mr-[30px] md:mr-0"
        aria-label="Toggle Navigation Menu"
      >
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-30 bg-black bg-opacity-90 text-white flex flex-col justify-center items-center space-y-6 text-xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute top-4 right-4 text-white text-3xl"
            >
              &times;
            </button>
            <nav className="w-full h-full text-center">
              <ul className="space-y-4 mt-[80px]">
                <li>
                  <Link
                    to="/"
                    className="inline-block w-full py-2 hover:bg-white hover:text-black"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="#subscribe"
                    className="inline-block w-full py-2 hover:bg-white hover:text-black"
                    onClick={() => setOpen(false)}
                  >
                    Subscribe
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
