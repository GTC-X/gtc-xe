import { useTranslations } from "next-intl";
import HeroBanner from "./components/home/HeroBanner";
import Service from "./components/home/service";
import Solution from "./components/home/solution";
import SuccessFullWork from "./components/home/successFullWork";
import TechnologySolution from "./components/home/technologySolution";
import LiquidityPricing from "./components/home/liqudityPricing";
import WhiteLabel from "./components/home/whiteLabel";
import WhyChooseUs from "./components/home/whyChooseUs";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
      <HeroBanner />
      <Service />
      <Solution />
      <SuccessFullWork />
      <TechnologySolution />
      <LiquidityPricing />
      <WhiteLabel />
      <WhyChooseUs />
    </>
  );
}
