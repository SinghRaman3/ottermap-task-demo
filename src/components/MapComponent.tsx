"use client";

import React, { useRef, useEffect, useState } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Feature } from "ol";
import { Geometry, Point, Polygon } from "ol/geom";
// import { fromLonLat } from "ol/proj";
// import { features } from "process";
// import { Coordinate } from "ol/coordinate";
import Draw from "ol/interaction/Draw";
import Style from "ol/style/Style";
import { Fill, Stroke } from "ol/style";

const MapComponent = ({ select }) => {
  let mapRef = useRef(null);
  var map = new Map();

  useEffect(() => {
    if (mapRef.current) {
      map = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });

      //Point Interaction
      map.on("click", (e) => {
        let layerLength = e.map.getAllLayers().length;
        let lastLayer;

        //To remove the previously marked point
        if(layerLength>1) { 
            lastLayer = e.map.getLayers().getArray()[layerLength - 1];
            e.map.removeLayer(lastLayer)
        }

        //For point markers we used vector layer and got the coordinates from onClick
        const marker = new VectorLayer({
          source: new VectorSource({
            features: [
              new Feature({
                geometry: new Point(e.coordinate),
              }),
            ],
          }),
        });
        //Add the layer to the map
        e.map.addLayer(marker);
      });

      //Polygon Interaction
      const drawPolygonInteraction = new Draw({
        type: "Polygon",
        style: new Style({
          stroke: new Stroke({
            color: "blue",
          }),
          fill: new Fill({
            color: "blue",
          }),
        }),
      });

    // fucntion that runs when drawend is reached
    //   drawPolygonInteraction.on("drawend", (e) => {
    //     console.log(e);
    //   });

      //Line Interaction
      const drawLineInteraction = new Draw({
        type: "LineString",
        style: new Style({
          stroke: new Stroke({
            color: "blue",
          }),
          fill: new Fill({
            color: "blue",
          }),
        }),
      });

    // function that runs when drawend is reached
    //   drawLineInteraction.on("drawend", (e) => {
    //     console.log(e);
    //   });

      if (select === "polygon") map.addInteraction(drawPolygonInteraction);
      else if (select === "line") map.addInteraction(drawLineInteraction);

      return () => {
        map.setTarget(undefined);
      };
    }
  }, [select]);

  return (
    <div
      style={{ height: "100vh", width: "80%" }}
      ref={mapRef}
      //   className="map-container"
    ></div>
  );
};

export default MapComponent;
