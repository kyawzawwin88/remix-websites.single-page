import { Link } from "@remix-run/react";

export function Logo() {
  return (
    <div className="
      inset-0  
      md:bg-white/5
      bg-gradient-to-r from-transparent
    ">
      <div className="relative w-[165px] md:h-[186px] h-[93px] flex items-center justify-center">
        <div className="grid h-auto min-h-0 grid-rows-[1fr] grid-cols-[100%]">
          <div className="w-[68px] h-[68px] absolute top-3 md:top-[60px]">
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              role="presentation"
              aria-hidden="true"
              className="w-full h-full fill-white"
            >
              <path d="M196,52V4H4v192h192v-48h4v52H0V0h200v52H196z"></path>
            </svg>
          </div>
        
          <div className="flex items-center gap-2 z-1 mt-0 ml-[10px]">
            {/* Brand Name */}
            <Link to="/" className="text-2xl font-futuraLt tracking-widest text-white">
              Skyline
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}