import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

const libraries = ["places"]
const mapContainerStyle = {
    'height': '100%'
}
const center = {
    lat: 50.054015, lng: 19.935251
}

function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    if (loadError) return "error loading maps"
    if (!isLoaded) return "Loading Maps"

    return (
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={center}>
            <Marker
                position={center}
            />
        </GoogleMap>
    )
}

export default Map;