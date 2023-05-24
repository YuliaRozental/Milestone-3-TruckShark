import { useRef, useState } from 'react';
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

function MapContainer() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    });

    const mapRef = useRef(null);
    const [position, setPosition] = useState({
        lat: 40.704280480347634,
        lng: -74.05724237976072
    });

    function handleLoad(map) {
        mapRef.current = map;
    }

    function handleCenter() {
        if (!mapRef.current) return;

        const newPos = mapRef.current.getCenter().toJSON();
        console.log(newPos);
        setPosition(newPos);
    }

    return (
        <>
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    zoom={14}
                    onLoad={handleLoad}
                    onDragEnd={handleCenter}
                    center={position}
                    id="map"
                    mapContainerStyle={{
                        height: '900px',
                        width: '80%'
                    }}
                />)}
        </>
    );
}

export default MapContainer;