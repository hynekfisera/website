import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/assets/hf_indigo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Header() {
  const { t } = useTranslation("header");
  const { locale, asPath } = useRouter();

  const [visible, setVisible] = useState(false);

  const links = [
    {
      text: "Portfolio",
      href: "/#portfolio",
    },
    {
      text: t("about_me"),
      href: "/#about-me",
    },
    /*{
      text: t("projects"),
      href: "/#portfolio",
    },*/
    {
      text: t("contact"),
      href: "mailto:hynek@flairleap.com",
    },
  ];

  return (
    <header className="flex justify-between items-center px-6 py-4 sm:px-8 md:px-12 md:py-6 max-w-screen-2xl mx-auto">
      <Link href="/">
        <a className="transition duration-200 hover:opacity-90 flex items-center">
          <Image src={Logo} alt="Logo" layout="fixed" width={40} height={40} />
        </a>
      </Link>
      <div className="flex flex-row-reverse sm:flex-row items-center justify-end gap-4 sm:gap-6">
        <div className={`${visible ? "translate-x-0" : "translate-x-full"} z-10 flex flex-col fixed transition-transform duration-200 pt-20 sm:pt-0 pl-8 sm:pl-0 top-0 h-full right-0 w-48 sm:w-auto bg-indigo-500 sm:static sm:bg-transparent gap-4 sm:gap-8 sm:translate-x-0 sm:flex-row`}>
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              <a onClick={() => setVisible(false)} className="xl:text-[17px] font-medium sm:font-semibold underline underline-offset-2 sm:no-underline sm:tracking-wide text-gray-50 sm:text-gray-500 sm:transition sm:duration-200 sm:hover:text-gray-700">
                {link.text}
              </a>
            </Link>
          ))}
        </div>
        <FontAwesomeIcon icon={faBars} className={`z-20 h-7 w-7 ${visible ? "text-white fixed top-[22px] right-6" : "text-gray-700"} sm:!hidden cursor-pointer`} onClick={() => setVisible((v) => !v)} />
        <Link href={asPath} locale={locale === "en" ? "cs" : "en"}>
          <a className="flex items-center justify-center text-indigo-500 hover:text-indigo-700 transition duration-200">
            <FontAwesomeIcon icon={faGlobe} className="h-[18px] sm:h-5" />
          </a>
        </Link>
      </div>
    </header>
  );
}
