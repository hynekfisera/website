import type { NextPage } from "next";
import { useTranslation, Trans } from "next-i18next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TransLink from "../components/translation/TransLink";

import AcewillLogo from "/public/assets/portfolio/acewill.png";
import AcewillImage from "/public/assets/portfolio/portfolioAcewill.webp";
import GarnetLogo from "/public/assets/portfolio/garnet.svg";
import GarnetImage from "/public/assets/portfolio/portfolioGarnet.webp";
import EryesLogo from "/public/assets/portfolio/eryes.png";
import EryesImage from "/public/assets/portfolio/portfolioEryes.webp";
import VrccLogo from "/public/assets/portfolio/vrcc.png";
import VrccImage from "/public/assets/portfolio/portfolioVrcc.webp";
import NyliumLogo from "/public/assets/portfolio/nylium.png";
import NyliumImage from "/public/assets/portfolio/portfolioNylium.webp";
import SwiftpassLogo from "/public/assets/portfolio/vercel.png";
import SwiftpassImage from "/public/assets/portfolio/portfolioSwiftpass.png";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "header", "index"])),
    },
  };
}

const Home: NextPage = (props) => {
  const { t } = useTranslation("index");

  const projects = [
    {
      img: SwiftpassImage,
      logo: SwiftpassLogo,
      name: "Swiftpass",
      description: t("portfolio_swiftpass"),
      links: [
        { text: t("portfolio_link_learnmore"), href: "https://swiftpass.hynekfisera.com/", type: "primary" },
        { text: t("portfolio_link_sourcecode"), href: "http://github.com/hynekfisera/swiftpass", type: "secondary" },
      ],
    },
    {
      img: AcewillImage,
      logo: AcewillLogo,
      name: "Acewill",
      description: t("portfolio_acewill"),
      links: [{ text: t("portfolio_link_learnmore"), href: "http://aprocle.com/", type: "secondary" }],
    },
    {
      img: GarnetImage,
      logo: GarnetLogo,
      name: "Garnet",
      description: t("portfolio_garnet"),
      links: [{ text: t("portfolio_link_learnmore"), href: "http://github.com/GarnetOS", type: "secondary" }],
    },
    {
      img: EryesImage,
      logo: EryesLogo,
      name: "Eryes",
      description: t("portfolio_eryes"),
      links: [{ text: t("portfolio_link_learnmore"), href: "http://www.twitch.tv/eryesloleague", type: "secondary" }],
    },
    {
      img: VrccImage,
      logo: VrccLogo,
      name: "VRCC",
      description: t("portfolio_vrcc"),
      links: [],
    },
    {
      img: NyliumImage,
      logo: NyliumLogo,
      name: "Nylium",
      description: t("portfolio_nylium"),
      links: [],
    },
  ];

  return (
    <>
      <NextSeo
        title={t("title")}
        description={t("description")}
        openGraph={{
          type: "website",
          // @ts-ignore
          url: props._nextI18Next.initialLocale === "en" ? "https://www.hynekfisera.com/" : "https://www.hynekfisera.cz/",
          title: t("title"),
          description: t("description"),
          site_name: "Hynek Fišera",
        }}
        languageAlternates={[
          {
            hrefLang: "en",
            href: "https://www.hynekfisera.com/",
          },
          {
            hrefLang: "cs",
            href: "https://www.hynekfisera.cz/",
          },
        ]}
      />
      <main>
        <section id="about-me" className="py-12">
          <div className="max-w-screen-lg mx-auto px-4">
            <div className="my-auto">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-700">
                <Trans t={t} i18nKey="intro_hello" components={[<span className="text-indigo-500" key={0} />]} />
              </h1>
              <p className="sm:text-lg xl:text-xl text-gray-900 mt-4 xl:mt-5">
                <Trans t={t} i18nKey="intro_tech" components={[<span className="font-semibold" key={0}></span>, <span className="font-semibold" key={1}></span>, <span className="font-semibold" key={2}></span>]} />
              </p>
              <p className="sm:text-lg xl:text-xl text-gray-900 mt-2 xl:mt-3">
                <Trans t={t} i18nKey="intro_portfolio" components={[<TransLink href="https://github.com/hynekfisera" className="text-indigo-500 hover:underline" key={0} />]} />
              </p>
              <div className="flex flex-wrap mt-4 xl:mt-5 gap-3">
                <Link href="mailto:hynek@flairleap.com">
                  <a className="btn btn-primary">{t("intro_cta1")}</a>
                </Link>
                <Link href="https://github.com/hynekfisera">
                  <a className="btn btn-secondary">{t("intro_cta2")}</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="py-8 max-w-screen-xl mx-auto px-4 xl:px-0">
          <h2 className="text-center text-3xl sm:text-4xl xl:text-5xl mb-4 lg:mb-0 text-gray-700">Portfolio</h2>
          {projects.map((project) => (
            <div key={project.name} className="flex flex-col sm:even:flex-row-reverse sm:flex-row mb-16 sm:mb-12 md:mb-0">
              <div className="sm:w-1/2 sm:px-4 md:px-16">
                <Image src={project.img} alt={project.name} />
              </div>
              <div className="sm:w-1/2 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 xl:h-11 xl:w-11 mr-2 flex items-center justify-center">
                    <Image src={project.logo} alt={project.name + "logo"} />
                  </div>
                  <span className="text-2xl xl:text-3xl font-bold text-gray-800">{project.name}</span>
                </div>
                <p className="text-lg sm:text-xl xl:text-2xl mb-2 sm:mb-3">{project.description}</p>
                <div className="flex gap-3">
                  {project.links.map((link, i) => {
                    return (
                      <Link href={link.href} key={i}>
                        <a className={`xl:text-xl font-semibold transition duration-200 underline underline-offset-2 ${link.type === "primary" ? "text-indigo-500 hover:text-indigo-700" : "text-gray-700 hover:text-gray-900 sm:no-underline"}`}>{link.text}</a>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
