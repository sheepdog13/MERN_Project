import React from "react";
import Map from "./common/Map";
import { mapAtom } from "../atoms/map";
import { useSetAtom } from "jotai";

function MapContainer() {
  const setMap = useSetAtom(mapAtom);

  const ininMap = (map: naver.maps.Map) => {
    setMap(map);
    naver.maps.Event.addListener(map, "click", () => {
      console.log("맵 클릭");
    });
  };

  return <Map width="100%" height="100%" ininMap={ininMap} />;
}

export default MapContainer;
