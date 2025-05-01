import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export function SocialSharing() {
  return (
    <div className="flex flex-row md:flex-col gap-4 items-center">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-500 transition"
        aria-label="Share on Facebook"
      >
        <FaFacebookF size={25} />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition"
        aria-label="Share on Twitter"
      >
        <FaTwitter size={25} />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink-500 transition"
        aria-label="Share on Instagram"
      >
        <FaInstagram size={25} />
      </a>
    </div>
  );
}
