import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { NextSeo } from "next-seo";

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
        <h1>{t("hello_world", { ns: "common" })}</h1>
      </main>
    </>
  );
};

export default Home;
