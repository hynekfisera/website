import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "header", "footer", "errorpages"])),
    },
  };
}

export default function Custom404() {
  const { t }: { t: any } = useTranslation("errorpages");

  return (
    <main className="h-[80vh] pt-16">
      <h1 className="text-center text-2xl">404 - {t("404")}</h1>
    </main>
  );
}
