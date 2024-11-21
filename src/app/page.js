"use client"
import HeroBanner from "./components/home/HeroBanner";
import Service from "./components/home/Service";
import Solution from "./components/home/solution";
import SuccessFullWork from "./components/home/successFullWork";
import TechnologySolution from "./components/home/technologySolution";
import Markets from "./components/home/market";
import { useTranslation } from "react-i18next";
import MetaData from "./components/metaData";



export default function Home() {
  const { t } = useTranslation()
  return (
    <>
      <MetaData title={t("HomePage.metaData.title")} description={t("HomePage.metaData.desc")} />
      <div >
        <HeroBanner />
        <div className=" bg-white">
          <Service />
          <Solution />
          <div className=" bg-black">
            <TechnologySolution />
          </div>
          <Markets />
          <SuccessFullWork />
        </div>
      </div>
    </>
  );
}
