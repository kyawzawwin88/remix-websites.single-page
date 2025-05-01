export function ScrollDownArrow() {
  return (
    <div className="mt-10 flex justify-center">
      <a href="#footer" className="animate-bounce transition bg-transparent hover:bg-white/30 z-1" aria-label="Scroll Down">
        <img
          src="/scroll-down.png"
          alt="Scroll Down Arrow"
          className="w-12 h-12 object-contain"
        />
      </a>
    </div>
  );
}