import type { NextPage } from "next";
import { useTranslation, Trans } from "next-i18next";
import { NextSeo } from "next-seo";
import Link from "next/link";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
              <h1 className="text-2xl font-semibold text-gray-800">
                <Trans t={t} i18nKey="intro_hello" components={[<span className="text-indigo-600" key={0} />]} />
              </h1>
              <p className="text-lg text-gray-900 mt-4">
                <Trans t={t} i18nKey="intro_tech" components={[<span className="font-semibold" key={0}></span>, <span className="font-semibold" key={1}></span>, <span className="font-semibold" key={2}></span>]} />
              </p>
              <p className="text-lg text-gray-900 mt-2">
                You can find some of the projects I&apos;ve worked on below or you can check my <span className="font-semibold">GitHub</span> where I share my coding projects!
              </p>
              <p className="text-lg text-gray-900 mt-2">
                I&apos;m currently working on the <span className="font-semibold">Flairleap</span> app (
                <Link href="https://flairleap.com/">
                  <a className="text-indigo-500 hover:underline">flairleap.com</a>
                </Link>
                ).
              </p>
              <div className="flex flex-wrap mt-4">
                <Link href="mailto:hynek@flairleap.com">
                  <a className="btn btn-primary mr-3 mb-2">Let&apos;s get in touch</a>
                </Link>
                <Link href="https://github.com/hynekfisera">
                  <a className="btn btn-secondary mb-2">My GitHub</a>
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
