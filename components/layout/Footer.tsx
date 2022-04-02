import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { useTranslation, Trans } from "next-i18next";
import TransLink from "../translation/TransLink";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="pb-10">
      <div className="max-w-screen-xl mx-auto px-4 xl:px-0">
        <hr className="border-gray-300 mb-8" />
        <div className="sm:flex sm:justify-between">
          <div>
            &copy; {new Date().getFullYear()} |{" "}
            <Trans t={t} i18nKey="madewith" components={[<FontAwesomeIcon icon={faMugHot} className="w-5 inline-block text-gray-700" key={0} />, <TransLink href="https://www.google.com/maps/place/Hradec+Kr%C3%A1lov%C3%A9/" className="text-indigo-500 hover:underline" key={1} />]} />
          </div>
          <div>
            <Trans
              t={t}
              i18nKey="builtusing"
              components={[
                <TransLink href="https://nextjs.org/" className="text-indigo-500 hover:underline" key={0} />,
                <TransLink href="https://tailwindcss.com/" className="text-indigo-500 hover:underline" key={1} />,
                <TransLink href="https://netlify.com/" className="text-indigo-500 hover:underline" key={2} />,
              ]}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
