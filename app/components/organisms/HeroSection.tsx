export function HeroSection() {
  return (
    <section
      id="coming-soon"
      className="relative px-6 py-16 w-full text-white text-center mt-[50px] md:mt-[95px]"
    >
      <div className="relative flex flex-col items-center justify-center gap-6 md:h-[650px]">
        {/* Headlines */}
        <div className="flex flex-col align-center gap-15 justify-between h-[480px] md:h-[auto]">
          <div className="flex flex-col align-center gap-5 md:gap-15">
            <p className="tracking-[0.2em] text-[15px] md:text-[19px] z-1">OUR NEW SITE IS</p>
            <h1 className="text-[32px] md:text-[85px] font-bold leading-tight tracking-[0.25em] z-1">
              COMING<br />SOON
            </h1>
          </div>
          <p className="text-lg tracking-[0.2em] text-[17px] md:text-[19px] z-1">STAY TUNED!</p>
        </div>

        {/* Icon SVG */}
        <div className="w-[280px] h-[280px] md:w-[650px] md:h-[650px] absolute top-[140px] md:top-0">
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="3.5 3.5 193 193"
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
            aria-hidden="true"
            className="w-full h-full fill-white"
          >
            <g>
              <path d="M100.267 3.5v16.632h-.533V3.5h.533z" />
              <path d="M100.267 179.868V196.5h-.533v-16.632h.533z" />
              <path d="M196.5 99.734v.533h-16.632v-.533H196.5z" />
              <path d="M20.132 99.734v.533H3.5v-.533h16.632z" />
              <path d="M183.533 51.68l.265.462-14.42 8.288-.265-.462 14.42-8.288z" />
              <path d="M30.622 139.565l.265.462-14.42 8.288-.265-.463 14.42-8.287z" />
              <path d="M147.819 16.183l.462.265L140 30.872l-.463-.266 8.282-14.423z" />
              <path d="M59.997 169.131l.463.266-8.282 14.423-.462-.265 8.281-14.424z" />
              <path d="M51.896 16.342l8.331 14.395-.461.267-8.331-14.395.461-.267z" />
              <path d="M140.236 168.986l8.33 14.395-.46.267-8.332-14.395.462-.267z" />
              <path d="M16.39 51.817l14.433 8.264-.265.463-14.433-8.265.265-.462z" />
              <path d="M169.44 139.454l14.433 8.264-.264.463-14.434-8.265.265-.462z" />
            </g>
          </svg>
        </div>

        {/* GIF Image */}
        <div className="max-w-[280px] md:max-w-md md:w-full absolute top-[150px] md:top-[100px]">
          <img
            src="/clock-ticker.gif"
            alt="Coming Soon GIF"
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
}