import type { NextPage } from "next";
import { useTranslation, Trans } from "next-i18next";
import { NextSeo } from "next-seo";
import Link from "next/link";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TransLink from "../components/translation/TransLink";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "header", "index"])),
    },
  };
}

const Home: NextPage = (props) => {
  const { t } = useTranslation("index");

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
        <section id="aboutme" className="py-16">
          <div className="max-w-screen-lg mx-auto px-4">
            <div className="my-auto">
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-700">
                <Trans t={t} i18nKey="intro_hello" components={[<span className="text-indigo-500" key={0} />]} />
              </h1>
              <p className="sm:text-lg text-gray-900 mt-4">
                <Trans t={t} i18nKey="intro_tech" components={[<span className="font-semibold" key={0}></span>, <span className="font-semibold" key={1}></span>, <span className="font-semibold" key={2}></span>]} />
              </p>
              <p className="sm:text-lg text-gray-900 mt-2">
                <Trans t={t} i18nKey="intro_portfolio" components={[<TransLink href="https://github.com/hynekfisera" className="text-indigo-500 hover:underline" key={0} />]} />
              </p>
              <div className="flex flex-wrap mt-4 gap-3">
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
      </main>
    </>
  );
};

export default Home;
