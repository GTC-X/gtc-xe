import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Button, ButtonGroup } from "@nextui-org/button";
import Banner from "./components/banner";
import Service from "./components/service";
import Solution from "./components/solution";
import SuccessFullWork from "./components/successFullWork";
import TechnologySolution from "./components/technologySolution";
import LiquidityPricing from "./components/liqudityPricing";
import WhiteLabel from "./components/whiteLabel";
import WhyChooseUs from "./components/whyChooseUs";


export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <Banner />
      <Service />
      <Solution />
      <SuccessFullWork />
      <TechnologySolution />
      <LiquidityPricing />
      <WhiteLabel />
      <WhyChooseUs />
    </div>
  );
}
