"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'




const Map = () => {
   
    return (
      <MapContainer className="h-[35vh] rounded-lg bg-auto bg-no-repeat bg-center" 
        center={[41.6986, 2.8613]} zoom={14} scrollWheelZoom={false}
        
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGFvc3VyZmNsdWJiIiwiYSI6ImNsamhoM2M3djBoaHEzanA5aHo3NTZkOG0ifQ.MgHNGiwkxCR-dn7L2NrLlw`}
          attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
        />
          <Marker position={[41.6986, 2.8613]} >
            <Popup>
            Me encontraste
            </Popup>
          </Marker>
  </MapContainer>
  );
};

export default Map;









        
       
          
 
    
    







