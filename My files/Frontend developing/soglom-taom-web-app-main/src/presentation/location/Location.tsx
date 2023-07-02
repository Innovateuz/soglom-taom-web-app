import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import ReactMapGl, { LngLat, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Button } from "../../components/Button";

export const Location = () => {
  // Setting user Location to State
  const [viewPort, setViewPort] = useState<{
    latitude: number;
    longitude: number;
    zoom: number;
    transitionDuration: number;
    doubleClickZoom: boolean;
  }>({
    latitude: 0,
    longitude: 0,
    zoom: 14,
    transitionDuration: 100,
    doubleClickZoom: false,
  });
  // Getting user Location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewPort({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 14,
        transitionDuration: 100,
        doubleClickZoom: false,
      });
      console.log(pos);
    });
  }, []);
  // Setting user location with marker
  function handleClick(e: any) {
    console.log(e);
    setViewPort({
      latitude: e.lngLat.lat,
      longitude: e.lngLat.lng,
      zoom: 14,
      transitionDuration: 100,
      doubleClickZoom: false,
    });
  }

  return (
    <Box
      sx={{
        height: 900,
        width: 400,
        position: "relative",
      }}
      className="relative flex flex-col  items-center"
    >
      {viewPort.longitude && viewPort.latitude && (
        <ReactMapGl
          initialViewState={viewPort}
          mapboxAccessToken={process.env.REACT_APP_MAP_TOKEN}
          mapStyle="mapbox://styles/mapbox/navigation-night-v1"
        >
          <Marker
            latitude={viewPort.latitude}
            longitude={viewPort.longitude}
            draggable
            color="orange"
            onDragEnd={(e) => handleClick(e)}
          ></Marker>
        </ReactMapGl>
      )}
      <Button
        name="Saqlash"
        className="px-[8rem]  absolute bottom-[10rem] bg-primary text-center "
      ></Button>
    </Box>
  );
};
