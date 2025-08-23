import CaveCard from "./components/CaveCard";
import Navbar from "./components/Navbar";
import { BACKGROUND_STYLES, BACKDROP_STYLES } from "./globals";

export default function Home() {
  return (
    <div className={BACKGROUND_STYLES}>
        <div className={BACKDROP_STYLES}>
            <Navbar />
            <CaveCard oreName="Bronze" timeToMine={2000} goldOnMine={1} />
            <CaveCard oreName="Copper" timeToMine={10000} goldOnMine={5} />
        </div>
    </div>
  );
}
