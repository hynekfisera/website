import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faInstagram, faLinkedin, faSpotify, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "header", "footer", "links"])),
    },
  };
}

const Links: NextPage = (props) => {
  const { t } = useTranslation("links");

  const links = [
    {
      title: "Portfolio",
      icon: faGlobe,
      href: "/",
    },
    {
      title: "GitHub",
      icon: faGithub,
      href: "https://github.com/hynekfisera",
    },
    {
      title: "LinkedIn",
      icon: faLinkedin,
      href: "https://linkedin.com/in/hynekfisera",
    },
    {
      title: "YouTube",
      icon: faYoutube,
      href: "https://youtube.com/phpmyarfi",
    },
    {
      title: "Twitch",
      icon: faTwitch,
      href: "https://twitch.tv/arfilive",
    },
    {
      title: "Twitter",
      icon: faTwitter,
      href: "https://twitter.com/hynekfisera",
    },
    {
      title: "Instagram",
      icon: faInstagram,
      href: "https://instagram.com/hynekfisera",
    },
    {
      title: "Discord",
      icon: faDiscord,
      href: "https://arfi.cz/discord",
    },
    {
      title: "Spotify",
      icon: faSpotify,
      href: "https://open.spotify.com/user/hynekfisera",
    },
  ];

  return (
    <>
      <NextSeo
        title={t("title")}
        languageAlternates={[
          {
            hrefLang: "en",
            href: "https://www.hynekfisera.com/links",
          },
          {
            hrefLang: "cs",
            href: "https://www.hynekfisera.cz/links",
          },
        ]}
      />
      <main>
        <section id="links" className="py-16">
          <div className="max-w-screen-sm mx-auto px-4">
            <h1 className="text-center text-3xl font-semibold mb-8">{t("heading")}</h1>
            {links.map((link, i) => (
              <Link href={link.href} key={i}>
                <a className="mb-4 flex justify-center items-center gap-1 w-full text-lg font-medium text-center text-gray-700 border border-gray-700 rounded-md py-2 transition duration-200 hover:text-white hover:bg-gray-700">
                  {link.icon && <FontAwesomeIcon icon={link.icon} className="h-4" />} {link.title}
                </a>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Links;
