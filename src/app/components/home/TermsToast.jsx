"use client"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import Link from "next/link"

const TermsToast = () => {
  const { t } = useTranslation()
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    // Check if user has seen the toast before
    const hasSeenToast = localStorage.getItem("hasSeenTermsToast")

    if (!hasSeenToast) {
      setShowToast(true)
    }
  }, [])

  const handleClose = () => {
    setShowToast(false)
    // Set flag in localStorage
    localStorage.setItem("hasSeenTermsToast", "true")
  }

  const handleAccept = () => {
    setShowToast(false)
    // Set flag in localStorage
    localStorage.setItem("hasSeenTermsToast", "true")
  }

  if (!showToast) return null

  return (
    <div className="fixed z-50 max-w-md overflow-hidden bg-white rounded-lg shadow-lg bottom-4 right-4">
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">{t("termsToast.title")}</h3>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-600">{t("termsToast.message")}</p>
        <div className="flex justify-end mt-4 space-x-2">
          <Link href="/about/terms" className="flex items-center text-sm text-gray-600 hover:underline">
            {t("termsToast.readTerms")}
          </Link>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800"
          >
            {t("termsToast.accept")}
          </button>
        </div>
      </div>
    </div>
  )
}

export default TermsToast
