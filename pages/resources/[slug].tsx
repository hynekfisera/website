import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale, params }: { locale: string; params: { slug: string } }) {
  const source = fs.readFileSync(path.join("content", params.slug, `${locale}.mdx`), "utf-8");
  const mdxSource = await serialize(source);
  return { props: { ...(await serverSideTranslations(locale, ["common", "header", "footer", "ide"])), source: mdxSource } };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "ide" }, locale: "en" },
      { params: { slug: "ide" }, locale: "cs" },
    ],
    fallback: false,
  };
}

const Ide: NextPage = (props: any) => {
  const { t }: { t: any } = useTranslation("ide");
  // TODO: Add "show all resources" link above the article
  return (
    <>
      <NextSeo
        title={t("title")}
        description={t("description")}
        openGraph={{
          type: "website",
          // @ts-ignore
          url: props._nextI18Next.initialLocale === "en" ? "https://www.hynekfisera.com/resources/ide" : "https://www.hynekfisera.cz/resources/ide",
          title: t("title"),
          description: t("description"),
          site_name: "Hynek Fišera",
        }}
        languageAlternates={[
          {
            hrefLang: "en",
            href: "https://www.hynekfisera.com/resources/ide",
          },
          {
            hrefLang: "cs",
            href: "https://www.hynekfisera.cz/resources/ide",
          },
        ]}
      />
      <article className="!max-w-screen-lg mx-auto px-4 mt-8 mb-12 lg:mb-20 lg:px-0 prose prose-sm lg:prose-lg prose-headings:!mt-8 prose-headings:!my-4 prose-headings:text-indigo-500 lg:prose-h1:!text-[40px] prose-a:text-indigo-500 hover:prose-a:text-indigo-700 prose-strong:!text-gray-700">
        <MDXRemote {...props.source} />
      </article>
    </>
  );
};

export default Ide;
