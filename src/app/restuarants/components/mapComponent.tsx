"use client";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useMemo } from 'react';


const MapComponent = ({ center }: { center: { lat: number, lng: number } }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ["places"],
  });

  const mapOptions = useMemo(() => ({
    center,
    zoom: 15,
    mapContainerStyle: {
      width: '75%',
      height: '450px',
      margin: '0 auto',
      borderRadius: '10px',
      boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
      marginTop: '60px',
    },
  }), [center]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap {...mapOptions} />
  );
};

export { MapComponent };
