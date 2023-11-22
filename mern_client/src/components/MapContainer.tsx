import React from "react";
import Map from "./common/Map";
import { mapAtom } from "../atoms/map";
import { useSetAtom } from "jotai";
import { selectInfoAtom } from "../atoms/info";

function MapContainer() {
  const setMap = useSetAtom(mapAtom);
  const setSelectInfo = useSetAtom(selectInfoAtom);

  const ininMap = (map: naver.maps.Map) => {
    setMap(map);
    naver.maps.Event.addListener(map, "click", () => {
      setSelectInfo(null);
    });
  };

  return <Map width="100%" height="100%" ininMap={ininMap} />;
}

export default MapContainer;
