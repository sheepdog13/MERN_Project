import React, { useEffect } from "react";

interface MapProps {
  width: string;
  height: string;
  ininMap?: (map: naver.maps.Map) => void;
}

function Map({ width, height, ininMap }: MapProps) {
  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    };

    const map = new naver.maps.Map("map", mapOptions);
    if (ininMap) {
      ininMap(map);
    }
  }, []);
  return <div id="map" style={{ width, height }}></div>;
}

export default Map;
