"use client"
import MetaData from "@/app/components/metaData"
import { useTranslation } from "react-i18next"
import { FileWarning, AlertTriangle, UserCog, UserX, TrendingUp, Scale, FileText, ShieldAlert } from "lucide-react"

const TermsAndConditions = () => {
  const { t } = useTranslation()
  return (
    <>
      <MetaData title={t("termsAndConditions.metaData.title")} description={t("termsAndConditions.metaData.desc")} />
      <div className="bg-white">
        <div className="container mx-auto">
          {/* Logo and Header */}
          <div className="grid items-center grid-cols-1 gap-2 md:grid-cols-2 min-h-96">
            <div className="flex flex-col order-2 md:order-1">
              <h1 className="mt-2 text-3xl font-bold">{t("termsAndConditions.heading")}</h1>
              <p className="text-sm">{t("termsAndConditions.desc")}</p>
              <p className="mt-2 text-lg font-semibold">{t("termsAndConditions.subHeading")}</p>
            </div>

            {/* Image */}
            <div className="flex flex-col justify-center order-1 mt-6 md:order-2">
              <div>
                <img src="/logo-about.jpg" alt="The East Trading Co. Logo" className="h-16 mx-auto mb-1" />
              </div>
              <div>
                <img src="/Accept terms-cuate.png" alt="Terms and Conditions" className="mx-auto h-52" />
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="pt-8 pb-20 space-y-10">
            {/* Disclaimer Section */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <FileWarning className="w-6 h-6 text-red-500" />
                <h2 className="text-lg font-semibold">{t("termsAndConditions.section1.heading")}</h2>
              </div>
              <p className="mt-4">{t("termsAndConditions.section1.para1")}</p>
            </div>

            {/* Recommendations Section */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-500"/>
                <h2 className="text-lg font-semibold">{t("termsAndConditions.section2.heading")}</h2>
              </div>
              <p className="mt-4">{t("termsAndConditions.section2.para1")}</p>
            </div>

            {/* Account Management Section */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <UserCog className="w-6 h-6 text-red-500"/>
                <h2 className="text-lg font-semibold">{t("termsAndConditions.section3.heading")}</h2>
              </div>
              <p className="mt-4">{t("termsAndConditions.section3.para1")}</p>
            </div>

            {/* Client Responsibility Section */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <UserX className="w-6 h-6 text-red-500"/>
                <h2 className="text-lg font-semibold">{t("termsAndConditions.section4.heading")}</h2>
              </div>
              <p className="mt-4">{t("termsAndConditions.section4.para1")}</p>
            </div>

            {/* Market Fluctuations Section */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-red-500"/>
                <h2 className="text-lg font-semibold">{t("termsAndConditions.section5.heading")}</h2>
              </div>
              <p className="mt-4">{t("termsAndConditions.section5.para1")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TermsAndConditions