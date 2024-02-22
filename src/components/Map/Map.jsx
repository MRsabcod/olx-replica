import {  MapContainer, TileLayer } from 'react-leaflet'
import React, { useRef, useState } from 'react'
import { Zoom } from 'react-toastify'
import osmProvider from './osm-provider'
import "leaflet/dist/leaflet.css";
const Mapcomp = () => {
  const [center, setcenter] = useState({lat:24.860735,lng:67.001137})
  const ZOOM_LEVEL=9
  const mapref=useRef()
  return (
    <div>
      <iframe width="500" height="300" src="https://api.maptiler.com/maps/basic-v2/?key=CyiV9qsR2yb4x9aDLSeu#1.0/24.860735/67.001137"></iframe>
      <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapref}>

        <TileLayer url={osmProvider.maptiler.url}  />
      </MapContainer>
    </div>
  )
}

export default Mapcomp