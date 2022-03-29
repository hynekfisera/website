import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/assets/hf_indigo.svg";

export default function Header() {
  const { t } = useTranslation("header");

  const links = [
    {
      text: "Portfolio",
      href: "/",
    },
    {
      text: t("about_me"),
      href: "/about-me",
    },
    {
      text: t("projects"),
      href: "/projects",
    },
    {
      text: t("contact"),
      href: "/contact",
    },
  ];

  return (
    <header className="flex justify-between items-center px-12 py-6 max-w-screen-2xl mx-auto">
      <Link href="/">
        <a className="transition duration-200 hover:opacity-90 flex items-center">
          <Image src={Logo} alt="Logo" layout="fixed" width={40} height={40} />
        </a>
      </Link>
      <div className="flex gap-8">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <a className="font-semibold tracking-wide text-gray-500 transition duration-200 hover:text-gray-700">{link.text}</a>
          </Link>
        ))}
      </div>
    </header>
  );
}
