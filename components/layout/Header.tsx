import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/assets/hf_indigo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const { t } = useTranslation("header");

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
      <div className={`${visible ? "translate-x-0" : "translate-x-full"} flex flex-col fixed transition-transform duration-300 pt-20 sm:pt-0 pl-8 sm:pl-0 top-0 h-full right-0 w-48 sm:w-auto bg-indigo-500 sm:static sm:bg-transparent gap-4 sm:gap-8 sm:translate-x-0 sm:flex-row`}>
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <a onClick={() => setVisible(false)} className="font-medium sm:font-semibold underline underline-offset-2 sm:no-underline sm:tracking-wide text-gray-50 sm:text-gray-500 sm:transition sm:duration-200 sm:hover:text-gray-700">
              {link.text}
            </a>
          </Link>
        ))}
      </div>
      <FontAwesomeIcon icon={faBars} className={`z-10 h-7 w-7 ${visible ? "text-white" : "text-gray-700"} sm:!hidden cursor-pointer`} onClick={() => setVisible((v) => !v)} />
    </header>
  );
}
