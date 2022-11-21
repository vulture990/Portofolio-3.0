import Mail from "./mail.svg";
import Github from "./github.svg";
import Facebook from "./facebook.svg";
import Youtube from "./youtube.svg";
import Linkedin from "./linkedin.svg";
import Twitter from "./twitter.svg";
import Tiktok from "./tiktok.svg";
import Link from "@/components/Link";

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  tiktok: Tiktok,
};

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href) return null;

  const SocialSvg = components[kind];

  return (
    <Link
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
    </Link>
  );
};

export default SocialIcon;
