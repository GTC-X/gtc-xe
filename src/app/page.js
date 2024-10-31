import { useTranslations } from "next-intl";
import HeroBanner from "./components/home/HeroBanner";
import Service from "./components/home/Service";
import Solution from "./components/home/solution";
import SuccessFullWork from "./components/home/successFullWork";
import TechnologySolution from "./components/home/technologySolution";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
      <HeroBanner />
      <div className=" bg-white">
        <Service />
        <Solution />
        <div className=" bg-black">
          <TechnologySolution />
        </div>
        <SuccessFullWork />
      </div>
    </>
  );
}
