import React, { useState, useEffect } from "react";
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

  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [top, setTop] = useState(true);

  useEffect(() => {
    setTransitionEnabled(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setTop(window.scrollY <= 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b py-3 ${top ? "md:py-6 bg-transparent border-transparent" : "border-slate-200 bg-slate-100/50 backdrop-blur-[2px]"}`}>
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-12">
        <Link href="/">
          <a className="transition duration-200 hover:opacity-90 flex items-center">
            <Image src={Logo} alt="Logo" layout="fixed" width={40} height={40} />
          </a>
        </Link>
        <div className="flex flex-row-reverse sm:flex-row items-center justify-end gap-4 sm:gap-6">
          <div
            className={`${visible ? "translate-x-0 border-l border-slate-200" : "translate-x-full"} ${
              transitionEnabled && "transition-transform duration-300"
            } z-10 flex flex-col fixed pt-16 sm:pt-0 pl-8 sm:pl-0 top-0 bottom-0 h-screen sm:h-auto right-0 w-48 sm:w-auto bg-slate-800/80 sm:static sm:bg-transparent gap-4 sm:gap-8 sm:translate-x-0 sm:flex-row`}
          >
            {links.map((link) => (
              <Link href={link.href} key={link.href}>
                <a onClick={() => setVisible(false)} className="xl:text-[17px] font-medium sm:font-semibold underline underline-offset-2 sm:no-underline sm:tracking-wide text-slate-50 sm:text-slate-600 sm:transition sm:duration-200 sm:hover:text-slate-700">
                  {link.text}
                </a>
              </Link>
            ))}
          </div>
          <FontAwesomeIcon icon={faBars} className={`z-20 h-7 w-7 ${visible ? "text-white fixed transition-all duration-200 top-[18px] right-6" : "text-slate-700"} sm:!hidden cursor-pointer`} onClick={() => setVisible((v) => !v)} />
          <Link href={asPath} locale={locale === "en" ? "cs" : "en"}>
            <a className={`${!visible ? "flex" : "hidden"} items-center justify-center text-indigo-500 hover:text-indigo-700 transition duration-200`}>
              <FontAwesomeIcon icon={faGlobe} className="h-[18px] sm:h-5" />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
