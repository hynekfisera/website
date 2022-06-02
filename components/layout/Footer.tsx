import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { useTranslation, Trans } from "next-i18next";
import TransLink from "../translation/TransLink";
import Link from "next/link";

export default function Footer() {
  const { t } = useTranslation("footer");

  const links = [
    {
      name: t("group_portfolio"),
      links: [
        { text: "Swiftpass", href: "https://swiftpass.hynekfisera.com/" },
        { text: "Acewill", href: "https://aprocle.com/" },
        { text: "Garnet", href: "https://github.com/GarnetOS" },
        { text: "Eryes", href: "https://www.twitch.tv/eryesloleague" },
      ],
    },
    {
      name: t("group_about"),
      links: [
        { text: t("link_about_about"), href: "/#about-me" },
        { text: t("link_about_links"), href: "/links" },
        { text: t("link_about_contact"), href: "mailto:hynek@flairleap.com" },
      ],
    },
    {
      name: t("group_social"),
      links: [
        { text: "GitHub", href: "https://github.com/hynekfisera" },
        { text: "LinkedIn", href: "https://linkedin.com/in/hynekfisera" },
        { text: "YouTube", href: "https://youtube.com/phpmyarfi" },
        { text: "Twitch", href: "https://twitch.tv/arfilive" },
        { text: "Twitter", href: "https://twitter.com/hynekfisera" },
        { text: "Instagram", href: "https://instagram.com/hynekfisera" },
        { text: "Discord", href: "https://arfi.cz/discord" },
        { text: "Spotify", href: "https://open.spotify.com/user/hynekfisera" },
      ],
    },
    { name: t("group_resources"), links: [{ text: t("link_resources_ide"), href: "/resources/ide" }] },
  ];

  return (
    <footer className="pb-16 pt-6 sm:pt-12 bg-gradient-to-b from-slate-50 via-indigo-50 to-violet-100 lg:to-violet-200">
      <div className="max-w-4xl mx-auto px-4 xl:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
          {links.map((group, i) => (
            <div className="flex flex-col" key={i}>
              <span className="text-indigo-500 font-medium sm:text-lg tracking-wide">{group.name}</span>
              <ul className="list-none flex flex-col sm:gap-0.5 sm:mt-1">
                {group.links.map((link, index) => (
                  <li key={index} className="text-slate-600 sm:text-lg tracking-wide">
                    <Link href={link.href}>
                      <a className="hover:underline">{link.text}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-12 flex flex-col items-center text-center">
          <div className="sm:text-lg text-slate-900">
            &copy; Hynek Fišera {new Date().getFullYear()} |{" "}
            <Trans t={t} i18nKey="madewith" components={[<FontAwesomeIcon icon={faMugHot} className="w-5 inline-block" key={0} />, <TransLink href="https://www.google.com/maps/place/Hradec+Kr%C3%A1lov%C3%A9/" className="text-indigo-500 hover:underline" key={1} />]} />
          </div>
          <div className="text-slate-600 mt-1 text-xs sm:text-sm lg:text-base">
            <Trans
              t={t}
              i18nKey="builtusing"
              components={[
                <TransLink href="https://nextjs.org/" className="text-indigo-500 hover:underline" key={0} />,
                <TransLink href="https://tailwindcss.com/" className="text-indigo-500 hover:underline" key={1} />,
                <TransLink href="https://vercel.com/" className="text-indigo-500 hover:underline" key={2} />,
              ]}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
