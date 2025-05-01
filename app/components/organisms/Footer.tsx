export function Footer() {
  return (
    <footer id="footer" className="bg-white text-sm py-8 w-full text-[rgb(14,46,71)]">
      <div className="max-w-6xl mx-auto flex flex-row items-center justify-center gap-4">
        {/* Left Side - Copyright */}
        <p className="text-center md:text-right">
          © 2035 by Skyline
        </p>

        {/* Scroll To Top Icon */}
        <a href="#" className="hover:opacity-80 transition bg-[rgb(14,46,71)] z-1">
          <img
            src="/scroll-down.png"
            alt="Scroll to Top"
            className="w-10 h-10 object-contain rotate-180"
          />
        </a>

        {/* Right Side - Powered by Wix */}
        <p className="text-center text-xs">
          Inspired from <a href="https://www.wix.com/demone2/coming-soon-landing" target="_blank" rel="noreferrer noopener" className="underline">Wix | Coming soon landing</a>
        </p>
      </div>
    </footer>
  );
}