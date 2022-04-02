import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "header", "footer", "errorpages"])),
    },
  };
}

export default function Custom500() {
  const { t } = useTranslation("errorpages");

  return (
    <main className="h-[80vh] pt-16">
      <h1 className="text-center text-2xl">500 - {t("500")}</h1>
    </main>
  );
}
