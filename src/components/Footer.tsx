import InstaIcon from "../assets/icons/insta.svg";
import XSocial from "../assets/icons/x-social.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

const legalLinks = [
  ["Privacy", "https://web.spark4speech.com/privacy"],
  ["Terms", "https://web.spark4speech.com/terms"],
  ["Support", "https://web.spark4speech.com/support"],
  ["Licenses", "https://web.spark4speech.com/licenses"],
];

const socialLinks = [
  { label: "SPARK on Instagram", href: "https://www.instagram.com/spark4speech/", icon: InstaIcon },
  { label: "SPARK on X", href: "https://x.com/spark4speech", icon: XSocial },
  { label: "SPARK on YouTube", href: "https://m.youtube.com/channel/UC4LhVoJRk9cEgbwi_c0290w", icon: YoutubeIcon },
];

export const Footer = () => (
  <footer className="bg-black py-5 text-white/60">
    <div className="container border-t border-white/10 py-8">
      <div className="flex flex-col items-center gap-5">
        <nav aria-label="Legal and support" className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {legalLinks.map(([label, href]) => <a key={href} href={href} className="hover:text-white hover:underline">{label}</a>)}
          <a href="mailto:contact@spark4speech.com" className="hover:text-white hover:underline">Contact</a>
        </nav>
        <ul className="flex justify-center gap-3" aria-label="Social links">
          {socialLinks.map(({ label, href, icon: Icon }) => <li key={href}><a aria-label={label} href={href} target="_blank" rel="noreferrer" className="grid min-h-11 min-w-11 place-items-center rounded-lg hover:bg-white/10 hover:text-white"><Icon /></a></li>)}
        </ul>
        <p className="text-center">© {new Date().getFullYear()} SPARK: Speech Personalized Access Resource Kit. All rights reserved.</p>
        <p className="max-w-2xl text-center text-sm text-white/35">SPARK is an augmentative and alternative communication tool created by Shreyas Jain and Catelyn Dao.</p>
      </div>
    </div>
  </footer>
);
