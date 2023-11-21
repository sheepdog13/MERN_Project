import { useSetAtom } from "jotai";
import MapContainer from "../../components/MapContainer";
import Navigation from "../../components/Navigation";
import { infoAtom } from "../../atoms/info";
import { infos } from "../../data/infos";
import MarkersContainer from "../../components/MarkersContainer";

function Home() {
  const setInfos = useSetAtom(infoAtom);

  if (infos) {
    setInfos(infos);
  }
  return (
    <>
      <Navigation />
      <MapContainer />
      <MarkersContainer />
    </>
  );
}
export default Home;
