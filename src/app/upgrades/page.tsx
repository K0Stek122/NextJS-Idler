import Navbar from "../components/Navbar";
import UpgradeCard from "../components/UpgradeCard";
import { BACKGROUND_STYLES, BACKDROP_STYLES } from "../globals";

export default function Home() {
  return (
    <div className={BACKGROUND_STYLES}>
        <div className={BACKDROP_STYLES}>
            <Navbar />
            <UpgradeCard
                upgradeName="Bronze Miner"
                upgradeDescription="Mines 1 Bronze Per Second"
                price={100} />
        </div>
    </div>
  );
}