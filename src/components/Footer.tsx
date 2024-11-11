"use client";

import InstaIcon from "../assets/icons/insta.svg";
import XSocial from "../assets/icons/x-social.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60">
      <div className="container border-t border-white/10 py-5">
        <div className="flex flex-col gap-3">
          <ul className="flex justify-center gap-2.5">
            <li
              className="hover:cursor-pointer"
              onClick={() => window.open("https://www.instagram.com/spark4speech/", "_blank")}
            >
              <InstaIcon />
            </li>
            <li
              className="hover:cursor-pointer"
              onClick={() => window.open("https://x.com/spark4speech", "_blank")}
            >
              <XSocial />
            </li>
            <li
              className="hover:cursor-pointer"
              onClick={() => window.open("https://m.youtube.com/channel/UC4LhVoJRk9cEgbwi_c0290w", "_blank")}
            >
              <YoutubeIcon />
            </li>
          </ul>
          <div className="text-center mt-1">
            © {new Date().getFullYear()} SPARK: Speech Personalized Access
            Resource Kit &bull; All rights reserved
          </div>
          <div className="text-center text-sm text-[#535353]">
            SPARK: Speech Personalized Access Resource Kit is fiscally sponsored
            by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit
            (EIN: 81-2908499). SPARK: Speech Personalized Access Resource Kit is
            not an official Hack Club service. SPARK: Speech Personalized Access
            Resource Kit is not affiliated with Hack Club and Hack Club is not
            responsible for the operation of SPARK: Speech Personalized Access
            Resource Kit and its related services.
          </div>
        </div>
      </div>
    </footer>
  );
};
