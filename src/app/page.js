import { useTranslations } from "next-intl";
import HeroBanner from "./components/home/HeroBanner";
import Service from "./components/home/Service";
import Solution from "./components/home/solution";
import SuccessFullWork from "./components/home/successFullWork";
import TechnologySolution from "./components/home/technologySolution";


export const metadata = {
  title: 'The East Trading Company | Maximize Your Forex Trading Potential',
  description: 'Invest with the World’s Leading Online Trading Platform. Our MetaTrader platform ensures stable performance and competitive spreads, giving you the advantage you need to make the most of every trade.',
}

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
      <HeroBanner />
      <div className=" bg-white">
        <Service />
        <div className=" h-2 w-full bg-primary" />
        <Solution />
        <div className=" bg-black">
          <TechnologySolution />
        </div>
        <SuccessFullWork />
      </div>
    </>
  );
}
